module.exports = (sessionHandlers, dataHelpers, text) => {
    return {

          
        initiateParkingSession: (ws, msg, cb) => {
            sessionHandlers.handshake(msg.cookie)
            .then((result) => {
            console.log("handshake returned: ", result);
            if (!result) {
              try{
                ws.send(JSON.stringify({ 
                    route: "session", 
                    type: "reject", 
                    data: "please login to begin a charging session" 
                }));
              } catch (error) {
                console.error(error);
              }
            } else {
                dataHelpers.checkForSpot(msg.data)
                .then((res) => {
                    let outMsgVcle = {
                        route: "session",
                        type: res[0],
                        data: {
                            note: res[1],  // a note for the client
                            endTime: ''
                        }
                    }

                    if (res[0] === "confirm") {
                        dataHelpers.createSession(result.userId, msg.data)
                        .then((createResult) => {
                            let sessRes = createResult[0];

                            // CLEAR THE SPOT & UPDATE PARKADE AVAILBILTITY ON SESSION COMPLETION
                            dataHelpers.chargeEndTimer(sessRes.charge_end, sessRes.spot_id, dataHelpers.makeSpotAvailable);

                            // ADD ENDTIME TO THE OUTBOUND MESSAGE
                            outMsgVcle.data.endTime = sessRes.charge_end;
                            
                            // SEND SMS NOTIFICATIONS 
                            dataHelpers.findPhoneNumberOfUser(result.userId).then((result) => {
                                console.log("phone number array: ", result[0].phone_number);
                                
                                const clientNumber = result[0].phone_number;
                                
                                // create timeout for 5 min warning sms message
                                text.messageTimer('fiveMinWarning', clientNumber, text.sendSMSMessage);
                                
                                // create timeout for charge finished warning sms message                      
                                text.messageTimer('chargeFinished', clientNumber, text.sendSMSMessage);                      
                            });
                            
                            // SEND OUT NEW SESSION CONFIRMATION TO CLIENT SIDE
                            console.log("parking session initiated, sending data: ", outMsgVcle);
                            ws.send(JSON.stringify(outMsgVcle));
                            dataHelpers.getSpots(res[2])
                            .then((getSpotRes) => {
                                dataHelpers.getCurrentChargeSessions(getSpotRes).then((spotsArrRes) => {
                                    let outMsgVcle = {
                                      route: "spots",
                                      type: "confirm",
                                      data: spotsArrRes  //result: array of parking_spot objects
                                    };
                                    cb(outMsgVcle);
                                })
                            })
                            .then(
                                dataHelpers.serveParkadeData()
                                .then((rows) => {
                                    let outMsgVcle = { route: "parkadeData", data: rows }
                                    try {
                                    cb(outMsgVcle);
                                    } catch (error) {
                                    console.error(error);
                                    }
                                })
                            )
                        });
                    } 
                    else {
                      try{
                        ws.send(JSON.stringify(outMsgVcle));
                      } catch (error) {
                        console.error(error);
                      }
                    }
                });
            }
            })
        }

        
    //　===================================================================
    //　=========================== END OF RETURN =========================
    //　===================================================================    
    }
}
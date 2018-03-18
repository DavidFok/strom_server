module.exports = (sessionHandlers, dataHelpers, text) => {
    return {


        initiateParkingSession: (ws, msg) => {
            sessionHandlers.handshake(msg.cookie)
            .then((result) => {
            console.log("handshake returned: ", result);
            if (!result) {
                ws.send(JSON.stringify({ 
                    route: "session", 
                    type: "reject", 
                    data: "please login to begin a charging session" 
                }))
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
                            // ADD ENDTIME TO THE OUTBOUND MESSAGE
                            outMsgVcle.data.endTime = createResult[0].charge_end;
                            
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
                        });
                    } 
                    else {
                        ws.send(JSON.stringify(outMsgVcle));
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
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
                    data: res[1]  // a note for the client
                    }
                    if (res[0] === "confirm") {
                    dataHelpers.createSession(result.userId, msg.data)
                        .then(() => {
                        console.log("result user id ==== ", result.userId);        
                        // send out new session confirmation to client side
                        dataHelpers.findPhoneNumberOfUser(result.userId).then((result) => {
                            console.log("phone number array: ", result[0].phone_number);
                            const clientNumber = result[0].phone_number;
                            // create timeout for 5 min warning sms message
                            text.messageTimer('fiveMinWarning', clientNumber, text.sendSMSMessage);
                            // create timeout for charge finished warning sms message                      
                            text.messageTimer('chargeFinished', clientNumber, text.sendSMSMessage);                      
                        });
                        ws.send(JSON.stringify(outMsgVcle));
                        });
                    } else {
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
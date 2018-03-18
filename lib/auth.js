module.exports = function (dataHelpers, sessionHandlers) {  
    return {


        registration: (msg, ws) => {
            return dataHelpers.retrieveUser(msg.data.email)
                .then((result) => {
                    return dataHelpers.checkForUser(result);
                })
                .then((result) => {
                    let check = result[0];
                    let user = result[1][0];

                    // IF THE USER IS ALREADY REGISTERED
                    if (check === false) {
                    console.log("user is already registered");
                    ws.send(JSON.stringify({ route: "registerData", type: "err", data: "user exists" }));
                    return false;
                    }

                    // IF THE USER IS NOT YET REGISTERED
                    else {
                    console.log("registering data");
                    // register user in database
                    return dataHelpers.registerUser(msg.data);
                    }
                })
                // SEND OUT SESSION TOKEN AND USER INFORMATION TO THE CLIENT
                .then((result) => {
                    // if the registration was successful
                    if (result !== false) {
                        ws.send(JSON.stringify({ route: "registerData", type: "confirm", data: "registration successful" }));
                        return true;
                    } 
                    // if the registration was not successful
                    else {
                    return false;
                    }
                });
        },
        

        login: (msg, ws) => {
            console.log('login requested!');

            // QUERY DATABASE FOR USER BY EMAIL
            dataHelpers.retrieveUser(msg.data.email)
            .then((result) => {
                return dataHelpers.checkForUser(result);
            })
            .then((result) => {
                let check = result[0];
                let user = result[1][0];

                // IF THE USER IS IN THE DATABASE
                if (check === false) {
                console.log("found user in database");

                    // IF THE PASSWORD ENTERED IS CORRECT
                    if (dataHelpers.checkUserPassword(msg.data.password, user.password_digest)) {
                        console.log("password correct!");
                        console.log("user.id: ", user.id);

                        // CHECK FOR PARKING SESSION
                        let chargeSession = dataHelpers.checkChargingSessions(user.id);
                        
                        // CREATE A SESSION FOR THE USER
                        let token = sessionHandlers.createSession(user.id);
                        
                        // chargeSession.then((result) => {
                        //   console.log("CHARGE SESSION RESULT: ", result);
                        // });

                        // token.then(() => {
                            // ws.send(JSON.stringify({ route: 'loginData', type: "confirm", data: data }));
                            // sessionHandlers.displaySessions();
                        // });

                        Promise.all([chargeSession, token]).then((result) => {
                          let chargeDBEntry = result[0];
                          console.log("CHARGE DB ENTRY: ", result[0]);
                          let data = {
                            session_token: token,
                            user: user,
                            charge_session: null
                          }

                          if (chargeDBEntry.length > 0) {
                            data.charge_session = chargeDBEntry[0];
                          } 
                          ws.send(JSON.stringify({ route: 'loginData', type: "confirm", data: data }));
                          sessionHandlers.displaySessions();
                        });
                    } 
                    
                    // IF THE PASSWORD ENTERED IS INCORRECT
                    else {
                        console.log("password incorrect!");

                        ws.send(JSON.stringify({ 
                            route: 'loginData', 
                            type: "err", 
                            data: "password incorrect" 
                        }));
                    }
                } 
                
                // IF THE USER IS NOT IN THE DATABASE
                else {
                    console.log("user is not in the database");

                    ws.send(JSON.stringify({ 
                        route: 'loginData', 
                        type: 'err', 
                        data: 'user not found' 
                    }));
                }
            });
        }


    //　===================================================================
    //　=========================== END OF RETURN =========================
    //　===================================================================    
    }
};
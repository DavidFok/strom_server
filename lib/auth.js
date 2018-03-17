module.exports = function (dataHelpers, sessionHandlers) {  
    return {

        // registration function
        registration: (msg, ws) => {
            return dataHelpers.retrieveUser(msg.data.email)
            .then((result) => {
                return dataHelpers.checkForUser(result);
            })
            .then((result) => {
                let check = result[0];
                let user = result[1][0];
                if (check === false) {
                // if the user is already registered
                console.log("user is already registered");
                ws.send(JSON.stringify({ route: "registerData", type: "err", data: "user exists" }));
                return false;
                } else {
                // if the user is not yet registered
                console.log("registering data");
                // register user in database
                return dataHelpers.registerUser(msg.data);
                }
            })
            .then((result) => {
                // send out session token and user information to the client
                if (result !== false) {
                // if the registration was successful
                ws.send(JSON.stringify({ route: "registerData", type: "confirm", data: "registration successful" }));
                return true;
                } else {
                // if the registration was not successful
                return false;
                }
            });
        },
        
        // login function
        login: (msg, ws) => {
            // query database for user by email
            console.log('login requested!');
            dataHelpers.retrieveUser(msg.data.email)
            .then((result) => {
                return dataHelpers.checkForUser(result);
            })
            .then((result) => {
                let check = result[0];
                let user = result[1][0];
                if (check === false) {
                // if the user is in the database
                console.log("found user in database");
                if (dataHelpers.checkUserPassword(msg.data.password, user.password_digest)) {
                    // if the password entered is correct
                    console.log("password correct!");
                    console.log("user.id: ", user.id);
                    // create a session for the user
                    let token = sessionHandlers.createSession(user.id);
                    let data = {
                    session_token: token,
                    user: user
                    };
                    token.then(() => {
                    ws.send(JSON.stringify({ route: 'loginData', type: "confirm", data: data }));
                    sessionHandlers.displaySessions();
                    });
                } else {
                    // if the password entered is incorrect
                    console.log("password incorrect!");
                    ws.send(JSON.stringify({ route: 'loginData', type: "err", data: "password incorrect" }));
                }
                } else {
                // if the user is not in the database
                console.log("user is not in the database");
                ws.send(JSON.stringify({ route: 'loginData', type: 'err', data: 'user not found' }));
                }
            });
        }
    }
};
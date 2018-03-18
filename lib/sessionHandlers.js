const uuidGenerator = require ('./uuidGenerator.js');

module.exports = function makeSessionHandlers(knex) {  
  return {
    

    createSession: (user_id) => {
      // creates a new session
      let newSession = {
        session_token: uuidGenerator(),
        user_id: user_id
      }
      return knex('session_tokens').insert(newSession)
      .then(() => {
        console.log('inserted session into database');
        return newSession.session_token;
      });
      // userSessions.push(newSession);
      // return the token
    },


    displaySessions: () => {
      // return session_tokens in database
      return knex.select('*').from('session_tokens')
      .then((results) => {
        console.log("session tokens: ");
        console.log(results);
      });
    },


    deleteToken: (token) => {
      if (token) {
        knex('session_tokens')
          .where('session_token', '=', token)
          .del()
          .then(console.log('Token Deleted'))
      } else {
        return new Promise ((resolve, reject) => {
          resolve(false);
        });
      }
    },


    handshake: (token) => {
      // check if there is a session with the session token
      return knex.select('*').from('session_tokens')
        .then((sessions) => {
          console.log("session.length = ", sessions.length);
          console.log("sessions: ", sessions);
          if (sessions.length === 0) return false;
          else {
            for (let session of sessions) {
                if(session.session_token === token) {
                  return ( 
                    knex('sessions')
                    .where('user_id', "=", session.user_id)
                    .then((res) => {
                      let loggedIn = { 
                        identified: true, 
                        userId: session.user_id, 
                        session: null
                      };
                      if (res.length > 0) {
                        loggedIn.session = res[0];
                      };
                      return loggedIn;
                    })
                  )
                } else {
                  return false;
                }           
              };
          }  
        });
    }

    
  //　===================================================================
  //　=========================== END OF RETURN =========================
  //　===================================================================
  };
};
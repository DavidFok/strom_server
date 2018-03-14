const uuidGenerator = require ('./uuidGenerator.js');

module.exports = function makeSessionHandlers(knex, userSessions) {  
  return {
    createSession: (user_id) => {
      // creates a new session
      let newSession = {
        session_id: uuidGenerator(),
        session_token: uuidGenerator(),
        user_id: user_id
      }
      userSessions.push(newSession);
      // return the token
      return newSession.session_token;
    },

    displaySessions: () => {
      userSessions.forEach((session, index) => {
        console.log("session# " + index + " : ", session);
      });
    }
  };
};
const uuidGenerator = require ('./uuidGenerator.js');

module.exports = function makeSessionHandlers(knex, userSessions) {  
  return {
    createSession: () => {
      // creates a new session
      let newSession = {
        session_id: uuidGenerator(),
        password: uuidGenerator(),
      }
      userSessions.push(newSession);
    },

    displaySessions: () => {
      userSessions.forEach((session, index) => {
        console.log("session# " + index + " : ", session);
      });
    }
  };
};
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

    handshake: (token) => {
      // identifies the session by using the user supplied token
      let identified = false;
      // check if there is a session with the session token
      return knex.select('*').from('session_tokens')
      .then((sessions) => {
        let identified = false;
        sessions.forEach((session, index) => {
          if(session.session_token === token) {
            identified = true;
          }
        });
        return identified;
      });
    }
  };
};
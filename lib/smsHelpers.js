module.exports = (client, originNumber) => {
  return {

    
    // CALLS THE sendSMSMessage FUNCTION AT THE APPROPRIATE TIME
    messageTimer: (messageType, phone_number, cb) => {
      let timeTill;
      let message;

      switch (messageType) {
        case 'fiveMinWarning':
          timeTill = 15000;
          // timeTill = 25 * 60 * 1000; // 25 minutes
          message = 'There are five minutes left in your charge session!';
          break;
        case 'chargeFinished':
          timeTill = 20000;
          // timeTill = 30 * 60 * 1000; // 30 minutes
          message = "Your charge session is over!";
          break;
      }
      
      setTimeout(() => {
        cb(message, phone_number);
      }, timeTill);
    },


    sendSMSMessage: (message, phone_number) => {
      const clientNumber = `+1${phone_number}`;
      console.log("receiving number is: ", clientNumber);
      client.messages
        .create({
          to: clientNumber,
          from: originNumber,
          body: message
        })
        .then(message => console.log(message.sid));
    }

    
  //　===================================================================
  //　=========================== END OF RETURN =========================
  //　===================================================================
  }
}
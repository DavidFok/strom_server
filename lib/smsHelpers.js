module.exports = (client, originNumber) => {
  return {

    
    // calls the sendSMSMessage function at the appropriate time
    messageTimer: (messageType, phone_number, cb) => {
      let timeTill;
      let message;
      switch (messageType) {
        case 'fiveMinWarning':
          timeTill = 5000;
          // timeTill = 25 * 60 * 1000;
          message = 'There are five minutes left in your charge session!';
          break;
        case 'chargeFinished':
          timeTill = 10000;
          // timeTill = 30 * 60 * 1000;
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
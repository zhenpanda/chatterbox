/*
Bots ability to read and understand the message from the user
// strings interpolation

// regex
const course = `RFB2`;
course.startsWith('RFB')
// true

const flight = '20-23330-jz';
flight.endsWith('jz')
// true

const accountNum = '8888RT0001';
accountNum.includes('RT');
// true

*/

module.exports = {
  read: function(message) {
    //remove punctuation question mark
    let msg = "";
    let msgType = "";

    if (message.includes("?")) {
      msg = message.replace("?", "");
      msgType = "question";
    }else{
      msg = message;
    }

    let tokenizeMsg = msg.split(" ");
    //console.log(tokenizeMsg);

    let words = [];
    tokenizeMsg.map((word)=>{
      // console.log(word);
      words.push(word);
    })

    return [msgType, words]
  }
};

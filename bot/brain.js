/*
Design:

  Bot converstaion rotate throught 3 phases

  1. Leading question: To kick off a topic and get the user involved into talking to the bot.
  Example: Have you watched Westworld? I love that show...

  2. Collect: Reading the response from the user.
  Example: User -> "I hate robots..."

  3. Profile Response: Depending on the profile of the bot, it will response back to the user
  Example: I will ignore any rude comment...please behave.

  4. Re-orient: The bot will decide how to go able talking again and start/continue/end the topic.
  Example: Interesting...I got 2 go...good bye.

Goals:

  Logic congruence: aware of thing the bot it self says

  Conversation continuity: aware of the things said by both parties in a converstion

*/

class Brain {
  // readying bot
  constructor(profile = null) {
    this.personality = profile;

    // starter values
    this.orientation = null;
    this.interstLevel = 12;
  };

  interact(inputMsg) {
    //starter build auto decrease intrest level per interaction

    // starting interation
    if (this.interstLevel == 12) {
      let interpretation = this.read(inputMsg);
      switch (interpretation[0]) {
        case "question":
        console.log("You are asking me a question...");
        this.initiation(interpretation[1]);
        break;
      }
      this.interstLevel--;
    }

  };

};

// message reading function of the bot
const ReadImport = require('./tools/read.js');
Brain.prototype.read = ReadImport.read;
// base logic
const LogicImport = require('./tools/logic.js');
Brain.prototype.initiation = LogicImport.initiation;


module.exports = Brain;

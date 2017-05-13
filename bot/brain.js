/*
Design:

  Bot converstaion rotate throught 3 phases

  0. Idea of time and passage of time, time interval...

  1. Leading question: To kick off a topic and get the user involved into talking to the bot.
  Example: Have you watched Westworld? I love that show...

  *Intent: The bot will decide how to go able talking again and start/continue/end the topic.
  Example: Interesting...I got 2 go...good bye.

  three points of intent randomly choosen

    1. questioning user
    2. sharing pain
    3. hiding intent

  These will start off the leading question

  2. Collect: Reading the response from the user.
  Example: User -> "I hate robots..."

  *Reading must be done holisticly and has a whole before responding
  *Pulling from db to have a "full context"

  3. Profile Response: Depending on the profile of the bot, it will response back to the user
  Example: I will ignore any rude comment...please behave.

  *Response done as a package, pushed into the front-end


Goals:

  Logic congruence: aware of thing the bot it self says

  Conversation continuity: aware of the things said by both parties in a converstion

*/

class Brain {
  // readying bot
  constructor(profile = null) {
    // time passage
    this.timePassed = 0;
    // imported personality
    this.personality = profile;

    // starter values
    this.orientation = null;
    this.interstLevel = 12;
  };

  // start the bot
  start() {
    // init interal logics
    let timeInterval = setInterval( () => {
      this.timePassed = this.timePassed + 1;
      // log every 1 second / ticks
      console.log('Current time is ' + this.timePassed + ' second!' );
      if (this.timePassed == 25) {
        console.log('You seem quite...today.');
      }
    }, 1000);
  }

  // interact by listening
  interact(inputMsg) {
    //starter build auto decrease intrest level per interaction
    // starting interation
    if (this.interstLevel <= 12) {
      let interpretation = this.read(inputMsg);
      switch (interpretation[0]) {
        case "question":
          console.log("You are asking me a question...");
          this.initiation(interpretation[1]);
          this.timePassed = 0;
          break;
        default:
          this.initiation(interpretation[1]);
          this.timePassed = 0;
          break;
      }
      this.interstLevel--;
      console.log("interstLevel...", this.interstLevel);
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

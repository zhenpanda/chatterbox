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
  constructor() {
    // time passage is kept by front-end
    this.self;
    // imported personality
    this.personality;
    // starter values
    this.intent;
    this.interstLevel;
  };

  // start the bot
  start() {
    //bot naming
    this.self = "B-2S0MA";
    this.interstLevel = 12
    // setting intent
    const intents = ["Question", "Share", "Hide"];

    // setting personality

    console.log("Bot is being started...");
    console.log(this);
  }

  // interact by listening
  interact(inputMsg) {
    //starter build auto decrease intrest level per interaction
    // interact job is to set interstLevel and insert into correct db

    // if (this.interstLevel <= 12) {
    //   let interpretation = this.read(inputMsg);
    //   switch (interpretation[0]) {
    //     case "question":
    //       console.log("You are asking me a question...");
    //       this.initiation(interpretation[1]);
    //       this.timePassed = 0;
    //       break;
    //     default:
    //       this.initiation(interpretation[1]);
    //       this.timePassed = 0;
    //       break;
    //   }
    //   this.interstLevel--;
    //   console.log("interstLevel...", this.interstLevel);
    // }

  };

};

/* Adding functions to the bot */
// message reading function of the bot
const ReadImport = require('./tools/read.js');
Brain.prototype.read = ReadImport.read;
// base logic
const LogicImport = require('./tools/logic.js');
Brain.prototype.initiation = LogicImport.initiation;
// imported profile for speech
const ProfileImport = require('./tools/profile.js');
Brain.prototype.blockSpeech = ProfileImport.blockSpeech;
Brain.prototype.triangleSpeech = ProfileImport.triangleSpeech;
Brain.prototype.trailSpeech = ProfileImport.trailSpeech;

module.exports = Brain;

const tcom = require('thesaurus-com');
// import from db, different understandings
// import topics from db, different topics to talk about


// export base logic
module.exports = {
  // basic understanding
  /*

  1. Greeting
  2. Praise
  3. Attack
  4. Leading
  5. Question

  */

  // let searched = tcom.search(word);
  // console.log(searched.synonyms);

  initiation: function(input) {
    // seach tool for key words
    console.log( tcom.search("") );

    // understanding of the bot from messge
    let understanding = null;

    // import from db greetings
    let greetings = [
     'aloha',
     'best wishes',
     'bonjour',
     'buenas noches',
     'buenos dias',
     'ciao',
     'good day',
     'good morning',
     'good wishes',
     'greetings',
     'hello',
     'hey',
     'hi ya',
     'high five',
     'how are you',
     'how goes it',
     'how do you do',
     'howdy',
     'howdy do',
     'regards',
     'salutation',
     'salute',
     'shalom',
     'speaking to',
     'welcome',
     'what\'s happening',
     'what\'s happening',
     'what\'s up',
     'How you doing',
     'How are you doing'
    ];
    // import from db robot self
    let self = [
      'you',
      'appliance',
      'automaton',
      'automaton',
      'automobile',
      'clone',
      'computer',
      'contraption',
      'contrivance',
      'drudge',
      'engine',
      'gadget',
      'implement',
      'instrument',
      'laborer',
      'machinery',
      'mechanical',
      'mechanism',
      'motor',
      'movement',
      'party',
      'puppet',
      'robot',
      'setup',
      'system',
      'tool',
      'widget',
    ];

    // random select from array
    let random = function(items) {return items[Math.floor(Math.random()*items.length)];}

    if (input=="init"){
      console.log("loading basic logic module...");
    }else if(Array.isArray(input)) {
      // combined check
      let wholeMsg = input.join(" ");

      // greet finder
      greetings.map((greet)=>{
        if (wholeMsg.includes(greet)) {
          understanding = "Greeting"
        }
      });
      if (understanding == "Greeting") {
        console.log("The message is a greeting. Reply with greeting...");
        console.log("replying...");
        console.log(random(greetings));
      }

      // break down check
    }

  },
}

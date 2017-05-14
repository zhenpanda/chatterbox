const Conversation = require('./controllers/conversation');
const Brain = require('./bot/brain');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send({message: "Base Route"})
  });

  app.get('/addCount', function(req, res) {
    Conversation.addCount();
    res.send({message: "added count..."})
  });

  app.get('/testbot', function(req, res) {
    // test run
    const bot = new Brain();
    bot.start();

    // create the bot pass it onto the front-end

    // let receivedMessage = "How are you doing today?";
    // bot.interact(receivedMessage);
    // let questionMessage = "what";
    // bot.interact(questionMessage);

    res.send({message: "bot console tests"});

  });

  // use post to start the bot
  app.post('/message', function(req, res) {
    console.log(req.body);
    // save it into the db

    // send back in response the whole converation to front-end

    res.end('It worked!');
  });

  //
  // // protect the route with middleware before the post route
  // app.post('/signin', requireSignin, Authentication.signin);
  // app.post('/signup', Authentication.signup);

};

const Conversation = require('./controllers/conversation');
const Brain = require('./bot/brain');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send({message: "Base Route"})
  });

  app.get('/talktome', function(req, res) {
    Conversation.mindSpace();
    res.send({message: "Started talking..."})
  });

  app.get('/addCount', function(req, res) {
    Conversation.addCount();
    res.send({message: "added count..."})
  });

  app.get('/testbot', function(req, res) {
    // testing
    var bot = new Brain();
    bot.initiation("init");

    let receivedMessage = "How are you doing today?";
    bot.interact(receivedMessage);

    res.send({message: "bot console tests"})
  });

  //
  // // protect the route with middleware before the post route
  // app.post('/signin', requireSignin, Authentication.signin);
  // app.post('/signup', Authentication.signup);

};

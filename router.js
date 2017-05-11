const Conversation = require('./controllers/conversation');

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

  //
  // // protect the route with middleware before the post route
  // app.post('/signin', requireSignin, Authentication.signin);
  // app.post('/signup', Authentication.signup);

};

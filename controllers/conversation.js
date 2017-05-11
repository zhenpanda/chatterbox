class Conversation {
  constructor(currentTime) {
    this.countState = 0;
  }

  // get area() {
  //   return this.calcArea();
  // }
  addCount() {
    this.countState++;
    return this.countState;
  }

}

/*

  time:

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  console.log(hours, minutes, seconds);
  
*/

exports.mindSpace = function() {
  // user has email/psw auths
  const timestamp = new Date().getTime();
  console.log(timestamp);
  let currentConverstaion = new Conversation(timestamp);
}

exports.addCount = function() {
}

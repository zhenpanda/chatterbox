// front-end related code

// init interal logics
let timeInterval = setInterval( () => {
  this.timePassed = this.timePassed + 1;
  // log every 1 second / ticks
  console.log('Current time is ' + this.timePassed + ' second!' );
  if (this.timePassed == 25) {
    console.log('You seem quite...today.');
  }
}, 1000);

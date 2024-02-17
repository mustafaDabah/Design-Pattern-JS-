function Sw() {
    this.timer = 0;
    this.duration = 0 ;
    let newTime = 0

    let times = function() {
        // this.timer++ 
        newTime++
        console.log(newTime)
    }

    this.start = function() {
       this.duration = setInterval(times, 1000);
    }
    this.stop = function() {
        clearInterval(this.duration)
    }
    this.reSet = function() {
        this.duration = 0 
    }

    // this.getDuration = function() {
    //     return duration
    // }

  }

  const time = new Sw();
  console.log(time.start())
//   console.log(time.stop())
  console.log(time.timer)
//   console.log(time.getDuration())


class Timer {
  constructor () {
    this.isRunning = false;
    this.startTime = 0;
    this.overallTime = 0;
  }

  _getTimeElapsedSinceLastStart () {
    if (!this.startTime) {
      return 0;
    }
  
    return Date.now() - this.startTime;
  }

  start () {
    if (this.isRunning) {
      return console.error('Timer is already running');
    }

    this.isRunning = true;

    this.startTime = Date.now();
  }

  stop () {
    if (!this.isRunning) {
      return console.error('Timer is already stopped');
    }

    this.isRunning = false;

    this.overallTime = this.overallTime + this._getTimeElapsedSinceLastStart();
  }

  reset () {
    this.overallTime = 0;

    if (this.isRunning) {
      this.startTime = Date.now();
      return;
    }

    this.startTime = 0;
  }

  getTime () {
    if (!this.startTime) {
      return 0;
    }

    if (this.isRunning) {
      return this.overallTime + this._getTimeElapsedSinceLastStart();
    }

    return this.overallTime;
  }
}

// const timer = new Timer();
// timer.start();
// setInterval(() => {
//   const timeInSeconds = Math.round(timer.getTime() / 1000);
//   document.getElementById('time').innerText = timeInSeconds;
// }, 100)

function Clock () {
  this.date = new Date();

  this.printTime();

  setInterval(this._tick.bind(this), 1000);

}


Clock.prototype.printTime = function () {
  this.hours = this.date.getHours();
  this.minutes = this.date.getMinutes();
  this.seconds = this.date.getSeconds();

  console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype._tick = function () {
  this.date.setSeconds(this.date.getSeconds() + 1);
  this.printTime();
};


var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft ===  0) {
    return completionCallback(sum);

  }
  reader.question("What do you want to add", function(num) {
    return addNumbers(sum + parseInt(num), numsLeft - 1, completionCallback);
  });
}

var adding = addNumbers(0, 3, function(sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});

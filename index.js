var fs = require('fs');

var lines = fs
  .readFileSync('ulysses.txt')
  .toString()
  .split('\r\n')
  .filter(function(line) { return line.length > 0; });


var randomLineFromFile = function() {
  return lines[Math.floor(Math.random() * lines.length)];
};

var sendMessage = function(message) {
  console.log(message);
};

setInterval(function() {
  var message = randomLineFromFile();
  sendMessage(message);
}, seconds(2));

function seconds(arg) {
  return 1000 * arg;
}


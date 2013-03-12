var levels = ['info', 'trace', 'error', 'warn'];
levels = ['info'];

var m = require('markov')(1);

var sendMessage = function(message) {
  console.log(message);
};

m.seed(
  require('fs').createReadStream('ulysses.txt'),
  function() {
    setInterval(function() {
      levels.forEach(function(level) {
        var message = m.respond('and then what?').join(' ');
        sendMessage(message);
      });
    }, seconds(1));
  });

function seconds(arg) {
  return 1000 * arg;
}

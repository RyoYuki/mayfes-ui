var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("COM13", {
  baudrate: 9600
});

serialPort.on('open', function () {
  console.log('serial open');
});

function startGame() {
    serialPort.write("s\n", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
}

function stopGame() {
    serialPort.write("x\n", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
}

function resetGame() {
    serialPort.write("r\n", function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
    });
}


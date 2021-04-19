const SerialPort = require('serialport');

const balanca = new SerialPort('/dev/ttyUSB0', { autoOpen: true, baudRate: 9600}).setEncoding('utf8');

balanca.open(function (err) {    
    balanca.write('main screen turn on')
  })

  balanca.on('readable', function (data) {   
    balanca.read();
  })
  

  balanca.on('error', function(err) {
    console.log('Deu erro: ',err);
 
  })

  balanca.on('open', function() {
    console.log('Abriu PORTA');

  })

  balanca.write('Hi Mom!')


  balanca.on('data', function (data) { 
    
    console.log('Data: ', data);

  })     
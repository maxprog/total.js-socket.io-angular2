// ===================================================
// IMPORTANT: only for production
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================
require('total.js')
var fs = require('fs');
var options = {};

// options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.config = { name: 'total.js' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 2000;

/**
 * Release notes:
 */
var socketio = require('socket.io');

F.on("load", function() {
this.io = socketio.listen(this.server);


this.io.on('connection',function(socket){
console.log('New connection');

socket.on('message',function(data){
    console.log(data);
    socket.broadcast.emit('receive',data.message);

    });
});
});
F.http('release', options);
// require('total.js').https('release', options);
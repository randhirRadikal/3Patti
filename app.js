const express = require('express');
var http = require('http');
var WebSocketServer = require('websocket').server;
var bodyParser = require('body-parser');
var firebase = require('firebase');
const app = express();
const port = 3000;

var config = {
    apiKey: "AIzaSyDSvZBxDqC3yNc8xa4A4UJuJc0V5Bbjk8c",
    authDomain: "patti-8678e.firebaseapp.com",
    databaseURL: "https://patti-8678e.firebaseio.com",
    projectId: "patti-8678e",
    storageBucket: "patti-8678e.appspot.com",
    messagingSenderId: "940501102421"
  };
firebase.initializeApp(config);

app.use(express.static('public'));
app.use(express.static('image'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true ,limit: '5mb'}));

var connectionIDCounter = 1;

var server = http.createServer(function(request, response) {

});

server = app.listen(port,function(){
	console.log('3Patti server is running on port : '+port);
});

wsServer = new WebSocketServer({
	httpServer: server
});

var CardConst = require('./constant/card');



wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  connectionIDCounter = connectionIDCounter + 1;
  connection.id = connectionIDCounter;
  connection.on('message', function(message) {
    var reqM={};
		if (message.type === 'utf8') {
      reqM = message.utf8Data;
			reqM = JSON.parse(reqM);
			console.log(reqM);
			switch (reqM.type) {
				case "PING":
          CardConst.getThreeCard([1],function(res){
            console.log(res);
            connection.sendUTF(JSON.stringify({"type":"PING_OK","data":res}));
          });
          break;
        case "LOGIN":
          Users.test(reqM.data.email,function(res){
            if(res){
              connection.sendUTF(JSON.stringify({"type":"LOGIN_OK","data":res}));
            }else{
              connection.sendUTF(JSON.stringify({"type":"LOGIN_ERROR","data":""}));
            }
          });
          break;
        default:
					connection.sendUTF(JSON.stringify({"type":"DEFAULT","msg":"Please send valid type"}));

      }
    }
  });
  connection.on('close', function(connection) {
		console.log((new Date()) + " Peer disconnected." + connectionIDCounter);

  });
});
app.get('/', (req, res) => res.render('index.html'));

const express = require('express');
const applescript = require('applescript');
const app = express();
const expressWs = require('express-ws')(app)
const ip = require("ip");
const port = 3000

app.use(express.static('static'))

app.use(function (req, res, next) {
  return next();
});

app.ws('/', function(ws, req) {
  onConnect(ws)
  ws.on('message', handleMessage);
});

function onConnect(ws) {
  var script = 'get input volume of (get volume settings)';
  applescript.execString(script, function(err, rtn) {
    if (err) {
      console.log(err);
    } else {
      ws.send(rtn)
    }
  });
}

function sendAll(msg) {
  expressWs.getWss().clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(msg);
    }
  })
}

function handleMessage(msg) {
  var script = `set volume input volume ${msg}`;
  applescript.execString(script, function(err, rtn) {
    if (err) {
      console.log(err);
    }
  });
  sendAll(msg)
}

console.log(`Users connect here: http://${ip.address()}:${port}/`);

app.listen(port);

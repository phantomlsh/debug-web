var express = require('express');
var proxy = require('http-proxy-middleware');
const config = require("./config");

var app = express();
// create the proxy (without context)
var exampleProxy = proxy(config.proxy.router, {
  target: config.proxy.target,
  changeOrigin: true,
});
app.use(exampleProxy);

app.use('/', express.static(config.root));

app.listen(config.port, function() {
  console.log('start at 80');
});
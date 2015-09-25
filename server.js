var express = require('express');
var app = express();

app.get('/scrape', _scrape);

app.listen('8080', function() {
  console.log("Service start on port: 8080")
});

function _scrape(req, res) { 
  res.send("scrape...");
};

exports = module.exports = app;

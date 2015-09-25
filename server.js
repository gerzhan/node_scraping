var express = require('express');
var request = require('request');
var app = express();

app.get('/scrape', _scrape);

app.listen('8080', function() {
  console.log("Service start on port: 8080")
});

function _scrape(req, res) {
  var url = "http://www.html5rocks.com/en/tutorials/service-worker/introduction/";
  request(url, function(err, response, html) {
    if (!err) {
      var $ = require('cheerio').load(html);
      var json = {
        title: "",
        subtitle: ""
      };
      $('.title-text').filter(function() {
        var data = $(this);
        title = data.children().first().text();
        subtitle = data.children().last().text();
        json.title = title;
        json.subtitle = subtitle;
      })
      return res.send(json);

    }
    res.send("error...");
  });

};

exports = module.exports = app;

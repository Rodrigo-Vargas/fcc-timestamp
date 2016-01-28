'use strict';

var TimeStamp = require(process.cwd() + '/app/controllers/timeStamp.server.js');

var timeStamp = new TimeStamp();

module.exports = function (app) {
  
   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

  app.get('/:date', function (req, res){
      var date =  req.params.date;
      
      res.end(timeStamp.getJSON(date));
    });
};

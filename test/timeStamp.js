var expect    = require("chai").expect;
var TimeStamp = require("../app/controllers/timeStamp.server");
var timeStamp = new TimeStamp();


describe("Unix Time/Natural Language Stamp Converter", function() {
  describe("Unix to Natural Language date conversion", function() {
    it("converts the unix to natural naguage", function() {
      var dateOne  = timeStamp.unixToNatural("1450137600");

      expect(dateOne).to.equal("December 15, 2015");
    });
  });

  describe("Unix to Natural", function(){
    it("return a object with natural language when unix timestamp is provided", function(){
      var dateOne = timeStamp.getJSON("1450137600");

      expect(dateOne).to.equal('{"unix":1450137600,"natural":"December 15, 2015"}');
    });
  });

  describe("Natural to Unix", function(){
    it("return a object with natural language when unix timestamp is provided", function(){
      var dateOne = timeStamp.getJSON("December 15, 2015");

      expect(dateOne).to.equal('{"unix":1450137600,"natural":"December 15, 2015"}');
    });
  });

    describe("Null situation", function(){
    it("return a object with null values when the querystring is not a timestamp or a natural date", function(){
      var dateOne = timeStamp.getJSON("asasda");

      expect(dateOne).to.equal('{"unix":null,"natural":null}');
    });
  });
});
'use strict';

function timeStamp (db) {
   var months = ['January', 'February', 'March',
            'April', 'May', 'Juny', 'July', 'August', 
            'September', 'October', 'November', 'December']

   this.getJSON = function(string){
      var result = string.match(/^\d+$/);

      var unix, natural;

      if (result === null)
      {
         result = string.match(/^[a-zA-Z]+\s\d{2},\s\d{4}$/)

         if (result === null)
         {
            unix = null;
            natural = null;            
         }
         else
         {
            natural = result[0];
            unix = this.naturalToUnix(result[0]);   
         }
      }
      else
      {
         unix = parseInt(result[0]);
         natural = this.unixToNatural(result[0]);
      }

      return JSON.stringify({ "unix": unix, "natural" : natural });
   }

   this.unixToNatural = function(unixDate){
      var date = new Date(parseInt(unixDate)*1000);
      
      return months[date.getMonth()] + " " + date.getUTCDate() + ", " + date.getFullYear();
   }

   this.naturalToUnix = function(naturalDate){
      var date = new Date(naturalDate + " 00:00:00");

      return (date.getTime() - date.getTimezoneOffset()*60000 )/ 1000;
   }
}

module.exports = timeStamp;
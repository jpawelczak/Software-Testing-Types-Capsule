var console = require("console")
var http = require('http')
var config = require('config')
var fail = require('fail')
var text = require('./lib/TestingOverviews.js')

module.exports.function = function testingType (testingTypeName) {
  
  //testing object downloaded from wikipedia API - link below
  //the API mocked in TestingOverviews.js
  console.log(text.query.pages[222828].extract)
  var testingOverview = text.query.pages[222828].extract;
  
  //API works, but dont know how to call parameter of the object
  var response = http.getUrl('https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&prop=extracts&exintro=&explaintext=&titles=Unit%20testing');
  console.log(response.batchcomplete);
  
  return {
    testingTypeName: testingTypeName,
    testingOverview: testingOverview
  }
}

var console = require("console")
var http = require('http')
//var config = require('config')
//var text = require('./lib/TestingOverviews.js')

module.exports.function = function testingType (testingTypeName) {
  
  //integration with Wikipedia API
  
  if (testingTypeName == "Unit testing") {
     var type = "Unit%20testing"
     
  } else if (testingTypeName == "Integration testing") {
     var type = "Integration%20testing"    
     
  } else if (testingTypeName == "System testing") {
     var type = "System%20testing" 
     
  } else {
     var type = "Operational%20acceptance%20testing"
  }
    
  var response = http.getUrl('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + type);
  
  var obj = JSON.parse(response)
  for(var key in obj.query.pages) {
    var testingOverview = obj.query.pages[key].extract
    console.log(testingOverview);
  }
  
  return {
    testingTypeName: testingTypeName,
    testingOverview: testingOverview
  }
}

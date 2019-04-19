var console = require("console")
var http = require('http')
//var config = require('config')
//var text = require('./lib/TestingOverviews.js')

module.exports.function = function testingType (testingTypeName, $vivContext) {
  
  console.log($vivContext)
  // Generate the right locale translation
  var language = $vivContext.locale.split('-')[0];
  console.log(language);
    
  //integration with en.wikipedia.com via its API
  if (testingTypeName == "Unit testing") {
     
    if(language == "en") { 
       var type = "Unit%20testing"
     } else {
       var type = "Modultest";
     }
     
  } else if (testingTypeName == "Integration testing") {
     
     if(language == "en") { 
       var type = "Integration%20testing"
     } else {
       var type = "Integrationstest";
       console.log("type: " + type);
     }
     
  } else if (testingTypeName == "System testing") {
     
     if(language == "en") { 
       var type = "System%20testing"
     } else {
       var type = "Systemprüfung";
     }
     
  } else {
     
     if(language == "en") { 
       var type = "Operational%20acceptance%20testing"
     } else {
       var type = "Abnahmeprüfungen";
     }
    
  }
    
  var response = http.getUrl('https://' + language + '.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + type);
  
  var obj = JSON.parse(response)
  for(var key in obj.query.pages) {
    var testingOverview = obj.query.pages[key].extract
    var name = obj.query.pages[key].title
    //console.log(testingOverview);
    //console.log(obj);
    console.log("name: " + name);
  }
  
  return {
    testingTypeName: testingTypeName,
    name: name,
    testingOverview: testingOverview
  }
}

var console = require("console");
var http = require('http');

module.exports.function = function testingType (testingTypeName, $vivContext) {
  
  // Generate the right locale translation
  console.log($vivContext);
  var language = $vivContext.locale.split('-')[0];
  console.log(language);
    
  //integration with en.wikipedia.com via its API
  if (testingTypeName == "Unit testing") {
         
    if(language === "en") { 
       var type = "Unit%20testing";
       console.log(type);
     } else if (language === "de") {
       var type = "Modultest";
     }
     
  } else if (testingTypeName == "Integration testing") {
     
     if(language === "en") { 
       var type = "Integration%20testing";
     } else if (language === "de") {
       var type = "Integrationstest";
     }
     
  } else if (testingTypeName == "System testing") {
     
     if(language === "en") { 
       var type = "System%20testing";
     } else if (language === "de") {
       var type = "Systemprüfung";
     }
     
  } else if (testingTypeName == "Operational acceptance testing") {
     
     if(language === "en") { 
       var type = "Operational%20acceptance%20testing";
     } else if (language === "de") {
       var type = "Abnahmeprüfungen";
     }
    
  }
    
  var response = http.getUrl('https://' + language + '.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + type);
  
  var obj = JSON.parse(response);
  for(var key in obj.query.pages) {
    var testingOverview = obj.query.pages[key].extract;
    var name = obj.query.pages[key].title;
    //console.log(testingOverview);
    //console.log(obj);
    //console.log("name: " + name);
  }
  
  return {
    testingTypeName: testingTypeName,
    name: name,
    testingOverview: testingOverview
  };
};

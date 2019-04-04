var console = require("console")

module.exports.function = function testingType (testingTypeName) {
  var text = "Random text to check if it works";
  console.log(text);
  console.log(testingTypeName);
  
  return {
    testingTypeName: testingTypeName,
    testingOverview: text
  }
}

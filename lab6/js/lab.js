// index.js - purpose and description here
// Author: Lily Zhao
// Date:5/1/2023

// Constants
var myTransport = ["car","bike","metro bus","loop bus"];
var myMainRide = {
  make: "Volvo",
  model: "Unknown",
  year: 2023,
  ownIt: false,
  age: function(){ 
      return 2023 - this.year;
  }
}

// Functions

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
  
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("Getting around: " + myTransport[0] + "<br>");
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();

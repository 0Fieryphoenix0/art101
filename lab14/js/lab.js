// index.js - To print out my main way of transportation
// Author: Lily Zhao, with the help of Bing(AI)
// Date:5/24/2023

// Constants
function FizzBuzz() {
  for (var n = 1; n <= 200; n++) {
    var output = "";
    if (n % 3 == 0) {
      output += "Fizz";
    }
    if (n % 5 == 0) {
      output += "Buzz";
    }
    if (n % 7 == 0) {
      output += "Boom";
    }
    if (n % 10 == 0) {
      output += "OHHHHHHHH";
    }
    if (output){
      output += "!";
    }
    $("#output").append("<p>" + n + ": " + output + "</p>");
  }
}
FizzBuzz();
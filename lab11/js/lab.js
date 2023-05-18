// index.js - To print out my main way of transportation
// Author: Lily Zhao, with the help of Bing(AI)
// Date:5/17/2023

// Constants

// Find the section you want to add the button to by selecting classes
var challengeSection =  $(".minor-section").eq(0);
var problemsSection =  $(".minor-section").eq(1);
var reflectionSection =  $(".minor-section").eq(2);

// Create the button element by using $("<button/>") and set its attributes
var challengeButton = $("<button/>", {
  text: "Challenge", // Give it a text label
  id: "btn_challenge", // Give it an id
  click: function() { // Give it a click event
    $("#challenge").toggleClass("special");
    alert("the billiant red and gold!");
  }
});

var problemsButton = $("<button/>", {
  text: "Problems",
  id: "btn_problems",
  click: function() {
    $("#problems").toggleClass("special");
    alert("Pink and white magic!");
  }
});

var reflectionButton = $("<button/>", {
  text: "Reflection",
  id: "btn_Reflection",
  click: function() {
    $("#reflection").toggleClass("special");
    alert("lavender, ocean, and reflection");
  }
});

// Add the button element to the section by using the append method
challengeSection.append(challengeButton);
problemsSection.append(problemsButton);
reflectionSection.append(reflectionButton);
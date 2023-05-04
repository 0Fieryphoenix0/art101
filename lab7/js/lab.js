// index.js - To print out my main way of transportation
// Author: Lily Zhao
// Date:5/3/2023

// Constants

// Functions

function sortName() {
  
  //input
  var userName = window.prompt("Input Username: ");
  console.log("User Name =" , userName);
  document.writeln("Your input Username: ", userName,"<br>");

  //split string to array
  var list = userName.split('');
  var sorted = list.sort().join('');
  console.log("sorted Name: " , sorted);
  return sorted;
}


document.writeln("Sorted name: ", sortName(),"<br>");

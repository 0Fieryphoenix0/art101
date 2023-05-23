// index.js - To print out my main way of transportation
// Author: Lily Zhao, with the help of Bing(AI)
// Date:5/22/2023

// Constants
function sortingHat(str){
  len = str.length;
  if (len%4 == 0){
    return "Gryffindor";
  }else if(len%4 == 1){
    return "Ravenclaw";
  }else if(len%4 == 2){
    return "Slytherin";
  }else{
    return "Hufflepuff";
  }
}

var button = document.getElementById("button");
button.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  document.getElementById("output").innerHTML = "<p>The Sorting Hat has sorted you into: " + sortingHat(name) + "<p/>";
})
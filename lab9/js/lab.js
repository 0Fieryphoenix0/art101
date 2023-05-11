// index.js - To print out my main way of transportation
// Author: Lily Zhao
// Date:5/10/2023

// Constants
var outputEl = document.getElementById("content");
var new1El = document.createElement("p");
var new2El = document.createElement("p");
new1El.innerHTML = "Phoenixes are cool"
new2El.innerHTML = "Dragons are cool too"
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
new1El.style.backgroundColor = "red";
new2El.style.backgroundColor = "blue";


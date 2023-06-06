// index.js - To print out my main way of transportation
// Author: Lily Zhao
// Date:6/1/2023
var presser = document.getElementById("activate");
presser.addEventListener("click", function() {
// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://api.chucknorris.io/jokes/random",
  // The data to send (will be converted to a query string)
  data: {
    // here is where any data required by the api
    //   goes (check the api docs)
    // page: 1, // optional, to get the first page of results
    // search: "Luke", // optional, to search for a specific character by name
  },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType: "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
    document.getElementById("output").innerHTML = data.value;
    console.log(data);
},
// What we do if the api call fails
error: function (jqXHR, textStatus, errorThrown) { 
    document.getElementById("output").innerHTML = "Joke not retrieved.";
    console.log("Error:", textStatus, errorThrown);
}
});})
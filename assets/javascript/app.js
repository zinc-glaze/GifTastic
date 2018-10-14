//FILM ICONS - MEN ON SCREEN

//Global Variables
var topics = ["David Bowie", "Harry Dean Stanton", "Bill Murray", "Alain Delon", "Klaus Kinski", "Richard Pryor", "Christopher Walken", "Clint Eastwood", "Daniel Day Lewis", "Ice Cube", "James Dean", "Sean Connery", "Samuel L. Jackon", "Bruce Lee", "Gary Oldman", "James Earl Jones", "Lee Marvin"];

var apikey = "JXO4iEGPO0SUcoMaAxl4GwMPUdSZgGOy";

//Functions

//Generates buttons from the topics array
function makeButtons() {
  $("#topic-buttons").empty();
  for (i = 0; i < topics.length; i++) {
    var topicButton = $("<button>");
    //adds Bootstrap classes and data-name attribute
    topicButton.addClass("btn btn-primary m-1");
    topicButton.attr("data-name", topics[i]);
    topicButton.text(topics[i]);
    $("#topic-buttons").append(topicButton);
  }
}

//Takes user topic, adds to array, and re-renders buttons
function addUserButton() {
  var userTopic = $("#user-topic").val().trim();
  topics.push(userTopic);
  makeButtons();
  $("#user-topic").val("");
}

//Renders default buttons on refresh
makeButtons();

//Click event for adding new button
$("#submit-topic").on("click", function(event) {
  event.preventDefault();
  addUserButton();
})


//FILM ICONS - MEN ON SCREEN

//Global Variables
var topics = ["David Bowie", "Harry Dean Stanton", "Bill Murray", "Alain Delon", "Klaus Kinski"]

//Functions

//Generates buttons from the topics array
function makeButtons() {
  $("#topic-buttons").empty();
  for (i = 0; i < topics.length; i++) {
    var topicButton = $("<button>");
    console.log(topics[i]);
    //adds Bootstrap classes and data-name attribute
    topicButton.addClass("btn btn-primary");
    topicButton.attr("data-name", topics[i]);
    topicButton.text(topics[i]);
    $("#topic-buttons").append(topicButton);
  }
}

makeButtons();

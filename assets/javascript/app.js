//ICONIC ACTORS!

//GLOBAL VARIABLES
var topics = ["Harry Dean Stanton", "Bill Murray", "David Bowie", "Alain Delon", "Keanu Reeves", "Richard Pryor", "Boris Karloff", "Christopher Walken", "Clint Eastwood", "Charlie Chaplin", "Ice Cube", "Nicholas Cage", "James Dean", "Sean Connery", "Kyle MacLachlan", "Samuel L. Jackon", "Bruce Lee", "Anthony Perkins"];

// var topics = ["Dracula", "Frankenstein", "Wolfman", "Orc", "Brundlefly", "The Mummy", "Predator", "The Rancor", "Freddy Kreuger", "Pale Man", "King Kong", "Xenomorph", "Godzilla", "Nosferatu", "Mothra", "Pinhead"];

var apikey = "JXO4iEGPO0SUcoMaAxl4GwMPUdSZgGOy";

//FUNCTIONS

//Generates buttons from the topics array
function makeButtons() {
  $("#topic-buttons").empty();
  for (i = 0; i < topics.length; i++) {
    var topicButton = $("<button>");
    //adds Bootstrap classes and data-name attribute
    topicButton.addClass("btn btn-secondary m-1");
    topicButton.attr("id", "call-button");
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

//MAIN PROCESS
window.onload = function() {
      
  //Renders default buttons on refresh
  makeButtons();

  //Click event for adding new button
  $("#submit-topic").on("click", function(event) {
    event.preventDefault();
    addUserButton();
  })

  //Event listener for topic buttons
  $(document).on("click", "#call-button", function(event) {
    //grabs search term from button attribute
    var topic = $(this).attr("data-name");
    //constructs search URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=" + apikey + "&limit=10";
    //AJAX request
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    //after the data comes back from the API
    .then(function(response) {
      //stores results as array
      var results = response.data;
      console.log(results);
      //empties current GIF gallery
      $("#gif-gallery").empty();
      //loops through results array
      for (var i = 0; i < results.length; i++) {
        //displays GIF on page
        var gifDiv = $("<div>");
        gifDiv.addClass("float-left m-1");
        var rating = results[i].rating;
        var caption = $("<figcaption>").text("Rating: " + rating);
        caption.addClass("text-dark");
        var gifImage = $("<img>");
        gifImage.addClass("rounded")
        gifImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(gifImage);
        gifDiv.append(caption);
        $("#gif-gallery").prepend(gifDiv);
      }
    });
  });
};


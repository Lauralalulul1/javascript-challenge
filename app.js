// from data.js
var tableData = data;

// YOU// Reference: https://www.youtube.com/watch?v=C4t6qfHZ6Tw, Slack, Activity Lessons
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data 
//for each UFO sighting.

// from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

//Select the button
var button = d3.select("#button");

//More references
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");

//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//slack/10.21 from class activities
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// learn in class 10.25
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column]))
   });
}
   addData(tableData);
// create the filter button to make it cliickable
button.on('click", () => {

// Prevent the page from refreshing
    d3.event.preventDefault();

//Learn 10.25 filters Filter Data with datetime equal to input value
 // Get the value property of the input element
    var inputDate = inputFieldDate.property("value").trim();
    
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
     
    tbody.html("");

    let response = {
        filterDate

    if (response.filterDate.length !== 0) {
       addData(filterData);
    }

   
    else {
       tbody.append("tr").append("td").text("No aliens. Continue... ");
    }
    })
R CODE HERE!

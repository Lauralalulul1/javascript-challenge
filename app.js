// Reference: https://www.youtube.com/watch?v=C4t6qfHZ6Tw, Slack, Activity Lessons
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).

//Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data 
//for each UFO sighting.

// from data.js
var tableData = d3.select ("#data");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log data from data.js
console.log(data)

//Columns for date/time, city, state, country, shape, and comment at the very least.
//slack/10.21 from class activities
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

function createDefault() {
    ufoSightings.forEach(ufoSightings => {
        row = tableBody.append("tr")
        row.append("tr").text(date);
        row.append("tr").text(city);
        row.append("tr").text(state);
        row.append("tr").text(Country);
        row.append("tr").text (Shape);
        row.append("tr").text (Duration);
        row.append("tr").text (Comments);

    });
}
createDefault();

//Create reference for the button and date
var button = d3.select("#filter-btn")
var resetButton = d3.select("#resetButton")
var datetime = d3.select("#datetime")

resetButton.on("click", () => {
    tableBody.remove();
    tableBody = table.append("tbody");
    createDefault();
});

//code that will listen for events and search through the date/time column to 
//find rows that match user input.

seriesSearchField.on("keyup", () => {
    var seriesToSearchFor = seriesSearchField.property("value");
    if (seriesToSearchFor.length >= 7) {
        tableBody.remove();
        tableBody = table.append("tbody");

        fighters.filter(f => f.series.toLowerCase().trim() == seriesToSearchFor.toLowerCase().trim())
            .forEach(fighter => {
                var row = tableBody.append("tr");
                  row.append("tr").text(date);
                  row.append("tr").text(city);
                  row.append("tr").text(state);
                  row.append("tr").text(Country);
                  row.append("tr").text (Shape);
                  row.append("tr").text (Duration);
                  row.append("tr").text (Comments);

            });

    }
});

characterSearchButton.on("click", () => {
    var characterToSearchFor = characterSearchField.property("value");
    console.log(characterToSearchFor);
    tableBody.remove();
    tableBody = table.append("tbody");

    fighters.filter(f => f.displayNameEn.toLowerCase().trim() == characterToSearchFor.toLowerCase().trim())
        .forEach(fighter => {
            var row = tableBody.append("tr");
            row.append("td").text(fighter.id);
            row.append("td").text(fighter.displayNameEn);
            row.append("td").text(fighter.series);
        });

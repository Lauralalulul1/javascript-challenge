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

//Create reference for the button and make button clickable
var button = d3.select("#filter-btn");
var resetbutton= d3.select("resetbutton");

button.on("click", UFOdata);
resetbutton.on("submit", UFOdata");

//Create filter
function UFOdata() {
    d3.event.preventDefault();
    const datetimefilter = d3.select("#datetime").property("value");
    var results = tableData.filter((ufo) => ufo["datetime"] == datetimefilter);

    renderTable(results);
}

function renderTable(table);
    var tbody = d3.select("tbody");
    tbody.html("");
    table.forEach((sightings) => (
        var row = tbody.append("tr");
      //console.log(sightings);
      for (let key in sightings) {
        var cell = row.append("td");
        cell.text(sightings[key]);
        
      }
    });
}

renderTable(data);

    
   
    
    
    

        

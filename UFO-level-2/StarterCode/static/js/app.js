// from data.js
var tableData = data; 

//Select tbody
var tbody = d3.select("#ufo-table tbody"); 

//Append data values to the table 
tableData.forEach(function(ufoSighting){ 
    var row = tbody.append('tr');

    cellValues = Object.values(ufoSighting)

    cellValues.forEach(function(cellValue) {
        var cell = row.append('td');
        cell.text(cellValue);
    }); 
});
// select the filter button 
var button = d3.select("#filter-btn") 
button.on("click", runEnter); 

// select the form button 
var form = d3.select("form")
console.log(form) 
form.on("submit", test);

// Create the function for the data filter dropdown
function runEnter(){
    d3.event.preventDefault();

    // Create a date variable for the filter 
    var dateValue = d3.select(".form-control#date").property("value");
    // Create a city variable for the filter 
    var cityValue = d3.select(".form-control#city").property("value");
    // Create a state variable for the filter 
    var stateValue = d3.select(".form-control#state").property("value");
    // Create a country variable for the filter 
    var countryValue = d3.select(".form-control#country").property("value");
    // Create a shape variable for the filter 
    var shapeValue = d3.select(".form-control#shape").property("value");
    // Create a duration variable for the filter 
    var durationValue = d3.select(".form-control#duration").property("value"); 

    // Variable for filtering the data 
    var filteredData = tableData.filter(tableData => (dateValue === tableData.datetime || dateValue === "")
        && (cityValue === tableData.city || cityValue === "")
        && (stateValue === tableData.state || stateValue === "")
        && (countryValue === tableData.country || countryValue === "")
        && (shapeValue === tableData.shape || shapeValue === "")
        && (durationValue === tableData.durationMinutes || durationValue === "")
    ); 
  
    var table1 = d3.select("#ufo-table").select("tbody").html("");
    // Append the filtered values to the table. 
    filteredData.forEach(function(ufoSighting) {
        console.log(ufoSighting);
        var row = tbody.append('tr');
         
        cellValues = Object.values(ufoSighting)

        cellValues.forEach(function(cellValue) {
            var cell = row.append('td');
            cell.text(cellValue);
        }); 
    }); 
}
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
form.on("submit", runEnter);
// create filter function for the date
function runEnter(){
    // prevent page from refreshing 
    d3.event.preventDefault();
    // Select input Element
    var inputElement = d3.select(".form-control").property("value");
    // Filter data according to input element
    var filteredData = tableData.filter(tableData => (inputElement === tableData.datetime));
    // Select tbody
    var table1 = d3.select("#ufo-table").select("tbody").html("");
    // Use forEach to filter data and append to the tbody
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
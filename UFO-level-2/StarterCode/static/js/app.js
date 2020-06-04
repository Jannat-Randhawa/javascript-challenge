// from data.js
var tableData = data; 

var tbody = d3.select("#ufo-table tbody"); 

tableData.forEach(function(ufoSighting){ 
    var row = tbody.append('tr');

    cellValues = Object.values(ufoSighting)

    cellValues.forEach(function(cellValue) {
        var cell = row.append('td');
        cell.text(cellValue);
    }); 
});

var button = d3.select("#filter-btn") 
button.on("click", runEnter); 

var form = d3.select("form")
console.log(form) 
form.on("submit", test);

function test() {
    console.log("RUNNING")
}

function runEnter(){
    d3.event.preventDefault();

    var dateValue = d3.select(".form-control#date").property("value");
    var cityValue = d3.select(".form-control#city").property("value");
    var stateValue = d3.select(".form-control#state").property("value");
    var countryValue = d3.select(".form-control#country").property("value");
    var shapeValue = d3.select(".form-control#shape").property("value");
    var durationValue = d3.select(".form-control#duration").property("value"); 

    var filteredData = tableData.filter(tableData => (dateValue === tableData.datetime || cityValue === "")
        && (cityValue === tableData.city || cityValue === "")
        && (stateValue === tableData.state || stateValue === "")
        && (countryValue === tableData.country || countryValue === "")
        && (shapeValue === tableData.shape || shapeValue === "")
        && (durationValue === tableData.durationMinutes || durationValue === "")
    ); 
  
    var table1 = d3.select("#ufo-table").select("tbody").html("");

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
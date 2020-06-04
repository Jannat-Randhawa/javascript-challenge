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
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control").property("value");

    var filteredData = tableData.filter(tableData => (inputElement === tableData.datetime));
  
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
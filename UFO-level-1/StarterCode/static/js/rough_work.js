// from data.js
var tableData = data;


var tbody = d3.select("#ufo-table tbody");
console.log(tbody);


tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append('tr');

    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });

});

// tableData.forEach((ufoSighting)=>{
//     console.log(ufoSighting);
//     var row = tbody.append('tr');

//     Object.entries(ufoSighting).forEach(([key, value])=> {
//                 var cell = row.append('td').text(value);
//     });
// });

var button = d3.select("#filter-btn")
var form = d3.select("form-group")

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control").property("value");

    var filteredDataValue = tableData.filter(tableData => (inputElement === tableData.datetime));
  
    var table1 = d3.select("#ufo-table").select("tbody").html("");

    filteredData.forEach(function(ufoSighting){
        console.log(ufoSighting);
        var row = tbody.append('tr');
    
        Object.entries(ufoSighting).forEach(function([key, value]){
            //console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        }); 
    });
} ;

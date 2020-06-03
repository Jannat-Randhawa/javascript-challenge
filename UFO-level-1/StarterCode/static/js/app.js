// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("#ufo-table tbody");
console.log(tbody);

// var Date = d3.select("#Date").text();
// var City = d3.select("#City").text();
// var State = d3.select("#State").text();
// var Country = d3.select("#Country").text();
// var Shape = d3.select("#Shape").text();
// var Duration = d3.select("#Duration").text();
// var City = d3.select("#City").text();

// tableData.forEach(function(ufoSighting){
//     console.log(ufoSighting);
//     var row = tbody.append('tr');

//     Object.entries(ufoSighting).forEach(function([key, value]){
//         console.log(key, value);
//         var cell = row.append('td');
//         cell.text(value);
//     });

// });

tableData.forEach((ufoSighting)=>{
    console.log(ufoSighting);
    var row = tbody.append('tr');

    Object.entries(ufoSighting).forEach(([key, value])=> {
                var cell = row.append('td').text(value);
    });
});
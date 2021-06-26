// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function sightingData(data) { 
    tbody.text("")

data.forEach(function(UFOsightings) {

var row = tbody.append("tr");

Object.entries(UFOsightings).forEach(function([key, value]) {
    
        var cell = row.append("td");
        cell.text(value);
        });
    });
}

sightingData(tableData)

var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var result_table = tableData.filter(UFOsightings => UFOsightings.datetime===inputText.property("value"))
    sightingData(result_table)
};

inputText.on("change", changeHandler)
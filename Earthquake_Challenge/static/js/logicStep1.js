// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_key
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);




// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});



// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// let myStyle = {
//   color: "blue",
//   fillColor: "yellow",
//   weight: 1
// }


// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/pcar22/Mapping_Earthquakes/main/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// let myStyle = {
//   color: "blue",
//   fillColor: "yellow",
//   weight: 1
// }


// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data,{
//   style: myStyle,
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
//     }
// }).addTo(map);
// });






// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }


// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data,{
//   style: myStyle,
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + 'Airline: ' + feature.properties.airline + "</h2> <hr> <h3> " + 'Destination: ' + feature.properties.dst + "</h3>")
//   }
// }).addTo(map);
// });

// d3.json(airportData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data,{
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + 'Airport code: ' + feature.properties.faa + "</h2> <hr> <h3> " + 'Airport name: ' + feature.properties.name + "</h3>")
//   }
  

// }).addTo(map);
// });

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function (airportData) {
//   console.log(airportData);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(airportData)
//   .bindPopup("<h2>" + feature.properties.country + "</h2> <hr> <h3>Points: " + feature.properties.name + "</h3>")

// }).addTo(map);
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. Zoom scale = 0-18
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{
    "type": "FeatureCollection", "features": [{
        "type": "Feature",
        "properties": {
            "id": "3469",
            "name": "San Francisco International Airport",
            "city": "San Francisco",
            "country": "United States",
            "faa": "SFO",
            "icao": "KSFO",
            "alt": "13",
            "tz-offset": "-8",
            "dst": "A",
            "tz": "America/Los_Angeles"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.375, 37.61899948120117]
        }
    }
    ]
};


// Using the onEachFeature function. Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h3>" + 'Airport code:' + feature.properties.faa + "</h3> <hr> <h3>" + 'Airport name: ' + feature.properties.name + "</h3>");
    }
    
}).addTo(map);

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function (feature, latlng) {
//         console.log(feature);
//         return L.marker(latlng)
//             .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h2>" + feature.properties.city + " , " + feature.properties.country + "</h2>");
//     }

// }).addTo(map);
// Grabbing our GeoJSON data. Changing this code.
// let sfAir = L.geoJSON(sanFranAirport).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Create map
// createImageBitmap(cityAir);







// Coordinates for each point to be used in the polyline.
// let line = [
//     [37.6213, -122.3790], // San Francisco International Airport
//     [30.1975, -97.6664], // Austin-Bergstrom International Airport
//     [43.6777, -79.6248],  // Toronto Pearson International Airport
//     [40.6413, -73.7781] // JFK International Airport

// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "blue",
//     dashArray: '4,10'
// }).addTo(map);
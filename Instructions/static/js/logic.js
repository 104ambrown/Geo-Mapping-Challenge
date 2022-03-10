// creating a map
// need latitude and longitude
// for leaflet we add zoomlevel

// source url
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// writing a function for the map
function creatMyMap(earthquakes) {
    //Establishing bas layers declaring variablkes
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })

    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      });

    // declaring variable for basemap object
    var baseMap = {"Strret Map": street, "Topographic Map": topo};

    // variable for earthquake overlay on my map
    var overlayMap = { Earthquakes: earthquakes};


// Creating a variable for my map establishing where the center is and level of zoom
var myMAp = L.map("basicMap", {
    center: [50.000, -50.000],
    zoom: 3,
    // what layers I want to overlay on my map
    layers: [street, earthquakes]
});

// adding tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www/openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapObj);
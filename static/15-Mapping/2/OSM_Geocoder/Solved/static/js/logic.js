// Creating the map object
let myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Create OSMGeocoder
var osmGeocoder = new L.Control.OSMGeocoder();

// Add Controler 
myMap.addControl(osmGeocoder);
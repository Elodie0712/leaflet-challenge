// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 13
});


//Mapbox

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJpZWxnYW1pbm8iLCJhIjoiY2t5ZjRmaGV2MGY4ejJvcGxhaXpmeGRuaiJ9.y5NFodPtNK_FHZekxtrCUQ', {
       attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
       tileSize: 512,
       zoomOffset: -1
}).addTo(myMap);
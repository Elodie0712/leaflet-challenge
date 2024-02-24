//Section 1: Creating the Map
function createMap(earthquakes) {
    // Set Tile layers (Background map images).
    //let streetmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //});
    //let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    //});
    let satelliteLayer = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });
    let grayscale= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16
    });
    let outdoorLayer = L.tileLayer('https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=c084560122b149e9bff710acf6a31940');
    // Creating Map.
    // Set lat long where we want our view to start at & set zoom level.
    // Insert it into the "map" id html tag.
    var myMap = L.map("map", {
        center: [45.52, -122.67],
        zoom: 3,
        layers: [ satelliteLayer, outdoorLayer, grayscale]
    });
    // Create a layer control, and add the base maps and overlay maps.
    var baseMaps = {
        "Satellite": satelliteLayer,
        "Outdoor": outdoorLayer,
        "Grayscale": grayscale
    };
//SET OVERLAY (Selections)
    var overlayMaps = {
        Earthquakes: earthquakes,
        Tectonic : plates
    };
    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(myMap);
    // Function to determine marker color based on earthquake depth
    function getMarkerColor(depth) {
        if (depth <= 10) return "#00FF00";
        else if (depth > 10 && depth <= 30) return "#ADFF2F";
        else if (depth > 30 && depth <= 50) return "#556B2F";
        else if (depth > 50 && depth <= 70) return "#FFA500";
        else if (depth > 70 && depth <= 90) return "#0000FF";
        else if (depth > 90) return "#FF69B4";
        else return "#FFFFFF";
    }
    var legend = L.control({ position: 'bottomright' });
    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 30, 50, 70, 90],
            labels = ["0-10", "10-30", "30-50", "50-70", "70-90", "90+"];
        
        var legendWidth = 100; // Adjust this value to cover the width of the legend
        var legendHeight = 100; // Adjust this value to cover the height of the legend
        div.style.width = legendWidth + 'px';
        div.style.height = legendHeight + 'px';
        div.style.backgroundColor = 'white';
        div.style.padding = '10px'; 
        div.style.borderRadius = '10px'; // Adjust border radius
        div.style.opacity = '0.8';

    // Add a white box as the background for the legend
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getMarkerColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
    
        return div;
    };
    legend.addTo(myMap);
}
//Section 2 Connecting the API
// Section 2: Connecting the API
let plates = L.geoJSON(); // Initialize an empty GeoJSON layer
// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var queryUrl_plate ="https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
    d3.json(queryUrl_plate).then(function(data2) {
         // Once we get a response, send the data.features object to the createFeatures function.
        createFeatures (data.features, data2.features);
});
function createFeatures(earthquakeData, plateData) {
    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place and mag (magnitude) of the earthquake.
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.mag}</h3><hr><p>${(feature.properties.place)}</p>`);
    }
    // Function to determine marker size based on earthquake magnitude
    function getMarkerSize(mag) {
        return mag * 5;
    }
    // Function to determine marker color based on earthquake depth
    function getMarkerColor(depth) {
        if (depth <= 10) return "#00FF00"; //green
        else if (depth > 10 && depth <= 30) return "#ADFF2F"; //yellowgreen
        else if (depth > 30 && depth <= 50) return "#556B2F"; //darkolivegreen
        else if (depth > 50 && depth <= 70) return "#FFA500"; //orange
        else if (depth > 70 && depth <= 90) return "#0000FF"; //blue
        else if (depth > 90) return "#FF69B4"; //pink
        else return "#FFFFFF";//white
    }
    // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // Run the onEachFeature function once for each piece of data in the array.
    let earthquakes = L.geoJSON(earthquakeData, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: getMarkerSize(feature.properties.mag),
                fillColor: getMarkerColor(feature.geometry.coordinates[2]),
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });
        }
    });
    let plateslayer= L.geoJSON(plateData, {
        color: '#FFAA33',
        weight: 4
    });
    plates.addLayer(plateslayer);
    // Send our earthquakes layer to the createMap fun
    createMap(earthquakes, plates);}})
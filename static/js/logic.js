// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function (data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {
    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place and mag of the earthquake.
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${feature.properties.mag}</h3><hr><p>${new Date(feature.properties.place)}</p>`);
    }

    // Function to determine marker size based on earthquake magnitude
    function getMarkerSize(mag) {
        return mag * 5;
    }

    // Function to determine marker color based on earthquake depth
    function getMarkerColor(depth) {
        if (depth <= 10) return "green";
        else if (depth > 10 && depth <= 30) return "yellowgreen";
        else if (depth > 30 && depth <= 50) return "darkolivegreen";
        else if (depth > 50 && depth <= 70) return "orange";
        else if (depth > 70 && depth <= 90) return "blue";
        else if (depth > 90) return "pink";
        else return "white";
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

    // Send our earthquakes layer to the createMap function.
    createMap(earthquakes);
}

function createMap(earthquakes) {
    // Set Tile layers (Background map images).
    let streetmap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    // Creating Map.
    // Set lat long where we want our view to start at & set zoom level.
    // Insert it into the "map" id html tag.
    var myMap = L.map("map", {
        center: [45.52, -122.67],
        zoom: 13,
        layers: [streetmap, topo]
    });

    // Create a layer control, and add the base maps and overlay maps.
    var baseMaps = {
        "Street Map": streetmap,
        "Topographic Map": topo
    };

    var overlayMaps = {
        Earthquakes: earthquakes
    };

    L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(myMap);
}

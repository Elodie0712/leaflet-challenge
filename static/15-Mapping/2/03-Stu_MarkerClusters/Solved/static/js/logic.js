// Creating the map object
let myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store the API query variables.
// For docs, refer to https://dev.socrata.com/docs/queries/where.html.
// And, refer to https://dev.socrata.com/foundry/data.cityofnewyork.us/erm2-nwe9.
let baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?";
let date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
let complaint = "&complaint_type=Rodent";
let limit = "&$limit=10000";

// Assemble the API query URL.
let url = baseURL + date + complaint + limit;
console.log(url);

// Get the data with d3.
d3.json(url).then(function(response) {

  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the data.
  for (let i = 0; i < response.length; i++) {

    // Set the data location property to a variable.
    let location = response[i].location;

    // Check for the location property.
    if (location) {

      // Add a new marker to the cluster group, and bind a popup.
      let rat_marker = L.marker([location.coordinates[1], location.coordinates[0]]).bindPopup(response[i].descriptor);
      markers.addLayer(rat_marker);
    }

  }

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);

});

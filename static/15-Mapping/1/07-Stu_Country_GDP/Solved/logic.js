// Create a map object.
let myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// Loop through the countries array, and create one marker for each country object.
for (let i = 0; i < countries.length; i++) {

  // Conditionals for country gdp_pc
  let color = "";
  if (countries[i].gdp_pc > 100000) {
    color = "yellow";
  }
  else if (countries[i].gdp_pc > 75000) {
    color = "blue";
  }
  else if (countries[i].gdp_pc > 50000) {
    color = "green";
  }
  else {
    color = "violet";
  }

  // Add circles to the map.
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].gdp_pc) * 500
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>GDP Per Capita (USD): ${countries[i].gdp_pc}</h3>`).addTo(myMap);
}

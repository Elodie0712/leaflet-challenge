# GeoJSON

In this activity, you'll work with GeoJSON data from the [U.S. Geological Survey (USGS)](http://earthquake.usgs.gov) to make plot markers representing occurrences of earthquakes.

## Instructions

* Use the starter files `index.html`, `logic.js`, and `style.css` provided in the [Unsolved](Unsolved) folder.

* Open the [logic.js](Unsolved/logic.js) file.

*  Note that your starter code places an API call to the USGS Earthquake Hazards Program API. Take a moment to study the `features` array that we extract from the response.

* Add logic to create a GeoJSON layer that contains all the features retrieved from the API call, and add the layer directly to the map. You can reference today's previous activities and the Leaflet [Using GeoJSON with Leaflet](http://leafletjs.com/examples/geojson/) tutorial.

* Create an `overlayMaps` object by using the newly created earthquake GeoJSON layer. Pass `overlayMaps` to the layer control.

## Bonus

* Create a separate overlay for the GeoJSON and a base layer by using the `street` tile layer and the `topo` tile layer. Add these to a layer control. If you get stuck, refer to the previous activity.

* Add a popup to each marker to display the time and location of the earthquake at that location.

## Hint

Refer to the following Leaflet documentation:

* [GeoJSON](http://leafletjs.com/reference.html#geojson)

* [Using GeoJSON with Leaflet tutorial](http://leafletjs.com/examples/geojson/)

If you want to reformat the time from the GeoJSON data for the bonus, you may wish to use the JavaScript method [Date()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

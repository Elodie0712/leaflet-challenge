# Choropleth Map of Florida Family Data

In this activity, you and a partner will create a choropleth map that depicts the number of employed people with school-aged children in Florida school districts.

## Background

* A **choropleth map** has areas that are shaded or patterned in proportion to the statistical variable that the map represents. It also provides a way to easily depict how a measurement varies across a geographical area. It does this by showing the level of variability within a region.

* You and your partner will use a plugin named [leaflet-choropleth](https://github.com/timwis/Leaflet-choropleth) to create this map. You can find the plugin in the `dist` folder of the repository.

* You'll work your way through this activity step by step with your partner. We'll review what everyone did for each step before moving to the next one.

## Instructions

This activity is broken into four steps, which include several sub-steps.

You will use the following starter files for this activity:

* [index.html](Unsolved/index.html)

* [static/js/logic.js](Unsolved/static/js/logic.js)

* [static/css/style.css](Unsolved/static/css/style.css)

### Step 1: Explore the Data

1. Get all the data with D3 and log it to the console.

2.  In Google Chrome, open `index.html, open DevTools, and then go to the Console tab.

3. Explore the data by using the console. Find where the data stores the estimated employed population with school-aged children (`DP03_16E`) for each feature.

  * Note that the amount of data is large, so it might take up to 30 seconds for it to load.

### Step 2: Download the Plugin

1. Download `choropleth.js` from the `leaflet-choropleth` repository and place it in your `js` folder.

2.  In your `index.html` file, uncomment the following line:

  * `<script type="text/javascript" src="static/js/choropleth.js"></script>`

### Step 3: Add Popups

1. Using the [leaflet-choropleth documentation](https://github.com/timwis/leaflet-choropleth) as a guide, create a new choropleth layer.

  * Change the `valueProperty` to the property that you want to base the map on.

  * Define an `onEachFeature` method that binds a popup containing the value of the feature to the layer. Display the school district and the estimated population count.

  * Though it's not required, you may wish to include additional data to display in this popup by exploring the [metadata](https://www.arcgis.com/sharing/rest/content/items/de3da5068f334fbca9c876786062b6ef/info/metadata/metadata.xml?format=default&output=html). For example, `DP03_75E` contains data about the estimated total income and benefits for families.

### Step 4: Add a Legend

1. Consult the [leaflet-choropleth examples](https://github.com/timwis/leaflet-choropleth/blob/gh-pages/examples/legend/) to help you in creating a legend. Be sure to include following:

  * Use `L.control` to add a control (and to choose its position).

  * Use `L.DomUtil.create('div', 'info legend')` to create a `<div>` with the `info` and `legend` classes,

  * Loop through the colors and values of your choropleth data, and then add them with `div.innerHTML`,

  * Return `div` when done.

## Hints

* As you examine the GeoJSON data, look for `DP03_16E`, the code which indicates the estimated employed population with children aged 6–17.

* Check out the [colorbrewer2](http://colorbrewer2.org/) website, which supplies color schemes (in hex values) that you can use to customize a choropleth map.

## References

National Center for Education Statistics (2020). ACS-ED 2014-2018 Total Population: Economic Characteristics (DP03). https://data-nces.opendata.arcgis.com/datasets/nces::acs-ed-2014-2018-total-population-economic-characteristics-dp03/about

  * Metadata available at https://www.arcgis.com/sharing/rest/content/items/de3da5068f334fbca9c876786062b6ef/info/metadata/metadata.xml?format=default&output=html

—

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

# Country GDP Per Capita

In this activity, we'll add a circle for each of the top 20 countries according to their GDP per capita in USD for 2020.

## Instructions

* Use the starter files `index.html`, `logic.js`, and `style.css` provided in the [Unsolved](Unsolved) folder.

* Add your code to [logic.js](Unsolved/logic.js) to render the following:

    * A circle for each country in the dataset.
    * A radius size that you determine from the country's GDP per capita.
    * A color for each circle that you determine as follows:

      * For countries with more than 100,000 GDP per capita, set the color of the circle to yellow.
      * For countries with more than 75,000 GDP per capita, set the color of the circle to blue.
      * For countries with more than 50,000 GDP per capita, set the color of the circle to green.
      * Render the remaining country circles in violet.

* Make sure that each vector layer has a popup containing the country's name and GDP per capita.

## Hint

* Universally adjust the radius for better visuals.

* Refer to the [Leaflet documentation for Path options](https://leafletjs.com/reference.html#path-option) if you get stuck creating vector layers.

## References

[Google Developer Guides countries.csv](https://developers.google.com/public-data/docs/canonical/countries_csv), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

The World Bank (2022), GDP per capita (current US$), https://data.worldbank.org/indicator/NY.GDP.PCAP.CD, licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

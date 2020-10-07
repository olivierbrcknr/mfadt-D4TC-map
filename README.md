# The Refugee Crisis In Europe

This repository is the submission for the Map assignment for the class "Design for this century" at [Parsons](http://parsons.edu/).

It represents the conflict of refugees seeking asylum in Europe. → [Description](components/data/description.md)

## Calculations

### Adjusted Distribution
The "adjusted distribution by GDP" is calculated taking into account the *GDP* of one country, the *total GDP* of all countries added up, and the *total number of refugees* in the area. The refugees are then proportionally distributed to the countries.

```
Refugees per Country = Total Number of Refugees × GDP ÷ Total GDP
```

Find the relevant code [here](components/MapCountry/index.js#L26-L28).

### Predictions 2025

#### GDP
For the GDP value in 2025, I used the mean of the growth factors of a country from the years 2015 - 2019. This growth percentage was then exponentially multiplied with each country's GDP value of 2019.

```
GDP = GDP in 2019 × Average GDP Growth of Country ^ 6 Years
```

Find the relevant code [here](components/Map/index.js#L157-L181).

#### Population
For the population, I used the same approach as with the GDP.

```
Population = Population in 2019 × Population Growth of Country in 2019 ^ 6 Years
```

Find the relevant code [here](components/Map/index.js#L144-L156).

#### Refugees
For the refugees, I had to come up with an percentual growth. I decided for `5%` p.a. as this seems like a realistic number, looking at the previous years. Again this growth got multiplied with each country's number of 2019.

```
Refugees = Number of Refugees in 2019 × approx. Average Growth of Asylum Allocation ^ 6 Years
```

## Attributions

### Text Sources
See also [this file](components/data/sources.js).

### Image Sources
* Map of Europe, Mercator Projection [modified] – https://commons.wikimedia.org/wiki/File:Mercator_Projection.svg

### Code Sources
Most of them are used in [this file](components/utils/index.js).

* `latLongToPixelMercartor()` is based on the code from [Michel Feldheim](https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection)
* `hexToRgb()` is based on the code from [Tim Down](https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb)
* `colorChannelMixer()` and `colorMixer()` are based on the code from [Aaron Harris](https://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript)
* `numberWithCommas()` is based on the code from [Elias Zamaria](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)
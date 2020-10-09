# The Refugee Crisis In Europe

This repository is the submission for the Map assignment for the course ["design for this century"](https://courses.newschool.edu/courses/PGTE5601) at [Parsons](http://parsons.edu/).

It represents the conflict of refugees seeking asylum in Europe. → [Description](components/data/description.md)

This project is built using [yarn](https://yarnpkg.com/). It uses the [next.js](https://nextjs.org/) framework.

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

Find the relevant code [here](components/Map/index.js#L195-L219).

#### Population
For the population, I used the same approach as with the GDP.

```
Population = Population in 2019 × Population Growth of Country in 2019 ^ 6 Years
```

Find the relevant code [here](components/Map/index.js#L182-L194).

#### Refugees
For the refugees, I had to come up with an percentual growth. I decided for `5%` p.a. as this seems like a realistic number, looking at the previous years. Again this growth got multiplied with each country's number of 2019.

```
Refugees = Number of Refugees in 2019 × approx. Average Growth of Asylum Allocation ^ 6 Years
```

## Attributions

### Text Sources
See also [this file](components/data/sources.js).

- European Union (2020). *Living in the EU*. Accessed on 2020-09-20 at https://europa.eu/european-union/about-eu/figures/living_en
- Eurostat (2020). *Asylum statistics* [dataset]. Accessed on 2020-09-20 at http://ec.europa.eu/eurostat/statistics-explained/index.php/Asylum_statistics
- Kirchofer et al. (2015-09-04). *Why do refugees and migrants come to Europe, and what must be done to ease the crisis?*, Telegraph. Accessed on 2020-09-20 at http://www.telegraph.co.uk/news/worldnews/europe/11845205/Why-do-refugees-and-migrants-come-to-Europe-and-what-must-be-done-to-ease-the-crisis.html
- Spindler, William (2015-12-08). 2015: *The year of Europe’s refugee crisis*, UNHCR. Accessed on 2020-09-20 at https://www.unhcr.org/news/stories/2015/12/56ec1ebde/2015-year-europes-refugee-crisis.html
- Stevis-Gridneff, Matina (2020-09-18). *After Fire at Refugee Camp, Europe Faces a Reckoning*, New York Times. Accessed on 2020-09-20 at https://www.nytimes.com/2020/09/18/world/europe/eu-moria-migrants.html
- Tamošauskas, Tadas (n.d.). *Countries with their (ISO 3166-1) Alpha-2 code, Alpha-3 code, UN M49, average latitude and longitude* [dataset]. Accessed on 2020-09-22 at https://gist.github.com/tadast/8827699#file-countries_codes_and_coordinates-csv
- The World Bank (2020). *GDP (current US$)* [dataset]. Accessed on 2020-09-20 at https://data.worldbank.org/indicator/NY.GDP.MKTP.CD
- The World Bank (2020). *Population, total* [dataset]. Accessed on 2020-09-20 at https://data.worldbank.org/indicator/SP.POP.TOTL
- The World Bank (2020). *Refugee population by country or territory of asylum* [dataset]. Accessed on 2020-09-20 at https://data.worldbank.org/indicator/SM.POP.REFG
- The World Bank (2020). *Population growth (annual %)* [dataset]. Accessed on 2020-09-29 at https://data.worldbank.org/indicator/SP.POP.GROW
- The World Bank (2020). *GDP growth (annual %)* [dataset]. Accessed on 2020-09-29 at https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG

### Image Sources

- Wikimedia Commons (2011). *Mercator Projection.svg* [image]. Accessed on 2020-09-25 at https://commons.wikimedia.org/wiki/File:Mercator_Projection.svg

### Code Sources
Most of them are used in [this file](components/utils/index.js).

* `latLongToPixelMercartor()` is based on the code from [Michel Feldheim](https://stackoverflow.com/questions/14329691/convert-latitude-longitude-point-to-a-pixels-x-y-on-mercator-projection)
* `hexToRgb()` is based on the code from [Tim Down](https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb)
* `colorChannelMixer()` and `colorMixer()` are based on the code from [Aaron Harris](https://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript)
* `numberWithCommas()` is based on the code from [Elias Zamaria](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)

// modified data set. originally downloaded at:
// https://data.worldbank.org/indicator/SM.POP.REFG


const refugeesInCountry = [
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Aruba",
    "Country Code": "ABW"
  },
  {
    "2015": 257553,
    "2016": 59770,
    "2017": 75927,
    "2018": 72228,
    "2019": 72227,
    "Country Name": "Afghanistan",
    "Country Code": "AFG"
  },
  {
    "2015": 15547,
    "2016": 15547,
    "2017": 41119,
    "2018": 39856,
    "2019": 25793,
    "Country Name": "Angola",
    "Country Code": "AGO"
  },
  {
    "2015": 109,
    "2016": 141,
    "2017": 124,
    "2018": 132,
    "2019": 120,
    "Country Name": "Albania",
    "Country Code": "ALB"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Andorra",
    "Country Code": "AND"
  },
  {
    "2015": 8279319,
    "2016": 8440081,
    "2017": 9061054,
    "2018": 9332914,
    "2019": 9349349,
    "Country Name": "Arab World",
    "Country Code": "ARB"
  },
  {
    "2015": 663,
    "2016": 888,
    "2017": 884,
    "2018": 1167,
    "2019": 1242,
    "Country Name": "United Arab Emirates",
    "Country Code": "ARE"
  },
  {
    "2015": 3187,
    "2016": 3267,
    "2017": 3332,
    "2018": 3442,
    "2019": 3857,
    "Country Name": "Argentina",
    "Country Code": "ARG"
  },
  {
    "2015": 19314,
    "2016": 17883,
    "2017": 17968,
    "2018": 17966,
    "2019": 17980,
    "Country Name": "Armenia",
    "Country Code": "ARM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "American Samoa",
    "Country Code": "ASM"
  },
  {
    "2015": 15,
    "2016": 5,
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Antigua and Barbuda",
    "Country Code": "ATG"
  },
  {
    "2015": 36917,
    "2016": 42187,
    "2017": 48480,
    "2018": 56934,
    "2019": 76768,
    "Country Name": "Australia",
    "Country Code": "AUS"
  },
  {
    "2015": 72198,
    "2016": 93242,
    "2017": 115252,
    "2018": 128779,
    "2019": 135951,
    "Country Name": "Austria",
    "Country Code": "AUT"
  },
  {
    "2015": 1279,
    "2016": 1193,
    "2017": 1120,
    "2018": 1130,
    "2019": 1109,
    "Country Name": "Azerbaijan",
    "Country Code": "AZE"
  },
  {
    "2015": 53356,
    "2016": 57462,
    "2017": 62353,
    "2018": 71501,
    "2019": 78465,
    "Country Name": "Burundi",
    "Country Code": "BDI"
  },
  {
    "2015": 35302,
    "2016": 42158,
    "2017": 42158,
    "2018": 42158,
    "2019": 61662,
    "Country Name": "Belgium",
    "Country Code": "BEL"
  },
  {
    "2015": 526,
    "2016": 804,
    "2017": 1056,
    "2018": 1167,
    "2019": 1238,
    "Country Name": "Benin",
    "Country Code": "BEN"
  },
  {
    "2015": 34017,
    "2016": 32551,
    "2017": 24152,
    "2018": 25120,
    "2019": 25869,
    "Country Name": "Burkina Faso",
    "Country Code": "BFA"
  },
  {
    "2015": 231954,
    "2016": 276203,
    "2017": 932209,
    "2018": 906640,
    "2019": 854779,
    "Country Name": "Bangladesh",
    "Country Code": "BGD"
  },
  {
    "2015": 16543,
    "2016": 17794,
    "2017": 19166,
    "2018": 19906,
    "2019": 20438,
    "Country Name": "Bulgaria",
    "Country Code": "BGR"
  },
  {
    "2015": 246,
    "2016": 270,
    "2017": 255,
    "2018": 262,
    "2019": 251,
    "Country Name": "Bahrain",
    "Country Code": "BHR"
  },
  {
    "2015": 7,
    "2016": 9,
    "2017": 8,
    "2018": 14,
    "2019": 10,
    "Country Name": "Bahamas, The",
    "Country Code": "BHS"
  },
  {
    "2015": 6789,
    "2016": 5266,
    "2017": 5224,
    "2018": 5227,
    "2019": 5241,
    "Country Name": "Bosnia and Herzegovina",
    "Country Code": "BIH"
  },
  {
    "2015": 1805,
    "2016": 1647,
    "2017": 2155,
    "2018": 2225,
    "2019": 2725,
    "Country Name": "Belarus",
    "Country Code": "BLR"
  },
  {
    "2015": 34,
    "2016": "",
    "2017": "",
    "2018": 29,
    "2019": 29,
    "Country Name": "Belize",
    "Country Code": "BLZ"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Bermuda",
    "Country Code": "BMU"
  },
  {
    "2015": 762,
    "2016": 776,
    "2017": 802,
    "2018": 802,
    "2019": 863,
    "Country Name": "Bolivia",
    "Country Code": "BOL"
  },
  {
    "2015": 8703,
    "2016": 9674,
    "2017": 10260,
    "2018": 11304,
    "2019": 32844,
    "Country Name": "Brazil",
    "Country Code": "BRA"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Barbados",
    "Country Code": "BRB"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Brunei Darussalam",
    "Country Code": "BRN"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Bhutan",
    "Country Code": "BTN"
  },
  {
    "2015": 2127,
    "2016": 2090,
    "2017": 2116,
    "2018": 2044,
    "2019": 1113,
    "Country Name": "Botswana",
    "Country Code": "BWA"
  },
  {
    "2015": 7332,
    "2016": 12117,
    "2017": 10033,
    "2018": 6652,
    "2019": 7170,
    "Country Name": "Central African Republic",
    "Country Code": "CAF"
  },
  {
    "2015": 135890,
    "2016": 97322,
    "2017": 104768,
    "2018": 114101,
    "2019": 101757,
    "Country Name": "Canada",
    "Country Code": "CAN"
  },
  {
    "2015": 44267,
    "2016": 44458,
    "2017": 49279,
    "2018": 49925,
    "2019": 50200,
    "Country Name": "Central Europe and the Baltics",
    "Country Code": "CEB"
  },
  {
    "2015": 73326,
    "2016": 82668,
    "2017": 93030,
    "2018": 104011,
    "2019": 110162,
    "Country Name": "Switzerland",
    "Country Code": "CHE"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Channel Islands",
    "Country Code": "CHI"
  },
  {
    "2015": 1840,
    "2016": 1730,
    "2017": 1861,
    "2018": 2026,
    "2019": 2046,
    "Country Name": "Chile",
    "Country Code": "CHL"
  },
  {
    "2015": 301044,
    "2016": 317254,
    "2017": 321714,
    "2018": 321758,
    "2019": 303379,
    "Country Name": "China",
    "Country Code": "CHN"
  },
  {
    "2015": 1972,
    "2016": 1397,
    "2017": 1559,
    "2018": 1808,
    "2019": 2020,
    "Country Name": "Cote d'Ivoire",
    "Country Code": "CIV"
  },
  {
    "2015": 342970,
    "2016": 375413,
    "2017": 337382,
    "2018": 380327,
    "2019": 406259,
    "Country Name": "Cameroon",
    "Country Code": "CMR"
  },
  {
    "2015": 383095,
    "2016": 451957,
    "2017": 537089,
    "2018": 529065,
    "2019": 523733,
    "Country Name": "Congo, Dem. Rep.",
    "Country Code": "COD"
  },
  {
    "2015": 44952,
    "2016": 46454,
    "2017": 48509,
    "2018": 37491,
    "2019": 25668,
    "Country Name": "Congo, Rep.",
    "Country Code": "COG"
  },
  {
    "2015": 212,
    "2016": 241,
    "2017": 260,
    "2018": 294,
    "2019": 634,
    "Country Name": "Colombia",
    "Country Code": "COL"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Comoros",
    "Country Code": "COM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Cabo Verde",
    "Country Code": "CPV"
  },
  {
    "2015": 3603,
    "2016": 4162,
    "2017": 4479,
    "2018": 4531,
    "2019": 6204,
    "Country Name": "Costa Rica",
    "Country Code": "CRI"
  },
  {
    "2015": 186,
    "2016": 143,
    "2017": 354,
    "2018": 911,
    "2019": 2410,
    "Country Name": "Caribbean small states",
    "Country Code": "CSS"
  },
  {
    "2015": 300,
    "2016": 312,
    "2017": 343,
    "2018": 287,
    "2019": 233,
    "Country Name": "Cuba",
    "Country Code": "CUB"
  },
  {
    "2015": 46,
    "2016": 53,
    "2017": 74,
    "2018": 99,
    "2019": 42,
    "Country Name": "Curacao",
    "Country Code": "CUW"
  },
  {
    "2015": 10,
    "2016": 18,
    "2017": 29,
    "2018": 34,
    "2019": 34,
    "Country Name": "Cayman Islands",
    "Country Code": "CYM"
  },
  {
    "2015": 7062,
    "2016": 8478,
    "2017": 9790,
    "2018": 11002,
    "2019": 12311,
    "Country Name": "Cyprus",
    "Country Code": "CYP"
  },
  {
    "2015": 3640,
    "2016": 3640,
    "2017": 3640,
    "2018": 2186,
    "2019": 2054,
    "Country Name": "Czech Republic",
    "Country Code": "CZE"
  },
  {
    "2015": 316098,
    "2016": 669468,
    "2017": 970357,
    "2018": 1063835,
    "2019": 1146682,
    "Country Name": "Germany",
    "Country Code": "DEU"
  },
  {
    "2015": 19369,
    "2016": 17683,
    "2017": 17553,
    "2018": 18293,
    "2019": 19639,
    "Country Name": "Djibouti",
    "Country Code": "DJI"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Dominica",
    "Country Code": "DMA"
  },
  {
    "2015": 27312,
    "2016": 33501,
    "2017": 35668,
    "2018": 36623,
    "2019": 37533,
    "Country Name": "Denmark",
    "Country Code": "DNK"
  },
  {
    "2015": 615,
    "2016": 593,
    "2017": 594,
    "2018": 164,
    "2019": 164,
    "Country Name": "Dominican Republic",
    "Country Code": "DOM"
  },
  {
    "2015": 94176,
    "2016": 94220,
    "2017": 94248,
    "2018": 94341,
    "2019": 98599,
    "Country Name": "Algeria",
    "Country Code": "DZA"
  },
  {
    "2015": 519270,
    "2016": 533777,
    "2017": 550546,
    "2018": 566746,
    "2019": 550719,
    "Country Name": "East Asia & Pacific (excluding high income)",
    "Country Code": "EAP"
  },
  {
    "2015": 13024365,
    "2016": 13307587,
    "2017": 14770213,
    "2018": 15028285,
    "2019": 14809945,
    "Country Name": "Early-demographic dividend",
    "Country Code": "EAR"
  },
  {
    "2015": 562051,
    "2016": 582281,
    "2017": 605967,
    "2018": 631100,
    "2019": 635753,
    "Country Name": "East Asia & Pacific",
    "Country Code": "EAS"
  },
  {
    "2015": 2948282,
    "2016": 3190036,
    "2017": 3694762,
    "2018": 3846329,
    "2019": 3705616,
    "Country Name": "Europe & Central Asia (excluding high income)",
    "Country Code": "ECA"
  },
  {
    "2015": 4382502,
    "2016": 5195632,
    "2017": 6109371,
    "2018": 6469146,
    "2019": 6565787,
    "Country Name": "Europe & Central Asia",
    "Country Code": "ECS"
  },
  {
    "2015": 121511,
    "2016": 102848,
    "2017": 92405,
    "2018": 101550,
    "2019": 104560,
    "Country Name": "Ecuador",
    "Country Code": "ECU"
  },
  {
    "2015": 212492,
    "2016": 213515,
    "2017": 232647,
    "2018": 246746,
    "2019": 258391,
    "Country Name": "Egypt, Arab Rep.",
    "Country Code": "EGY"
  },
  {
    "2015": 972179,
    "2016": 1464998,
    "2017": 1845395,
    "2018": 2032479,
    "2019": 2254353,
    "Country Name": "Euro area",
    "Country Code": "EMU"
  },
  {
    "2015": 2549,
    "2016": 2342,
    "2017": 2392,
    "2018": 2252,
    "2019": 199,
    "Country Name": "Eritrea",
    "Country Code": "ERI"
  },
  {
    "2015": 6447,
    "2016": 12983,
    "2017": 17541,
    "2018": 20437,
    "2019": 57751,
    "Country Name": "Spain",
    "Country Code": "ESP"
  },
  {
    "2015": 158,
    "2016": 312,
    "2017": 405,
    "2018": 319,
    "2019": 331,
    "Country Name": "Estonia",
    "Country Code": "EST"
  },
  {
    "2015": 736081,
    "2016": 791631,
    "2017": 889412,
    "2018": 903226,
    "2019": 733123,
    "Country Name": "Ethiopia",
    "Country Code": "ETH"
  },
  {
    "2015": 1210729,
    "2016": 1769745,
    "2017": 2167138,
    "2018": 2362839,
    "2019": 2591349,
    "Country Name": "European Union",
    "Country Code": "EUU"
  },
  {
    "2015": 7210110,
    "2016": 7278373,
    "2017": 7886616,
    "2018": 8134971,
    "2019": 8157246,
    "Country Name": "Fragile and conflict affected situations",
    "Country Code": "FCS"
  },
  {
    "2015": 12692,
    "2016": 18402,
    "2017": 20793,
    "2018": 22287,
    "2019": 23458,
    "Country Name": "Finland",
    "Country Code": "FIN"
  },
  {
    "2015": 7,
    "2016": 7,
    "2017": 7,
    "2018": "",
    "2019": 12,
    "Country Name": "Fiji",
    "Country Code": "FJI"
  },
  {
    "2015": 273117,
    "2016": 304527,
    "2017": 337158,
    "2018": 368345,
    "2019": 407915,
    "Country Name": "France",
    "Country Code": "FRA"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Faroe Islands",
    "Country Code": "FRO"
  },
  {
    "2015": 5,
    "2016": 5,
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Micronesia, Fed. Sts.",
    "Country Code": "FSM"
  },
  {
    "2015": 934,
    "2016": 926,
    "2017": 845,
    "2018": 686,
    "2019": 454,
    "Country Name": "Gabon",
    "Country Code": "GAB"
  },
  {
    "2015": 123051,
    "2016": 118973,
    "2017": 121821,
    "2018": 126708,
    "2019": 133083,
    "Country Name": "United Kingdom",
    "Country Code": "GBR"
  },
  {
    "2015": 1973,
    "2016": 2122,
    "2017": 2089,
    "2018": 1987,
    "2019": 1355,
    "Country Name": "Georgia",
    "Country Code": "GEO"
  },
  {
    "2015": 17404,
    "2016": 11866,
    "2017": 12153,
    "2018": 11896,
    "2019": 11946,
    "Country Name": "Ghana",
    "Country Code": "GHA"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Gibraltar",
    "Country Code": "GIB"
  },
  {
    "2015": 8835,
    "2016": 5067,
    "2017": 5156,
    "2018": 4294,
    "2019": 4964,
    "Country Name": "Guinea",
    "Country Code": "GIN"
  },
  {
    "2015": 7851,
    "2016": 7936,
    "2017": 8039,
    "2018": 4027,
    "2019": 4302,
    "Country Name": "Gambia, The",
    "Country Code": "GMB"
  },
  {
    "2015": 8685,
    "2016": 9264,
    "2017": 11207,
    "2018": 4853,
    "2019": 1846,
    "Country Name": "Guinea-Bissau",
    "Country Code": "GNB"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Equatorial Guinea",
    "Country Code": "GNQ"
  },
  {
    "2015": 24831,
    "2016": 46411,
    "2017": 38988,
    "2018": 61446,
    "2019": 80454,
    "Country Name": "Greece",
    "Country Code": "GRC"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Grenada",
    "Country Code": "GRD"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Greenland",
    "Country Code": "GRL"
  },
  {
    "2015": 222,
    "2016": 295,
    "2017": 360,
    "2018": 380,
    "2019": 408,
    "Country Name": "Guatemala",
    "Country Code": "GTM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Guam",
    "Country Code": "GUM"
  },
  {
    "2015": 12,
    "2016": 12,
    "2017": 17,
    "2018": 25,
    "2019": 14,
    "Country Name": "Guyana",
    "Country Code": "GUY"
  },
  {
    "2015": 1947843,
    "2016": 2485136,
    "2017": 2903005,
    "2018": 3150377,
    "2019": 3424205,
    "Country Name": "High income",
    "Country Code": "HIC"
  },
  {
    "2015": 109,
    "2016": 91,
    "2017": 85,
    "2018": 128,
    "2019": 128,
    "Country Name": "Hong Kong SAR, China",
    "Country Code": "HKG"
  },
  {
    "2015": 28,
    "2016": 16,
    "2017": 27,
    "2018": 28,
    "2019": 75,
    "Country Name": "Honduras",
    "Country Code": "HND"
  },
  {
    "2015": 3762016,
    "2016": 4417703,
    "2017": 5544442,
    "2018": 5582768,
    "2019": 5566125,
    "Country Name": "Heavily indebted poor countries (HIPC)",
    "Country Code": "HPC"
  },
  {
    "2015": 518,
    "2016": 300,
    "2017": 508,
    "2018": 787,
    "2019": 916,
    "Country Name": "Croatia",
    "Country Code": "HRV"
  },
  {
    "2015": "",
    "2016": 5,
    "2017": 5,
    "2018": 5,
    "2019": "",
    "Country Name": "Haiti",
    "Country Code": "HTI"
  },
  {
    "2015": 4383,
    "2016": 4736,
    "2017": 5671,
    "2018": 6019,
    "2019": 5750,
    "Country Name": "Hungary",
    "Country Code": "HUN"
  },
  {
    "2015": 10069989,
    "2016": 10259524,
    "2017": 10799882,
    "2018": 10967068,
    "2019": 10816543,
    "Country Name": "IBRD only",
    "Country Code": "IBD"
  },
  {
    "2015": 17336613,
    "2016": 17915908,
    "2017": 20287891,
    "2018": 20510776,
    "2019": 20356739,
    "Country Name": "IDA & IBRD total",
    "Country Code": "IBT"
  },
  {
    "2015": 7266624,
    "2016": 7656384,
    "2017": 9488009,
    "2018": 9543708,
    "2019": 9540196,
    "Country Name": "IDA total",
    "Country Code": "IDA"
  },
  {
    "2015": 2520932,
    "2016": 2243857,
    "2017": 2230439,
    "2018": 2295626,
    "2019": 2363258,
    "Country Name": "IDA blend",
    "Country Code": "IDB"
  },
  {
    "2015": 5954,
    "2016": 7824,
    "2017": 9782,
    "2018": 10786,
    "2019": 10287,
    "Country Name": "Indonesia",
    "Country Code": "IDN"
  },
  {
    "2015": 4745692,
    "2016": 5412527,
    "2017": 7257570,
    "2018": 7248082,
    "2019": 7176938,
    "Country Name": "IDA only",
    "Country Code": "IDX"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Isle of Man",
    "Country Code": "IMN"
  },
  {
    "2015": 201379,
    "2016": 197848,
    "2017": 197142,
    "2018": 195887,
    "2019": 195103,
    "Country Name": "India",
    "Country Code": "IND"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Not classified",
    "Country Code": "INX"
  },
  {
    "2015": 6108,
    "2016": 5720,
    "2017": 6394,
    "2018": 6012,
    "2019": 7795,
    "Country Name": "Ireland",
    "Country Code": "IRL"
  },
  {
    "2015": 979435,
    "2016": 979435,
    "2017": 979435,
    "2018": 979435,
    "2019": 979435,
    "Country Name": "Iran, Islamic Rep.",
    "Country Code": "IRN"
  },
  {
    "2015": 277702,
    "2016": 261863,
    "2017": 277668,
    "2018": 283018,
    "2019": 273986,
    "Country Name": "Iraq",
    "Country Code": "IRQ"
  },
  {
    "2015": 170,
    "2016": 245,
    "2017": 361,
    "2018": 549,
    "2019": 894,
    "Country Name": "Iceland",
    "Country Code": "ISL"
  },
  {
    "2015": 32929,
    "2016": 30529,
    "2017": 25657,
    "2018": 18554,
    "2019": 16107,
    "Country Name": "Israel",
    "Country Code": "ISR"
  },
  {
    "2015": 118036,
    "2016": 147362,
    "2017": 167330,
    "2018": 189227,
    "2019": 207602,
    "Country Name": "Italy",
    "Country Code": "ITA"
  },
  {
    "2015": 13,
    "2016": 13,
    "2017": 13,
    "2018": 13,
    "2019": "",
    "Country Name": "Jamaica",
    "Country Code": "JAM"
  },
  {
    "2015": 2808343,
    "2016": 2860679,
    "2017": 2897751,
    "2018": 2957877,
    "2019": 2966079,
    "Country Name": "Jordan",
    "Country Code": "JOR"
  },
  {
    "2015": 2479,
    "2016": 2512,
    "2017": 2189,
    "2018": 1893,
    "2019": 1463,
    "Country Name": "Japan",
    "Country Code": "JPN"
  },
  {
    "2015": 701,
    "2016": 647,
    "2017": 602,
    "2018": 568,
    "2019": 518,
    "Country Name": "Kazakhstan",
    "Country Code": "KAZ"
  },
  {
    "2015": 553907,
    "2016": 451097,
    "2017": 431895,
    "2018": 421243,
    "2019": 438899,
    "Country Name": "Kenya",
    "Country Code": "KEN"
  },
  {
    "2015": 349,
    "2016": 334,
    "2017": 334,
    "2018": 329,
    "2019": 347,
    "Country Name": "Kyrgyz Republic",
    "Country Code": "KGZ"
  },
  {
    "2015": 74,
    "2016": 61,
    "2017": 61,
    "2018": "",
    "2019": "",
    "Country Name": "Cambodia",
    "Country Code": "KHM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Kiribati",
    "Country Code": "KIR"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": 5,
    "2019": 5,
    "Country Name": "St. Kitts and Nevis",
    "Country Code": "KNA"
  },
  {
    "2015": 1455,
    "2016": 1798,
    "2017": 2238,
    "2018": 2890,
    "2019": 3196,
    "Country Name": "Korea, Rep.",
    "Country Code": "KOR"
  },
  {
    "2015": 736,
    "2016": 935,
    "2017": 613,
    "2018": 671,
    "2019": 686,
    "Country Name": "Kuwait",
    "Country Code": "KWT"
  },
  {
    "2015": 317843,
    "2016": 302619,
    "2017": 247078,
    "2018": 209839,
    "2019": 250429,
    "Country Name": "Latin America & Caribbean (excluding high income)",
    "Country Code": "LAC"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Lao PDR",
    "Country Code": "LAO"
  },
  {
    "2015": 1529213,
    "2016": 1476623,
    "2017": 1468431,
    "2018": 1424728,
    "2019": 1392174,
    "Country Name": "Lebanon",
    "Country Code": "LBN"
  },
  {
    "2015": 36495,
    "2016": 18978,
    "2017": 11109,
    "2018": 9103,
    "2019": 8225,
    "Country Name": "Liberia",
    "Country Code": "LBR"
  },
  {
    "2015": 9305,
    "2016": 9311,
    "2017": 9352,
    "2018": 8792,
    "2019": 4730,
    "Country Name": "Libya",
    "Country Code": "LBY"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "St. Lucia",
    "Country Code": "LCA"
  },
  {
    "2015": 337472,
    "2016": 322179,
    "2017": 252093,
    "2018": 215691,
    "2019": 257918,
    "Country Name": "Latin America & Caribbean",
    "Country Code": "LCN"
  },
  {
    "2015": 4183415,
    "2016": 4848569,
    "2017": 6710453,
    "2018": 6691916,
    "2019": 6605694,
    "Country Name": "Least developed countries: UN classification",
    "Country Code": "LDC"
  },
  {
    "2015": 4110917,
    "2016": 4678963,
    "2017": 5828887,
    "2018": 5860968,
    "2019": 5867788,
    "Country Name": "Low income",
    "Country Code": "LIC"
  },
  {
    "2015": 146,
    "2016": 161,
    "2017": 164,
    "2018": 166,
    "2019": 125,
    "Country Name": "Liechtenstein",
    "Country Code": "LIE"
  },
  {
    "2015": 781,
    "2016": 602,
    "2017": 820,
    "2018": 796,
    "2019": 1041,
    "Country Name": "Sri Lanka",
    "Country Code": "LKA"
  },
  {
    "2015": 5794084,
    "2016": 5668466,
    "2017": 6451062,
    "2018": 6540447,
    "2019": 6583870,
    "Country Name": "Lower middle income",
    "Country Code": "LMC"
  },
  {
    "2015": 19403694,
    "2016": 20039598,
    "2017": 22480510,
    "2018": 22754719,
    "2019": 22650443,
    "Country Name": "Low & middle income",
    "Country Code": "LMY"
  },
  {
    "2015": 31,
    "2016": 46,
    "2017": 55,
    "2018": 56,
    "2019": 143,
    "Country Name": "Lesotho",
    "Country Code": "LSO"
  },
  {
    "2015": 2462161,
    "2016": 2337688,
    "2017": 2241074,
    "2018": 2167644,
    "2019": 2109831,
    "Country Name": "Late-demographic dividend",
    "Country Code": "LTE"
  },
  {
    "2015": 1094,
    "2016": 1284,
    "2017": 1577,
    "2018": 1731,
    "2019": 1822,
    "Country Name": "Lithuania",
    "Country Code": "LTU"
  },
  {
    "2015": 1306,
    "2016": 2020,
    "2017": 2020,
    "2018": 2020,
    "2019": 2548,
    "Country Name": "Luxembourg",
    "Country Code": "LUX"
  },
  {
    "2015": 193,
    "2016": 340,
    "2017": 653,
    "2018": 664,
    "2019": 665,
    "Country Name": "Latvia",
    "Country Code": "LVA"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Macao SAR, China",
    "Country Code": "MAC"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "St. Martin (French part)",
    "Country Code": "MAF"
  },
  {
    "2015": 3899,
    "2016": 4762,
    "2017": 4703,
    "2018": 5932,
    "2019": 6642,
    "Country Name": "Morocco",
    "Country Code": "MAR"
  },
  {
    "2015": 32,
    "2016": 27,
    "2017": 25,
    "2018": 25,
    "2019": 22,
    "Country Name": "Monaco",
    "Country Code": "MCO"
  },
  {
    "2015": 434,
    "2016": 419,
    "2017": 391,
    "2018": 409,
    "2019": 417,
    "Country Name": "Moldova",
    "Country Code": "MDA"
  },
  {
    "2015": 6,
    "2016": 22,
    "2017": 39,
    "2018": 39,
    "2019": 113,
    "Country Name": "Madagascar",
    "Country Code": "MDG"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Maldives",
    "Country Code": "MDV"
  },
  {
    "2015": 8903648,
    "2016": 8950801,
    "2017": 9075560,
    "2018": 9161280,
    "2019": 9195527,
    "Country Name": "Middle East & North Africa",
    "Country Code": "MEA"
  },
  {
    "2015": 2904,
    "2016": 6178,
    "2017": 8993,
    "2018": 16530,
    "2019": 28517,
    "Country Name": "Mexico",
    "Country Code": "MEX"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Marshall Islands",
    "Country Code": "MHL"
  },
  {
    "2015": 15292777,
    "2016": 15360635,
    "2017": 16651623,
    "2018": 16893751,
    "2019": 16782655,
    "Country Name": "Middle income",
    "Country Code": "MIC"
  },
  {
    "2015": 697,
    "2016": 634,
    "2017": 414,
    "2018": 413,
    "2019": 354,
    "Country Name": "North Macedonia",
    "Country Code": "MKD"
  },
  {
    "2015": 15913,
    "2016": 17510,
    "2017": 17036,
    "2018": 26538,
    "2019": 26672,
    "Country Name": "Mali",
    "Country Code": "MLI"
  },
  {
    "2015": 7068,
    "2016": 7941,
    "2017": 7994,
    "2018": 8579,
    "2019": 8908,
    "Country Name": "Malta",
    "Country Code": "MLT"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Myanmar",
    "Country Code": "MMR"
  },
  {
    "2015": 8861523,
    "2016": 8909610,
    "2017": 9039508,
    "2018": 9131285,
    "2019": 9167508,
    "Country Name": "Middle East & North Africa (excluding high income)",
    "Country Code": "MNA"
  },
  {
    "2015": 1762,
    "2016": 970,
    "2017": 794,
    "2018": 727,
    "2019": 653,
    "Country Name": "Montenegro",
    "Country Code": "MNE"
  },
  {
    "2015": 11,
    "2016": 10,
    "2017": 5,
    "2018": 5,
    "2019": "",
    "Country Name": "Mongolia",
    "Country Code": "MNG"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Northern Mariana Islands",
    "Country Code": "MNP"
  },
  {
    "2015": 5624,
    "2016": 4663,
    "2017": 4876,
    "2018": 4910,
    "2019": 4713,
    "Country Name": "Mozambique",
    "Country Code": "MOZ"
  },
  {
    "2015": 77390,
    "2016": 74147,
    "2017": 77425,
    "2018": 83184,
    "2019": 84901,
    "Country Name": "Mauritania",
    "Country Code": "MRT"
  },
  {
    "2015": "",
    "2016": "",
    "2017": 5,
    "2018": 16,
    "2019": 20,
    "Country Name": "Mauritius",
    "Country Code": "MUS"
  },
  {
    "2015": 9018,
    "2016": 9386,
    "2017": 8977,
    "2018": 13783,
    "2019": 14087,
    "Country Name": "Malawi",
    "Country Code": "MWI"
  },
  {
    "2015": 94161,
    "2016": 92259,
    "2017": 103837,
    "2018": 121305,
    "2019": 129107,
    "Country Name": "Malaysia",
    "Country Code": "MYS"
  },
  {
    "2015": 409088,
    "2016": 370285,
    "2017": 391903,
    "2018": 427343,
    "2019": 443472,
    "Country Name": "North America",
    "Country Code": "NAC"
  },
  {
    "2015": 1730,
    "2016": 1747,
    "2017": 2182,
    "2018": 2394,
    "2019": 3182,
    "Country Name": "Namibia",
    "Country Code": "NAM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "New Caledonia",
    "Country Code": "NCL"
  },
  {
    "2015": 124717,
    "2016": 166089,
    "2017": 165729,
    "2018": 175413,
    "2019": 179997,
    "Country Name": "Niger",
    "Country Code": "NER"
  },
  {
    "2015": 1387,
    "2016": 1357,
    "2017": 1910,
    "2018": 34727,
    "2019": 54157,
    "Country Name": "Nigeria",
    "Country Code": "NGA"
  },
  {
    "2015": 325,
    "2016": 325,
    "2017": 322,
    "2018": 321,
    "2019": 322,
    "Country Name": "Nicaragua",
    "Country Code": "NIC"
  },
  {
    "2015": 88518,
    "2016": 101727,
    "2017": 103843,
    "2018": 101824,
    "2019": 94417,
    "Country Name": "Netherlands",
    "Country Code": "NLD"
  },
  {
    "2015": 50377,
    "2016": 59512,
    "2017": 59230,
    "2018": 57004,
    "2019": 53882,
    "Country Name": "Norway",
    "Country Code": "NOR"
  },
  {
    "2015": 32669,
    "2016": 25249,
    "2017": 21467,
    "2018": 20804,
    "2019": 19570,
    "Country Name": "Nepal",
    "Country Code": "NPL"
  },
  {
    "2015": 508,
    "2016": 508,
    "2017": 964,
    "2018": 964,
    "2019": 755,
    "Country Name": "Nauru",
    "Country Code": "NRU"
  },
  {
    "2015": 1313,
    "2016": 1408,
    "2017": 1465,
    "2018": 1545,
    "2019": 2724,
    "Country Name": "New Zealand",
    "Country Code": "NZL"
  },
  {
    "2015": 4454366,
    "2016": 5320037,
    "2017": 6363607,
    "2018": 6816400,
    "2019": 6997395,
    "Country Name": "OECD members",
    "Country Code": "OED"
  },
  {
    "2015": 244,
    "2016": 316,
    "2017": 308,
    "2018": 310,
    "2019": 308,
    "Country Name": "Oman",
    "Country Code": "OMN"
  },
  {
    "2015": 58004,
    "2016": 58809,
    "2017": 62579,
    "2018": 54870,
    "2019": 55189,
    "Country Name": "Other small states",
    "Country Code": "OSS"
  },
  {
    "2015": 1561157,
    "2016": 1352551,
    "2017": 1393132,
    "2018": 1404008,
    "2019": 1419596,
    "Country Name": "Pakistan",
    "Country Code": "PAK"
  },
  {
    "2015": 17304,
    "2016": 17332,
    "2017": 2417,
    "2018": 2501,
    "2019": 2536,
    "Country Name": "Panama",
    "Country Code": "PAN"
  },
  {
    "2015": 1454,
    "2016": 1615,
    "2017": 1788,
    "2018": 2506,
    "2019": 2850,
    "Country Name": "Peru",
    "Country Code": "PER"
  },
  {
    "2015": 254,
    "2016": 392,
    "2017": 512,
    "2018": 631,
    "2019": 680,
    "Country Name": "Philippines",
    "Country Code": "PHL"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Palau",
    "Country Code": "PLW"
  },
  {
    "2015": 9503,
    "2016": 9529,
    "2017": 10018,
    "2018": 10022,
    "2019": 9698,
    "Country Name": "Papua New Guinea",
    "Country Code": "PNG"
  },
  {
    "2015": 14057,
    "2016": 11738,
    "2017": 12225,
    "2018": 12495,
    "2019": 12658,
    "Country Name": "Poland",
    "Country Code": "POL"
  },
  {
    "2015": 3974220,
    "2016": 4449429,
    "2017": 5506710,
    "2018": 5591788,
    "2019": 5765872,
    "Country Name": "Pre-demographic dividend",
    "Country Code": "PRE"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Puerto Rico",
    "Country Code": "PRI"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Korea, Dem. People’s Rep.",
    "Country Code": "PRK"
  },
  {
    "2015": 851,
    "2016": 1189,
    "2017": 1619,
    "2018": 2130,
    "2019": 2375,
    "Country Name": "Portugal",
    "Country Code": "PRT"
  },
  {
    "2015": 167,
    "2016": 199,
    "2017": 200,
    "2018": 260,
    "2019": 1014,
    "Country Name": "Paraguay",
    "Country Code": "PRY"
  },
  {
    "2015": 2104001,
    "2016": 2158274,
    "2017": 2214783,
    "2018": 2267747,
    "2019": 2319073,
    "Country Name": "West Bank and Gaza",
    "Country Code": "PSE"
  },
  {
    "2015": 525,
    "2016": 525,
    "2017": 976,
    "2018": 969,
    "2019": 767,
    "Country Name": "Pacific island small states",
    "Country Code": "PSS"
  },
  {
    "2015": 1890039,
    "2016": 2429253,
    "2017": 2864252,
    "2018": 3116076,
    "2019": 3388007,
    "Country Name": "Post-demographic dividend",
    "Country Code": "PST"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "French Polynesia",
    "Country Code": "PYF"
  },
  {
    "2015": 117,
    "2016": 176,
    "2017": 188,
    "2018": 189,
    "2019": 202,
    "Country Name": "Qatar",
    "Country Code": "QAT"
  },
  {
    "2015": 2581,
    "2016": 2880,
    "2017": 3911,
    "2018": 4134,
    "2019": 3860,
    "Country Name": "Romania",
    "Country Code": "ROU"
  },
  {
    "2015": 314498,
    "2016": 228981,
    "2017": 126021,
    "2018": 77382,
    "2019": 42413,
    "Country Name": "Russian Federation",
    "Country Code": "RUS"
  },
  {
    "2015": 144739,
    "2016": 156065,
    "2017": 170991,
    "2018": 145359,
    "2019": 145054,
    "Country Name": "Rwanda",
    "Country Code": "RWA"
  },
  {
    "2015": 2285493,
    "2016": 1912223,
    "2017": 2620697,
    "2018": 2600363,
    "2019": 2562316,
    "Country Name": "South Asia",
    "Country Code": "SAS"
  },
  {
    "2015": 122,
    "2016": 136,
    "2017": 153,
    "2018": 263,
    "2019": 315,
    "Country Name": "Saudi Arabia",
    "Country Code": "SAU"
  },
  {
    "2015": 309632,
    "2016": 421459,
    "2017": 906590,
    "2018": 1078280,
    "2019": 1055489,
    "Country Name": "Sudan",
    "Country Code": "SDN"
  },
  {
    "2015": 14383,
    "2016": 14575,
    "2017": 14646,
    "2018": 14359,
    "2019": 14467,
    "Country Name": "Senegal",
    "Country Code": "SEN"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Singapore",
    "Country Code": "SGP"
  },
  {
    "2015": 5,
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Solomon Islands",
    "Country Code": "SLB"
  },
  {
    "2015": 760,
    "2016": 683,
    "2017": 678,
    "2018": 591,
    "2019": 441,
    "Country Name": "Sierra Leone",
    "Country Code": "SLE"
  },
  {
    "2015": 46,
    "2016": 41,
    "2017": 40,
    "2018": 44,
    "2019": 48,
    "Country Name": "El Salvador",
    "Country Code": "SLV"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "San Marino",
    "Country Code": "SMR"
  },
  {
    "2015": 8081,
    "2016": 11579,
    "2017": 14565,
    "2018": 16738,
    "2019": 17882,
    "Country Name": "Somalia",
    "Country Code": "SOM"
  },
  {
    "2015": 35326,
    "2016": 36518,
    "2017": 32206,
    "2018": 30946,
    "2019": 26427,
    "Country Name": "Serbia",
    "Country Code": "SRB"
  },
  {
    "2015": 4471283,
    "2016": 5191333,
    "2017": 6327919,
    "2018": 6400157,
    "2019": 6413855,
    "Country Name": "Sub-Saharan Africa (excluding high income)",
    "Country Code": "SSA"
  },
  {
    "2015": 263012,
    "2016": 262558,
    "2017": 283405,
    "2018": 291838,
    "2019": 298309,
    "Country Name": "South Sudan",
    "Country Code": "SSD"
  },
  {
    "2015": 4471283,
    "2016": 5191333,
    "2017": 6327924,
    "2018": 6400173,
    "2019": 6413875,
    "Country Name": "Sub-Saharan Africa",
    "Country Code": "SSF"
  },
  {
    "2015": 58715,
    "2016": 59477,
    "2017": 63909,
    "2018": 56750,
    "2019": 58366,
    "Country Name": "Small states",
    "Country Code": "SST"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Sao Tome and Principe",
    "Country Code": "STP"
  },
  {
    "2015": "",
    "2016": "",
    "2017": 34,
    "2018": 41,
    "2019": 44,
    "Country Name": "Suriname",
    "Country Code": "SUR"
  },
  {
    "2015": 816,
    "2016": 980,
    "2017": 912,
    "2018": 938,
    "2019": 965,
    "Country Name": "Slovak Republic",
    "Country Code": "SVK"
  },
  {
    "2015": 284,
    "2016": 454,
    "2017": 611,
    "2018": 746,
    "2019": 741,
    "Country Name": "Slovenia",
    "Country Code": "SVN"
  },
  {
    "2015": 169516,
    "2016": 230158,
    "2017": 240954,
    "2018": 248210,
    "2019": 253787,
    "Country Name": "Sweden",
    "Country Code": "SWE"
  },
  {
    "2015": 694,
    "2016": 725,
    "2017": 790,
    "2018": 874,
    "2019": 940,
    "Country Name": "Eswatini",
    "Country Code": "SWZ"
  },
  {
    "2015": 5,
    "2016": 5,
    "2017": 5,
    "2018": 5,
    "2019": 5,
    "Country Name": "Sint Maarten (Dutch part)",
    "Country Code": "SXM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Seychelles",
    "Country Code": "SYC"
  },
  {
    "2015": 555766,
    "2016": 562821,
    "2017": 571298,
    "2018": 578956,
    "2019": 578525,
    "Country Name": "Syrian Arab Republic",
    "Country Code": "SYR"
  },
  {
    "2015": 5,
    "2016": 5,
    "2017": 5,
    "2018": 5,
    "2019": 5,
    "Country Name": "Turks and Caicos Islands",
    "Country Code": "TCA"
  },
  {
    "2015": 369538,
    "2016": 391235,
    "2017": 411475,
    "2018": 451203,
    "2019": 442670,
    "Country Name": "Chad",
    "Country Code": "TCD"
  },
  {
    "2015": 519778,
    "2016": 534285,
    "2017": 551510,
    "2018": 567710,
    "2019": 551474,
    "Country Name": "East Asia & Pacific (IDA & IBRD countries)",
    "Country Code": "TEA"
  },
  {
    "2015": 2965438,
    "2016": 3204954,
    "2017": 3711406,
    "2018": 3863745,
    "2019": 3723050,
    "Country Name": "Europe & Central Asia (IDA & IBRD countries)",
    "Country Code": "TEC"
  },
  {
    "2015": 21949,
    "2016": 12486,
    "2017": 12425,
    "2018": 12335,
    "2019": 11964,
    "Country Name": "Togo",
    "Country Code": "TGO"
  },
  {
    "2015": 108252,
    "2016": 106431,
    "2017": 104605,
    "2018": 102234,
    "2019": 97556,
    "Country Name": "Thailand",
    "Country Code": "THA"
  },
  {
    "2015": 1963,
    "2016": 2724,
    "2017": 2521,
    "2018": 2654,
    "2019": 3788,
    "Country Name": "Tajikistan",
    "Country Code": "TJK"
  },
  {
    "2015": 25,
    "2016": 26,
    "2017": 22,
    "2018": 21,
    "2019": 21,
    "Country Name": "Turkmenistan",
    "Country Code": "TKM"
  },
  {
    "2015": 337099,
    "2016": 321777,
    "2017": 251629,
    "2018": 215247,
    "2019": 257589,
    "Country Name": "Latin America & the Caribbean (IDA & IBRD countries)",
    "Country Code": "TLA"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Timor-Leste",
    "Country Code": "TLS"
  },
  {
    "2015": 6757522,
    "2016": 6751336,
    "2017": 6824725,
    "2018": 6863538,
    "2019": 6848435,
    "Country Name": "Middle East & North Africa (IDA & IBRD countries)",
    "Country Code": "TMN"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Tonga",
    "Country Code": "TON"
  },
  {
    "2015": 2285493,
    "2016": 1912223,
    "2017": 2620697,
    "2018": 2600363,
    "2019": 2562316,
    "Country Name": "South Asia (IDA & IBRD)",
    "Country Code": "TSA"
  },
  {
    "2015": 4471283,
    "2016": 5191333,
    "2017": 6327924,
    "2018": 6400173,
    "2019": 6413875,
    "Country Name": "Sub-Saharan Africa (IDA & IBRD countries)",
    "Country Code": "TSS"
  },
  {
    "2015": 105,
    "2016": 104,
    "2017": 282,
    "2018": 784,
    "2019": 2308,
    "Country Name": "Trinidad and Tobago",
    "Country Code": "TTO"
  },
  {
    "2015": 659,
    "2016": 646,
    "2017": 726,
    "2018": 1061,
    "2019": 1732,
    "Country Name": "Tunisia",
    "Country Code": "TUN"
  },
  {
    "2015": 2541348,
    "2016": 2869419,
    "2017": 3480350,
    "2018": 3681688,
    "2019": 3579531,
    "Country Name": "Turkey",
    "Country Code": "TUR"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Tuvalu",
    "Country Code": "TUV"
  },
  {
    "2015": 211845,
    "2016": 281498,
    "2017": 308528,
    "2018": 278322,
    "2019": 242171,
    "Country Name": "Tanzania",
    "Country Code": "TZA"
  },
  {
    "2015": 477187,
    "2016": 940825,
    "2017": 1350495,
    "2018": 1165646,
    "2019": 1359458,
    "Country Name": "Uganda",
    "Country Code": "UGA"
  },
  {
    "2015": 3261,
    "2016": 3292,
    "2017": 3241,
    "2018": 2606,
    "2019": 2166,
    "Country Name": "Ukraine",
    "Country Code": "UKR"
  },
  {
    "2015": 9498693,
    "2016": 9692169,
    "2017": 10200561,
    "2018": 10353304,
    "2019": 10198785,
    "Country Name": "Upper middle income",
    "Country Code": "UMC"
  },
  {
    "2015": 292,
    "2016": 299,
    "2017": 334,
    "2018": 379,
    "2019": 498,
    "Country Name": "Uruguay",
    "Country Code": "URY"
  },
  {
    "2015": 273198,
    "2016": 272963,
    "2017": 287135,
    "2018": 313242,
    "2019": 341715,
    "Country Name": "United States",
    "Country Code": "USA"
  },
  {
    "2015": 106,
    "2016": 26,
    "2017": 20,
    "2018": 13,
    "2019": 13,
    "Country Name": "Uzbekistan",
    "Country Code": "UZB"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "St. Vincent and the Grenadines",
    "Country Code": "VCT"
  },
  {
    "2015": 173745,
    "2016": 172047,
    "2017": 122804,
    "2018": 67283,
    "2019": 67749,
    "Country Name": "Venezuela, RB",
    "Country Code": "VEN"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "British Virgin Islands",
    "Country Code": "VGB"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Virgin Islands (U.S.)",
    "Country Code": "VIR"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Vietnam",
    "Country Code": "VNM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Vanuatu",
    "Country Code": "VUT"
  },
  {
    "2015": 21351537,
    "2016": 22524734,
    "2017": 25383515,
    "2018": 25905096,
    "2019": 26074648,
    "Country Name": "World",
    "Country Code": "WLD"
  },
  {
    "2015": "",
    "2016": 5,
    "2017": 5,
    "2018": 5,
    "2019": "",
    "Country Name": "Samoa",
    "Country Code": "WSM"
  },
  {
    "2015": "",
    "2016": "",
    "2017": "",
    "2018": "",
    "2019": "",
    "Country Name": "Kosovo",
    "Country Code": "XKX"
  },
  {
    "2015": 267163,
    "2016": 269778,
    "2017": 270913,
    "2018": 264359,
    "2019": 268503,
    "Country Name": "Yemen, Rep.",
    "Country Code": "YEM"
  },
  {
    "2015": 121635,
    "2016": 91018,
    "2017": 88694,
    "2018": 89285,
    "2019": 89285,
    "Country Name": "South Africa",
    "Country Code": "ZAF"
  },
  {
    "2015": 26434,
    "2016": 29338,
    "2017": 41266,
    "2018": 49877,
    "2019": 57518,
    "Country Name": "Zambia",
    "Country Code": "ZMB"
  },
  {
    "2015": 6943,
    "2016": 7423,
    "2017": 7566,
    "2018": 7795,
    "2019": 8956,
    "Country Name": "Zimbabwe",
    "Country Code": "ZWE"
  }
]

export default refugeesInCountry;

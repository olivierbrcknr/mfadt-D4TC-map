// modified data set. originally downloaded at:
// https://data.worldbank.org/indicator/SP.POP.GROW

const growth = [
  {
    "2019": 0.442121959444383,
    "Country Name": "Aruba",
    "Country Code": "ABW"
  },
  {
    "2019": 2.31181721714573,
    "Country Name": "Afghanistan",
    "Country Code": "AFG"
  },
  {
    "2019": 3.2429826028718,
    "Country Name": "Angola",
    "Country Code": "AGO"
  },
  {
    "2019": -0.426007367032238,
    "Country Name": "Albania",
    "Country Code": "ALB"
  },
  {
    "2019": 0.176453843432831,
    "Country Name": "Andorra",
    "Country Code": "AND"
  },
  {
    "2019": 1.9246927332871,
    "Country Name": "Arab World",
    "Country Code": "ARB"
  },
  {
    "2019": 1.43878044485973,
    "Country Name": "United Arab Emirates",
    "Country Code": "ARE"
  },
  {
    "2019": 0.993397493293046,
    "Country Name": "Argentina",
    "Country Code": "ARG"
  },
  {
    "2019": 0.201539722879792,
    "Country Name": "Armenia",
    "Country Code": "ARM"
  },
  {
    "2019": -0.276230801135428,
    "Country Name": "American Samoa",
    "Country Code": "ASM"
  },
  {
    "2019": 0.860380480678118,
    "Country Name": "Antigua and Barbuda",
    "Country Code": "ATG"
  },
  {
    "2019": 1.51598445404769,
    "Country Name": "Australia",
    "Country Code": "AUS"
  },
  {
    "2019": 0.412539808816785,
    "Country Name": "Austria",
    "Country Code": "AUT"
  },
  {
    "2019": 0.837019639355119,
    "Country Name": "Azerbaijan",
    "Country Code": "AZE"
  },
  {
    "2019": 3.12896711408085,
    "Country Name": "Burundi",
    "Country Code": "BDI"
  },
  {
    "2019": 0.497584971619203,
    "Country Name": "Belgium",
    "Country Code": "BEL"
  },
  {
    "2019": 2.71510535908362,
    "Country Name": "Benin",
    "Country Code": "BEN"
  },
  {
    "2019": 2.84422255256232,
    "Country Name": "Burkina Faso",
    "Country Code": "BFA"
  },
  {
    "2019": 1.0420011284052,
    "Country Name": "Bangladesh",
    "Country Code": "BGD"
  },
  {
    "2019": -0.703905641117455,
    "Country Name": "Bulgaria",
    "Country Code": "BGR"
  },
  {
    "2019": 4.46923900893373,
    "Country Name": "Bahrain",
    "Country Code": "BHR"
  },
  {
    "2019": 0.991335935305563,
    "Country Name": "Bahamas, The",
    "Country Code": "BHS"
  },
  {
    "2019": -0.692206408656095,
    "Country Name": "Bosnia and Herzegovina",
    "Country Code": "BIH"
  },
  {
    "2019": -0.175648469687962,
    "Country Name": "Belarus",
    "Country Code": "BLR"
  },
  {
    "2019": 1.88311073570597,
    "Country Name": "Belize",
    "Country Code": "BLZ"
  },
  {
    "2019": -0.00312891113892766,
    "Country Name": "Bermuda",
    "Country Code": "BMU"
  },
  {
    "2019": 1.39909836758217,
    "Country Name": "Bolivia",
    "Country Code": "BOL"
  },
  {
    "2019": 0.75154842651724,
    "Country Name": "Brazil",
    "Country Code": "BRA"
  },
  {
    "2019": 0.133875829263984,
    "Country Name": "Barbados",
    "Country Code": "BRB"
  },
  {
    "2019": 1.00273731829347,
    "Country Name": "Brunei Darussalam",
    "Country Code": "BRN"
  },
  {
    "2019": 1.14638227394932,
    "Country Name": "Bhutan",
    "Country Code": "BTN"
  },
  {
    "2019": 2.1752909092404,
    "Country Name": "Botswana",
    "Country Code": "BWA"
  },
  {
    "2019": 1.67474521186478,
    "Country Name": "Central African Republic",
    "Country Code": "CAF"
  },
  {
    "2019": 1.42405130729193,
    "Country Name": "Canada",
    "Country Code": "CAN"
  },
  {
    "2019": -0.154526619486703,
    "Country Name": "Central Europe and the Baltics",
    "Country Code": "CEB"
  },
  {
    "2019": 0.708089212766107,
    "Country Name": "Switzerland",
    "Country Code": "CHE"
  },
  {
    "2019": 1.02697265622261,
    "Country Name": "Channel Islands",
    "Country Code": "CHI"
  },
  {
    "2019": 1.18298043072933,
    "Country Name": "Chile",
    "Country Code": "CHL"
  },
  {
    "2019": 0.357291063115687,
    "Country Name": "China",
    "Country Code": "CHN"
  },
  {
    "2019": 2.54933623927928,
    "Country Name": "Cote d'Ivoire",
    "Country Code": "CIV"
  },
  {
    "2019": 2.58424710709784,
    "Country Name": "Cameroon",
    "Country Code": "CMR"
  },
  {
    "2019": 3.18708630238904,
    "Country Name": "Congo, Dem. Rep.",
    "Country Code": "COD"
  },
  {
    "2019": 2.5629008034182,
    "Country Name": "Congo, Rep.",
    "Country Code": "COG"
  },
  {
    "2019": 1.38170201436676,
    "Country Name": "Colombia",
    "Country Code": "COL"
  },
  {
    "2019": 2.20587743735692,
    "Country Name": "Comoros",
    "Country Code": "COM"
  },
  {
    "2019": 1.12792431423236,
    "Country Name": "Cabo Verde",
    "Country Code": "CPV"
  },
  {
    "2019": 0.957905013850413,
    "Country Name": "Costa Rica",
    "Country Code": "CRI"
  },
  {
    "2019": 0.576385402023249,
    "Country Name": "Caribbean small states",
    "Country Code": "CSS"
  },
  {
    "2019": -0.041064554364363,
    "Country Name": "Cuba",
    "Country Code": "CUB"
  },
  {
    "2019": -1.42563343261042,
    "Country Name": "Curacao",
    "Country Code": "CUW"
  },
  {
    "2019": 1.19888054809676,
    "Country Name": "Cayman Islands",
    "Country Code": "CYM"
  },
  {
    "2019": 0.779788191505342,
    "Country Name": "Cyprus",
    "Country Code": "CYP"
  },
  {
    "2019": 0.37353731667249,
    "Country Name": "Czech Republic",
    "Country Code": "CZE"
  },
  {
    "2019": 0.273451073953555,
    "Country Name": "Germany",
    "Country Code": "DEU"
  },
  {
    "2019": 1.51518050206022,
    "Country Name": "Djibouti",
    "Country Code": "DJI"
  },
  {
    "2019": 0.255171542527292,
    "Country Name": "Dominica",
    "Country Code": "DMA"
  },
  {
    "2019": 0.429153163832595,
    "Country Name": "Denmark",
    "Country Code": "DNK"
  },
  {
    "2019": 1.04646051306009,
    "Country Name": "Dominican Republic",
    "Country Code": "DOM"
  },
  {
    "2019": 1.93395019121501,
    "Country Name": "Algeria",
    "Country Code": "DZA"
  },
  {
    "2019": 0.578195471892599,
    "Country Name": "East Asia & Pacific (excluding high income)",
    "Country Code": "EAP"
  },
  {
    "2019": 1.29458356359449,
    "Country Name": "Early-demographic dividend",
    "Country Code": "EAR"
  },
  {
    "2019": 0.536489917948018,
    "Country Name": "East Asia & Pacific",
    "Country Code": "EAS"
  },
  {
    "2019": 0.495547945499752,
    "Country Name": "Europe & Central Asia (excluding high income)",
    "Country Code": "ECA"
  },
  {
    "2019": 0.350516855686351,
    "Country Name": "Europe & Central Asia",
    "Country Code": "ECS"
  },
  {
    "2019": 1.6792131785026,
    "Country Name": "Ecuador",
    "Country Code": "ECU"
  },
  {
    "2019": 1.97628434808829,
    "Country Name": "Egypt, Arab Rep.",
    "Country Code": "EGY"
  },
  {
    "2019": 0.220727543247932,
    "Country Name": "Euro area",
    "Country Code": "EMU"
  },
  {
    "2019": 1.27574733774295,
    "Country Name": "Eritrea",
    "Country Code": "ERI"
  },
  {
    "2019": 0.594469675339612,
    "Country Name": "Spain",
    "Country Code": "ESP"
  },
  {
    "2019": 0.348339661751493,
    "Country Name": "Estonia",
    "Country Code": "EST"
  },
  {
    "2019": 2.57956334803926,
    "Country Name": "Ethiopia",
    "Country Code": "ETH"
  },
  {
    "2019": 0.164369896792053,
    "Country Name": "European Union",
    "Country Code": "EUU"
  },
  {
    "2019": 2.26414858148378,
    "Country Name": "Fragile and conflict affected situations",
    "Country Code": "FCS"
  },
  {
    "2019": 0.0867899631484352,
    "Country Name": "Finland",
    "Country Code": "FIN"
  },
  {
    "2019": 0.729660242086809,
    "Country Name": "Fiji",
    "Country Code": "FJI"
  },
  {
    "2019": 0.140234217742883,
    "Country Name": "France",
    "Country Code": "FRA"
  },
  {
    "2019": 0.372524228078936,
    "Country Name": "Faroe Islands",
    "Country Code": "FRO"
  },
  {
    "2019": 1.03774307896197,
    "Country Name": "Micronesia, Fed. Sts.",
    "Country Code": "FSM"
  },
  {
    "2019": 2.48408920696695,
    "Country Name": "Gabon",
    "Country Code": "GAB"
  },
  {
    "2019": 0.561255390388033,
    "Country Name": "United Kingdom",
    "Country Code": "GBR"
  },
  {
    "2019": -0.165625313562404,
    "Country Name": "Georgia",
    "Country Code": "GEO"
  },
  {
    "2019": 2.16257788677108,
    "Country Name": "Ghana",
    "Country Code": "GHA"
  },
  {
    "2019": -0.0504308885041264,
    "Country Name": "Gibraltar",
    "Country Code": "GIB"
  },
  {
    "2019": 2.83457538168629,
    "Country Name": "Guinea",
    "Country Code": "GIN"
  },
  {
    "2019": 2.92185023710734,
    "Country Name": "Gambia, The",
    "Country Code": "GMB"
  },
  {
    "2019": 2.45652209459577,
    "Country Name": "Guinea-Bissau",
    "Country Code": "GNB"
  },
  {
    "2019": 3.528524074108,
    "Country Name": "Equatorial Guinea",
    "Country Code": "GNQ"
  },
  {
    "2019": -0.154411355221523,
    "Country Name": "Greece",
    "Country Code": "GRC"
  },
  {
    "2019": 0.491370692894964,
    "Country Name": "Grenada",
    "Country Code": "GRD"
  },
  {
    "2019": 0.359917714454119,
    "Country Name": "Greenland",
    "Country Code": "GRL"
  },
  {
    "2019": 1.56038604781094,
    "Country Name": "Guatemala",
    "Country Code": "GTM"
  },
  {
    "2019": 0.916352317700628,
    "Country Name": "Guam",
    "Country Code": "GUM"
  },
  {
    "2019": 0.481762010560315,
    "Country Name": "Guyana",
    "Country Code": "GUY"
  },
  {
    "2019": 0.433729853557736,
    "Country Name": "High income",
    "Country Code": "HIC"
  },
  {
    "2019": 0.754094920172569,
    "Country Name": "Hong Kong SAR, China",
    "Country Code": "HKG"
  },
  {
    "2019": 1.64064879291134,
    "Country Name": "Honduras",
    "Country Code": "HND"
  },
  {
    "2019": 2.75220226573806,
    "Country Name": "Heavily indebted poor countries (HIPC)",
    "Country Code": "HPC"
  },
  {
    "2019": -0.49888869647906,
    "Country Name": "Croatia",
    "Country Code": "HRV"
  },
  {
    "2019": 1.24989940326034,
    "Country Name": "Haiti",
    "Country Code": "HTI"
  },
  {
    "2019": -0.0574556437016089,
    "Country Name": "Hungary",
    "Country Code": "HUN"
  },
  {
    "2019": 0.816182785519743,
    "Country Name": "IBRD only",
    "Country Code": "IBD"
  },
  {
    "2019": 1.18876443261939,
    "Country Name": "IDA & IBRD total",
    "Country Code": "IBT"
  },
  {
    "2019": 2.27840870302106,
    "Country Name": "IDA total",
    "Country Code": "IDA"
  },
  {
    "2019": 2.26855633979939,
    "Country Name": "IDA blend",
    "Country Code": "IDB"
  },
  {
    "2019": 1.10058458685211,
    "Country Name": "Indonesia",
    "Country Code": "IDN"
  },
  {
    "2019": 2.28339786815268,
    "Country Name": "IDA only",
    "Country Code": "IDX"
  },
  {
    "2019": 0.601207780255882,
    "Country Name": "Isle of Man",
    "Country Code": "IMN"
  },
  {
    "2019": 1.01510602753472,
    "Country Name": "India",
    "Country Code": "IND"
  },
  {
    "2019": "",
    "Country Name": "Not classified",
    "Country Code": "INX"
  },
  {
    "2019": 1.51149403751316,
    "Country Name": "Ireland",
    "Country Code": "IRL"
  },
  {
    "2019": 1.35222602321056,
    "Country Name": "Iran, Islamic Rep.",
    "Country Code": "IRN"
  },
  {
    "2019": 2.25413421903288,
    "Country Name": "Iraq",
    "Country Code": "IRQ"
  },
  {
    "2019": 2.40672425296975,
    "Country Name": "Iceland",
    "Country Code": "ISL"
  },
  {
    "2019": 1.90125095125148,
    "Country Name": "Israel",
    "Country Code": "ISR"
  },
  {
    "2019": -0.206038624053582,
    "Country Name": "Italy",
    "Country Code": "ITA"
  },
  {
    "2019": 0.456356197137556,
    "Country Name": "Jamaica",
    "Country Code": "JAM"
  },
  {
    "2019": 1.4526643189474,
    "Country Name": "Jordan",
    "Country Code": "JOR"
  },
  {
    "2019": -0.208999472902293,
    "Country Name": "Japan",
    "Country Code": "JPN"
  },
  {
    "2019": 1.29074221770545,
    "Country Name": "Kazakhstan",
    "Country Code": "KAZ"
  },
  {
    "2019": 2.27190164034829,
    "Country Name": "Kenya",
    "Country Code": "KEN"
  },
  {
    "2019": 2.09871784350026,
    "Country Name": "Kyrgyz Republic",
    "Country Code": "KGZ"
  },
  {
    "2019": 1.44639338013252,
    "Country Name": "Cambodia",
    "Country Code": "KHM"
  },
  {
    "2019": 1.50696995827,
    "Country Name": "Kiribati",
    "Country Code": "KIR"
  },
  {
    "2019": 0.725797379770302,
    "Country Name": "St. Kitts and Nevis",
    "Country Code": "KNA"
  },
  {
    "2019": 0.198353208370259,
    "Country Name": "Korea, Rep.",
    "Country Code": "KOR"
  },
  {
    "2019": 1.67232318324502,
    "Country Name": "Kuwait",
    "Country Code": "KWT"
  },
  {
    "2019": 0.930756336950139,
    "Country Name": "Latin America & Caribbean (excluding high income)",
    "Country Code": "LAC"
  },
  {
    "2019": 1.5171155747641,
    "Country Name": "Lao PDR",
    "Country Code": "LAO"
  },
  {
    "2019": 0.0990613623664896,
    "Country Name": "Lebanon",
    "Country Code": "LBN"
  },
  {
    "2019": 2.42719460419122,
    "Country Name": "Liberia",
    "Country Code": "LBR"
  },
  {
    "2019": 1.46977765305762,
    "Country Name": "Libya",
    "Country Code": "LBY"
  },
  {
    "2019": 0.494134202023454,
    "Country Name": "St. Lucia",
    "Country Code": "LCA"
  },
  {
    "2019": 0.933091750844994,
    "Country Name": "Latin America & Caribbean",
    "Country Code": "LCN"
  },
  {
    "2019": 2.34992348107012,
    "Country Name": "Least developed countries: UN classification",
    "Country Code": "LDC"
  },
  {
    "2019": 2.62961040524759,
    "Country Name": "Low income",
    "Country Code": "LIC"
  },
  {
    "2019": 0.287110523979341,
    "Country Name": "Liechtenstein",
    "Country Code": "LIE"
  },
  {
    "2019": 0.611875945764341,
    "Country Name": "Sri Lanka",
    "Country Code": "LKA"
  },
  {
    "2019": 1.42618221261569,
    "Country Name": "Lower middle income",
    "Country Code": "LMC"
  },
  {
    "2019": 1.19885159517482,
    "Country Name": "Low & middle income",
    "Country Code": "LMY"
  },
  {
    "2019": 0.80956647567982,
    "Country Name": "Lesotho",
    "Country Code": "LSO"
  },
  {
    "2019": 0.464939742419872,
    "Country Name": "Late-demographic dividend",
    "Country Code": "LTE"
  },
  {
    "2019": -0.526056405820061,
    "Country Name": "Lithuania",
    "Country Code": "LTU"
  },
  {
    "2019": 1.9459080290974,
    "Country Name": "Luxembourg",
    "Country Code": "LUX"
  },
  {
    "2019": -0.749229473885315,
    "Country Name": "Latvia",
    "Country Code": "LVA"
  },
  {
    "2019": 1.38499683787543,
    "Country Name": "Macao SAR, China",
    "Country Code": "MAC"
  },
  {
    "2019": 1.9611076778355,
    "Country Name": "St. Martin (French part)",
    "Country Code": "MAF"
  },
  {
    "2019": 1.22105092988365,
    "Country Name": "Morocco",
    "Country Code": "MAR"
  },
  {
    "2019": 0.726376735217096,
    "Country Name": "Monaco",
    "Country Code": "MCO"
  },
  {
    "2019": -1.80522553770811,
    "Country Name": "Moldova",
    "Country Code": "MDA"
  },
  {
    "2019": 2.65624016241262,
    "Country Name": "Madagascar",
    "Country Code": "MDG"
  },
  {
    "2019": 2.91560605041598,
    "Country Name": "Maldives",
    "Country Code": "MDV"
  },
  {
    "2019": 1.73629247978811,
    "Country Name": "Middle East & North Africa",
    "Country Code": "MEA"
  },
  {
    "2019": 1.09136213246927,
    "Country Name": "Mexico",
    "Country Code": "MEX"
  },
  {
    "2019": 0.645031416343302,
    "Country Name": "Marshall Islands",
    "Country Code": "MHL"
  },
  {
    "2019": 1.03565053397206,
    "Country Name": "Middle income",
    "Country Code": "MIC"
  },
  {
    "2019": 0.0240494411584019,
    "Country Name": "North Macedonia",
    "Country Code": "MKD"
  },
  {
    "2019": 2.99663676010293,
    "Country Name": "Mali",
    "Country Code": "MLI"
  },
  {
    "2019": 3.65143580077893,
    "Country Name": "Malta",
    "Country Code": "MLT"
  },
  {
    "2019": 0.625548337219885,
    "Country Name": "Myanmar",
    "Country Code": "MMR"
  },
  {
    "2019": 1.71335264654857,
    "Country Name": "Middle East & North Africa (excluding high income)",
    "Country Code": "MNA"
  },
  {
    "2019": -0.0144652208127193,
    "Country Name": "Montenegro",
    "Country Code": "MNE"
  },
  {
    "2019": 1.71875309742159,
    "Country Name": "Mongolia",
    "Country Code": "MNG"
  },
  {
    "2019": 0.585463293020077,
    "Country Name": "Northern Mariana Islands",
    "Country Code": "MNP"
  },
  {
    "2019": 2.90713743750143,
    "Country Name": "Mozambique",
    "Country Code": "MOZ"
  },
  {
    "2019": 2.7412802727648,
    "Country Name": "Mauritania",
    "Country Code": "MRT"
  },
  {
    "2019": 0.0322400432027594,
    "Country Name": "Mauritius",
    "Country Code": "MUS"
  },
  {
    "2019": 2.64037519341292,
    "Country Name": "Malawi",
    "Country Code": "MWI"
  },
  {
    "2019": 1.32706064876164,
    "Country Name": "Malaysia",
    "Country Code": "MYS"
  },
  {
    "2019": 0.572694995117587,
    "Country Name": "North America",
    "Country Code": "NAC"
  },
  {
    "2019": 1.87248088130699,
    "Country Name": "Namibia",
    "Country Code": "NAM"
  },
  {
    "2019": 1.30803110002856,
    "Country Name": "New Caledonia",
    "Country Code": "NCL"
  },
  {
    "2019": 3.79366815330185,
    "Country Name": "Niger",
    "Country Code": "NER"
  },
  {
    "2019": 2.5648418857943,
    "Country Name": "Nigeria",
    "Country Code": "NGA"
  },
  {
    "2019": 1.22957367676273,
    "Country Name": "Nicaragua",
    "Country Code": "NIC"
  },
  {
    "2019": 0.585724460318329,
    "Country Name": "Netherlands",
    "Country Code": "NLD"
  },
  {
    "2019": 0.675061373245644,
    "Country Name": "Norway",
    "Country Code": "NOR"
  },
  {
    "2019": 1.83733707688441,
    "Country Name": "Nepal",
    "Country Code": "NPL"
  },
  {
    "2019": -0.972916513578618,
    "Country Name": "Nauru",
    "Country Code": "NRU"
  },
  {
    "2019": 1.55772774722449,
    "Country Name": "New Zealand",
    "Country Code": "NZL"
  },
  {
    "2019": 0.541905324839774,
    "Country Name": "OECD members",
    "Country Code": "OED"
  },
  {
    "2019": 2.96831339383564,
    "Country Name": "Oman",
    "Country Code": "OMN"
  },
  {
    "2019": 1.9512089822791,
    "Country Name": "Other small states",
    "Country Code": "OSS"
  },
  {
    "2019": 2.02921486315548,
    "Country Name": "Pakistan",
    "Country Code": "PAK"
  },
  {
    "2019": 1.65178689075561,
    "Country Name": "Panama",
    "Country Code": "PAN"
  },
  {
    "2019": 1.61615719697585,
    "Country Name": "Peru",
    "Country Code": "PER"
  },
  {
    "2019": 1.36399467911631,
    "Country Name": "Philippines",
    "Country Code": "PHL"
  },
  {
    "2019": 0.562440574980858,
    "Country Name": "Palau",
    "Country Code": "PLW"
  },
  {
    "2019": 1.95367908220702,
    "Country Name": "Papua New Guinea",
    "Country Code": "PNG"
  },
  {
    "2019": -0.0102073030655774,
    "Country Name": "Poland",
    "Country Code": "POL"
  },
  {
    "2019": 2.76430231447951,
    "Country Name": "Pre-demographic dividend",
    "Country Code": "PRE"
  },
  {
    "2019": 0.0106465459574109,
    "Country Name": "Puerto Rico",
    "Country Code": "PRI"
  },
  {
    "2019": 0.454319921690691,
    "Country Name": "Korea, Dem. People’s Rep.",
    "Country Code": "PRK"
  },
  {
    "2019": -0.140172576776066,
    "Country Name": "Portugal",
    "Country Code": "PRT"
  },
  {
    "2019": 1.26516727108041,
    "Country Name": "Paraguay",
    "Country Code": "PRY"
  },
  {
    "2019": 2.51178246264674,
    "Country Name": "West Bank and Gaza",
    "Country Code": "PSE"
  },
  {
    "2019": 1.47837095557971,
    "Country Name": "Pacific island small states",
    "Country Code": "PSS"
  },
  {
    "2019": 0.313038865175869,
    "Country Name": "Post-demographic dividend",
    "Country Code": "PST"
  },
  {
    "2019": 0.577415665471892,
    "Country Name": "French Polynesia",
    "Country Code": "PYF"
  },
  {
    "2019": 1.79528505056432,
    "Country Name": "Qatar",
    "Country Code": "QAT"
  },
  {
    "2019": -0.597497124413531,
    "Country Name": "Romania",
    "Country Code": "ROU"
  },
  {
    "2019": -0.0722343781903799,
    "Country Name": "Russian Federation",
    "Country Code": "RUS"
  },
  {
    "2019": 2.60765264493972,
    "Country Name": "Rwanda",
    "Country Code": "RWA"
  },
  {
    "2019": 1.17879908981622,
    "Country Name": "South Asia",
    "Country Code": "SAS"
  },
  {
    "2019": 1.67311172870933,
    "Country Name": "Saudi Arabia",
    "Country Code": "SAU"
  },
  {
    "2019": 2.39143403307158,
    "Country Name": "Sudan",
    "Country Code": "SDN"
  },
  {
    "2019": 2.74974740844133,
    "Country Name": "Senegal",
    "Country Code": "SEN"
  },
  {
    "2019": 1.14428330688929,
    "Country Name": "Singapore",
    "Country Code": "SGP"
  },
  {
    "2019": 2.56538506367278,
    "Country Name": "Solomon Islands",
    "Country Code": "SLB"
  },
  {
    "2019": 2.10907525200416,
    "Country Name": "Sierra Leone",
    "Country Code": "SLE"
  },
  {
    "2019": 0.509683301933842,
    "Country Name": "El Salvador",
    "Country Code": "SLV"
  },
  {
    "2019": 0.221745970085152,
    "Country Name": "San Marino",
    "Country Code": "SMR"
  },
  {
    "2019": 2.85560211622181,
    "Country Name": "Somalia",
    "Country Code": "SOM"
  },
  {
    "2019": -0.540353661727366,
    "Country Name": "Serbia",
    "Country Code": "SRB"
  },
  {
    "2019": 2.66031426848285,
    "Country Name": "Sub-Saharan Africa (excluding high income)",
    "Country Code": "SSA"
  },
  {
    "2019": 0.782224434404954,
    "Country Name": "South Sudan",
    "Country Code": "SSD"
  },
  {
    "2019": 2.65707175729588,
    "Country Name": "Sub-Saharan Africa",
    "Country Code": "SSF"
  },
  {
    "2019": 1.67323519896705,
    "Country Name": "Small states",
    "Country Code": "SST"
  },
  {
    "2019": 1.89076332349799,
    "Country Name": "Sao Tome and Principe",
    "Country Code": "STP"
  },
  {
    "2019": 0.929879177652127,
    "Country Name": "Suriname",
    "Country Code": "SUR"
  },
  {
    "2019": 0.13397129785832,
    "Country Name": "Slovak Republic",
    "Country Code": "SVK"
  },
  {
    "2019": 0.67528080839474,
    "Country Name": "Slovenia",
    "Country Code": "SVN"
  },
  {
    "2019": 1.07758038117856,
    "Country Name": "Sweden",
    "Country Code": "SWE"
  },
  {
    "2019": 1.04530919354082,
    "Country Name": "Eswatini",
    "Country Code": "SWZ"
  },
  {
    "2019": 0.194134259307588,
    "Country Name": "Sint Maarten (Dutch part)",
    "Country Code": "SXM"
  },
  {
    "2019": 0.887925293341637,
    "Country Name": "Seychelles",
    "Country Code": "SYC"
  },
  {
    "2019": 0.964511740097553,
    "Country Name": "Syrian Arab Republic",
    "Country Code": "SYR"
  },
  {
    "2019": 1.38686044820971,
    "Country Name": "Turks and Caicos Islands",
    "Country Code": "TCA"
  },
  {
    "2019": 2.98593746093303,
    "Country Name": "Chad",
    "Country Code": "TCD"
  },
  {
    "2019": 0.579735336153078,
    "Country Name": "East Asia & Pacific (IDA & IBRD countries)",
    "Country Code": "TEA"
  },
  {
    "2019": 0.398557755302491,
    "Country Name": "Europe & Central Asia (IDA & IBRD countries)",
    "Country Code": "TEC"
  },
  {
    "2019": 2.42033520841497,
    "Country Name": "Togo",
    "Country Code": "TGO"
  },
  {
    "2019": 0.283426556156345,
    "Country Name": "Thailand",
    "Country Code": "THA"
  },
  {
    "2019": 2.39054628853621,
    "Country Name": "Tajikistan",
    "Country Code": "TJK"
  },
  {
    "2019": 1.54638921755068,
    "Country Name": "Turkmenistan",
    "Country Code": "TKM"
  },
  {
    "2019": 0.956653103896699,
    "Country Name": "Latin America & the Caribbean (IDA & IBRD countries)",
    "Country Code": "TLA"
  },
  {
    "2019": 1.96383558319426,
    "Country Name": "Timor-Leste",
    "Country Code": "TLS"
  },
  {
    "2019": 1.70332577455856,
    "Country Name": "Middle East & North Africa (IDA & IBRD countries)",
    "Country Code": "TMN"
  },
  {
    "2019": 1.24898706310596,
    "Country Name": "Tonga",
    "Country Code": "TON"
  },
  {
    "2019": 1.17879908981622,
    "Country Name": "South Asia (IDA & IBRD)",
    "Country Code": "TSA"
  },
  {
    "2019": 2.65707175729588,
    "Country Name": "Sub-Saharan Africa (IDA & IBRD countries)",
    "Country Code": "TSS"
  },
  {
    "2019": 0.367347659660472,
    "Country Name": "Trinidad and Tobago",
    "Country Code": "TTO"
  },
  {
    "2019": 1.11364374282179,
    "Country Name": "Tunisia",
    "Country Code": "TUN"
  },
  {
    "2019": 1.33926035058318,
    "Country Name": "Turkey",
    "Country Code": "TUR"
  },
  {
    "2019": 1.19203277256267,
    "Country Name": "Tuvalu",
    "Country Code": "TUV"
  },
  {
    "2019": 2.95168167328042,
    "Country Name": "Tanzania",
    "Country Code": "TZA"
  },
  {
    "2019": 3.55574052888872,
    "Country Name": "Uganda",
    "Country Code": "UGA"
  },
  {
    "2019": -0.533355282042411,
    "Country Name": "Ukraine",
    "Country Code": "UKR"
  },
  {
    "2019": 0.640342521843195,
    "Country Name": "Upper middle income",
    "Country Code": "UMC"
  },
  {
    "2019": 0.359859761032412,
    "Country Name": "Uruguay",
    "Country Code": "URY"
  },
  {
    "2019": 0.473953539373292,
    "Country Name": "United States",
    "Country Code": "USA"
  },
  {
    "2019": 1.87736354244626,
    "Country Name": "Uzbekistan",
    "Country Code": "UZB"
  },
  {
    "2019": 0.343298993403754,
    "Country Name": "St. Vincent and the Grenadines",
    "Country Code": "VCT"
  },
  {
    "2019": -1.23504114644487,
    "Country Name": "Venezuela, RB",
    "Country Code": "VEN"
  },
  {
    "2019": 0.762137664197041,
    "Country Name": "British Virgin Islands",
    "Country Code": "VGB"
  },
  {
    "2019": -0.323958187523532,
    "Country Name": "Virgin Islands (U.S.)",
    "Country Code": "VIR"
  },
  {
    "2019": 0.960110493934853,
    "Country Name": "Vietnam",
    "Country Code": "VNM"
  },
  {
    "2019": 2.43092019311926,
    "Country Name": "Vanuatu",
    "Country Code": "VUT"
  },
  {
    "2019": 1.07483912865109,
    "Country Name": "World",
    "Country Code": "WLD"
  },
  {
    "2019": 0.491828866926665,
    "Country Name": "Samoa",
    "Country Code": "WSM"
  },
  {
    "2019": -0.157991508452547,
    "Country Name": "Kosovo",
    "Country Code": "XKX"
  },
  {
    "2019": 2.30058011389449,
    "Country Name": "Yemen, Rep.",
    "Country Code": "YEM"
  },
  {
    "2019": 1.33861739063304,
    "Country Name": "South Africa",
    "Country Code": "ZAF"
  },
  {
    "2019": 2.89237292696711,
    "Country Name": "Zambia",
    "Country Code": "ZMB"
  },
  {
    "2019": 1.41968104561509,
    "Country Name": "Zimbabwe",
    "Country Code": "ZWE"
  }
];


export default growth

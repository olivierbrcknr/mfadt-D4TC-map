const countriesLatLong = [
   {
      "Country":"United Kingdom",
      "Alpha-2 code":"GB",
      "Alpha-3 code":"GBR",
      "Numeric code":826,
      "Latitude (average)":54,
      "Longitude (average)":-2
   },
   {
      "Country":"Ukraine",
      "Alpha-2 code":"UA",
      "Alpha-3 code":"UKR",
      "Numeric code":804,
      "Latitude (average)":49,
      "Longitude (average)":32
   },
   {
      "Country":"Turkey",
      "Alpha-2 code":"TR",
      "Alpha-3 code":"TUR",
      "Numeric code":792,
      "Latitude (average)":39,
      "Longitude (average)":35
   },
   {
      "Country":"Tunisia",
      "Alpha-2 code":"TN",
      "Alpha-3 code":"TUN",
      "Numeric code":788,
      "Latitude (average)":34,
      "Longitude (average)":9
   },
   // {
   //    "Country":"Syrian Arab Republic",
   //    "Alpha-2 code":"SY",
   //    "Alpha-3 code":"SYR",
   //    "Numeric code":760,
   //    "Latitude (average)":35,
   //    "Longitude (average)":38
   // },
   {
      "Country":"Switzerland",
      "Alpha-2 code":"CH",
      "Alpha-3 code":"CHE",
      "Numeric code":756,
      "Latitude (average)":47,
      "Longitude (average)":8
   },
   {
      "Country":"Sweden",
      "Alpha-2 code":"SE",
      "Alpha-3 code":"SWE",
      "Numeric code":752,
      "Latitude (average)":62,
      "Longitude (average)":15
   },
   {
      "Country":"Spain",
      "Alpha-2 code":"ES",
      "Alpha-3 code":"ESP",
      "Numeric code":724,
      "Latitude (average)":40,
      "Longitude (average)":-4
   },
   {
      "Country":"Slovenia",
      "Alpha-2 code":"SI",
      "Alpha-3 code":"SVN",
      "Numeric code":705,
      "Latitude (average)":46,
      "Longitude (average)":15
   },
   {
      "Country":"Slovakia",
      "Alpha-2 code":"SK",
      "Alpha-3 code":"SVK",
      "Numeric code":703,
      "Latitude (average)":48.6667,
      "Longitude (average)":19.5
   },
   {
      "Country":"Serbia",
      "Alpha-2 code":"RS",
      "Alpha-3 code":"SRB",
      "Numeric code":688,
      "Latitude (average)":44,
      "Longitude (average)":21
   },
   {
      "Country":"San Marino",
      "Alpha-2 code":"SM",
      "Alpha-3 code":"SMR",
      "Numeric code":674,
      "Latitude (average)":43.7667,
      "Longitude (average)":12.4167
   },
   {
      "Country":"Romania",
      "Alpha-2 code":"RO",
      "Alpha-3 code":"ROU",
      "Numeric code":642,
      "Latitude (average)":46,
      "Longitude (average)":25
   },
   {
      "Country":"Portugal",
      "Alpha-2 code":"PT",
      "Alpha-3 code":"PRT",
      "Numeric code":620,
      "Latitude (average)":39.5,
      "Longitude (average)":-8
   },
   {
      "Country":"Poland",
      "Alpha-2 code":"PL",
      "Alpha-3 code":"POL",
      "Numeric code":616,
      "Latitude (average)":52,
      "Longitude (average)":20
   },
   // {
   //    "Country":"Palestinian Territory, Occupied",
   //    "Alpha-2 code":"PS",
   //    "Alpha-3 code":"PSE",
   //    "Numeric code":275,
   //    "Latitude (average)":32,
   //    "Longitude (average)":35.25
   // },
   {
      "Country":"Norway",
      "Alpha-2 code":"NO",
      "Alpha-3 code":"NOR",
      "Numeric code":578,
      "Latitude (average)":62,
      "Longitude (average)":10
   },
   {
      "Country":"Netherlands",
      "Alpha-2 code":"NL",
      "Alpha-3 code":"NLD",
      "Numeric code":528,
      "Latitude (average)":52.5,
      "Longitude (average)":5.75
   },
   {
      "Country":"Morocco",
      "Alpha-2 code":"MA",
      "Alpha-3 code":"MAR",
      "Numeric code":504,
      "Latitude (average)":32,
      "Longitude (average)":-5
   },
   {
      "Country":"Montenegro",
      "Alpha-2 code":"ME",
      "Alpha-3 code":"MNE",
      "Numeric code":499,
      "Latitude (average)":42,
      "Longitude (average)":19
   },
   {
      "Country":"Monaco",
      "Alpha-2 code":"MC",
      "Alpha-3 code":"MCO",
      "Numeric code":492,
      "Latitude (average)":43.7333,
      "Longitude (average)":7.4
   },
   {
      "Country":"Moldova, Republic of",
      "Alpha-2 code":"MD",
      "Alpha-3 code":"MDA",
      "Numeric code":498,
      "Latitude (average)":47,
      "Longitude (average)":29
   },
   {
      "Country":"Malta",
      "Alpha-2 code":"MT",
      "Alpha-3 code":"MLT",
      "Numeric code":470,
      "Latitude (average)":35.8333,
      "Longitude (average)":14.5833
   },
   {
      "Country":"Macedonia, the former Yugoslav Republic of",
      "Alpha-2 code":"MK",
      "Alpha-3 code":"MKD",
      "Numeric code":807,
      "Latitude (average)":41.8333,
      "Longitude (average)":22
   },
   {
      "Country":"Luxembourg",
      "Alpha-2 code":"LU",
      "Alpha-3 code":"LUX",
      "Numeric code":442,
      "Latitude (average)":49.75,
      "Longitude (average)":6.1667
   },
   {
      "Country":"Lithuania",
      "Alpha-2 code":"LT",
      "Alpha-3 code":"LTU",
      "Numeric code":440,
      "Latitude (average)":56,
      "Longitude (average)":24
   },
   {
      "Country":"Liechtenstein",
      "Alpha-2 code":"LI",
      "Alpha-3 code":"LIE",
      "Numeric code":438,
      "Latitude (average)":47.1667,
      "Longitude (average)":9.5333
   },
   // {
   //    "Country":"Lebanon",
   //    "Alpha-2 code":"LB",
   //    "Alpha-3 code":"LBN",
   //    "Numeric code":422,
   //    "Latitude (average)":33.8333,
   //    "Longitude (average)":35.8333
   // },
   {
      "Country":"Latvia",
      "Alpha-2 code":"LV",
      "Alpha-3 code":"LVA",
      "Numeric code":428,
      "Latitude (average)":57,
      "Longitude (average)":25
   },
   // {
   //    "Country":"Jordan",
   //    "Alpha-2 code":"JO",
   //    "Alpha-3 code":"JOR",
   //    "Numeric code":400,
   //    "Latitude (average)":31,
   //    "Longitude (average)":36
   // },
   {
      "Country":"Italy",
      "Alpha-2 code":"IT",
      "Alpha-3 code":"ITA",
      "Numeric code":380,
      "Latitude (average)":42.8333,
      "Longitude (average)":12.8333
   },
   // {
   //    "Country":"Israel",
   //    "Alpha-2 code":"IL",
   //    "Alpha-3 code":"ISR",
   //    "Numeric code":376,
   //    "Latitude (average)":31.5,
   //    "Longitude (average)":34.75
   // },
   {
      "Country":"Isle of Man",
      "Alpha-2 code":"IM",
      "Alpha-3 code":"IMN",
      "Numeric code":833,
      "Latitude (average)":54.23,
      "Longitude (average)":-4.55
   },
   {
      "Country":"Ireland",
      "Alpha-2 code":"IE",
      "Alpha-3 code":"IRL",
      "Numeric code":372,
      "Latitude (average)":53,
      "Longitude (average)":-8
   },
   // {
   //    "Country":"Iraq",
   //    "Alpha-2 code":"IQ",
   //    "Alpha-3 code":"IRQ",
   //    "Numeric code":368,
   //    "Latitude (average)":33,
   //    "Longitude (average)":44
   // },
   {
      "Country":"Iceland",
      "Alpha-2 code":"IS",
      "Alpha-3 code":"ISL",
      "Numeric code":352,
      "Latitude (average)":65,
      "Longitude (average)":-18
   },
   {
      "Country":"Hungary",
      "Alpha-2 code":"HU",
      "Alpha-3 code":"HUN",
      "Numeric code":348,
      "Latitude (average)":47,
      "Longitude (average)":20
   },
   {
      "Country":"Greece",
      "Alpha-2 code":"GR",
      "Alpha-3 code":"GRC",
      "Numeric code":300,
      "Latitude (average)":39,
      "Longitude (average)":22
   },
   {
      "Country":"Germany",
      "Alpha-2 code":"DE",
      "Alpha-3 code":"DEU",
      "Numeric code":276,
      "Latitude (average)":51,
      "Longitude (average)":9
   },
   // {
   //    "Country":"Georgia",
   //    "Alpha-2 code":"GE",
   //    "Alpha-3 code":"GEO",
   //    "Numeric code":268,
   //    "Latitude (average)":42,
   //    "Longitude (average)":43.5
   // },
   {
      "Country":"France",
      "Alpha-2 code":"FR",
      "Alpha-3 code":"FRA",
      "Numeric code":250,
      "Latitude (average)":46,
      "Longitude (average)":2
   },
   {
      "Country":"Finland",
      "Alpha-2 code":"FI",
      "Alpha-3 code":"FIN",
      "Numeric code":246,
      "Latitude (average)":64,
      "Longitude (average)":26
   },
   {
      "Country":"Faroe Islands",
      "Alpha-2 code":"FO",
      "Alpha-3 code":"FRO",
      "Numeric code":234,
      "Latitude (average)":62,
      "Longitude (average)":-7
   },
   {
      "Country":"Estonia",
      "Alpha-2 code":"EE",
      "Alpha-3 code":"EST",
      "Numeric code":233,
      "Latitude (average)":59,
      "Longitude (average)":26
   },
   {
      "Country":"Denmark",
      "Alpha-2 code":"DK",
      "Alpha-3 code":"DNK",
      "Numeric code":208,
      "Latitude (average)":56,
      "Longitude (average)":10
   },
   {
      "Country":"Czech Republic",
      "Alpha-2 code":"CZ",
      "Alpha-3 code":"CZE",
      "Numeric code":203,
      "Latitude (average)":49.75,
      "Longitude (average)":15.5
   },
   {
      "Country":"Cyprus",
      "Alpha-2 code":"CY",
      "Alpha-3 code":"CYP",
      "Numeric code":196,
      "Latitude (average)":35,
      "Longitude (average)":33
   },
   {
      "Country":"Croatia",
      "Alpha-2 code":"HR",
      "Alpha-3 code":"HRV",
      "Numeric code":191,
      "Latitude (average)":45.1667,
      "Longitude (average)":15.5
   },
   {
      "Country":"Bulgaria",
      "Alpha-2 code":"BG",
      "Alpha-3 code":"BGR",
      "Numeric code":100,
      "Latitude (average)":43,
      "Longitude (average)":25
   },
   {
      "Country":"Bosnia and Herzegovina",
      "Alpha-2 code":"BA",
      "Alpha-3 code":"BIH",
      "Numeric code":70,
      "Latitude (average)":44,
      "Longitude (average)":18
   },
   {
      "Country":"Belgium",
      "Alpha-2 code":"BE",
      "Alpha-3 code":"BEL",
      "Numeric code":56,
      "Latitude (average)":50.8333,
      "Longitude (average)":4
   },
   {
      "Country":"Belarus",
      "Alpha-2 code":"BY",
      "Alpha-3 code":"BLR",
      "Numeric code":112,
      "Latitude (average)":53,
      "Longitude (average)":28
   },
   {
      "Country":"Austria",
      "Alpha-2 code":"AT",
      "Alpha-3 code":"AUT",
      "Numeric code":40,
      "Latitude (average)":47.3333,
      "Longitude (average)":13.3333
   },
   // {
   //    "Country":"Armenia",
   //    "Alpha-2 code":"AM",
   //    "Alpha-3 code":"ARM",
   //    "Numeric code":51,
   //    "Latitude (average)":40,
   //    "Longitude (average)":45
   // },
   {
      "Country":"Andorra",
      "Alpha-2 code":"AD",
      "Alpha-3 code":"AND",
      "Numeric code":20,
      "Latitude (average)":42.5,
      "Longitude (average)":1.6
   },
   {
      "Country":"Albania",
      "Alpha-2 code":"AL",
      "Alpha-3 code":"ALB",
      "Numeric code":8,
      "Latitude (average)":41,
      "Longitude (average)":20
   }
]

export default countriesLatLong;

import React, { useEffect, useState} from 'react'

import MapCountry from '../MapCountry'
import MapTimeSelector from '../MapTimeSelector'
import MapEqualizerToggle from '../MapEqualizerToggle'

import './Map.css';

import countriesLatLong from '../data/latLong.js'
import totalPopulation from '../data/totalPopulation.js'
import gdp from '../data/gdp.js'
import refugeesInCountry from '../data/refugee.js'


const europLngMin = -28;
const europLngMax = 46;
const europLatMin = 30;
const europLatMax = 72.1;

const possibleTimes = [2015,2016,2017,2018,2019,2025];

const DataVizMap = (props) => {

  const [mapState,setMapState] = useState({
    year: possibleTimes[0],
    isEqualized: false
  });

  useEffect(()=>{
    console.log(mapState)
  },[mapState])

  let classes = ['DataVizMap'];

  let dataPoints = countriesLatLong.map( (country,index)=>{

    if( europLatMin < country["Latitude (average)"] && country["Latitude (average)"] < europLatMax ){
      if( europLngMin < country["Longitude (average)"] && country["Longitude (average)"] < europLngMax ){
        // console.log( country["Country"] )

        let countryCode = country["Alpha-3 code"];

        const totalPopCountryElement = totalPopulation.find(element => (
          element["Country Code"] === countryCode
        ));
        const gdpElement = gdp.find(element => (
          element["Country Code"] === countryCode
        ));
        const refugeeElement = refugeesInCountry.find(element => (
          element["Country Code"] === countryCode
        ));

        let totalPopCountry = 0;
        let countryGDP = 0;
        let acceptedRefugees = 0;

        if(totalPopCountryElement){
          totalPopCountry = totalPopCountryElement[mapState.year];
        }
        if(gdpElement){
          countryGDP = gdpElement[mapState.year];
        }
        if(refugeeElement){
          acceptedRefugees = refugeeElement[mapState.year];
        }

        return <MapCountry
          totalPopulation={totalPopCountry}
          gdp={countryGDP}
          key={countryCode}
          year={mapState.year}
          refugees={acceptedRefugees}
          countryInfo={country}
          latLongVals={[europLngMin,europLngMax,europLatMin,europLatMax]} />;
      }
    }
  });


  return (
    <div className={classes.join(' ')}>

      <div className="DataVizMap-Map">

        <img className="DataVizMap-BG" src="/mapOfEurope-Mercator.svg" />

        {dataPoints}

        <div className="DataVizMap-SizeLabel">
          <div className="DataVizMap-SizeLabel-Number">
            500km
          </div>
          <div className="DataVizMap-SizeLabel-Length"></div>
        </div>

     </div>

     <MapTimeSelector
      possibleTimes={possibleTimes}
      selection={mapState.year}
      callback={(y) => setMapState({...mapState,year: y}) } />

    <MapEqualizerToggle
      toggleState={mapState.isEqualized}
      callback={(e) => setMapState({...mapState,isEqualized: e}) } />

    </div>
  )
}

export default DataVizMap

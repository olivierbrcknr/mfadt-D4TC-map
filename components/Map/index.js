import React, { useEffect, useState} from 'react'

import MapCountry from '../MapCountry'
import MapTimeSelector from '../MapTimeSelector'
import MapEqualizerToggle from '../MapEqualizerToggle'

import './Map.css';

import counties from './latLong.js'


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

  let dataPoints = counties.map( (country,index)=>{

    if( europLatMin < country["Latitude (average)"] && country["Latitude (average)"] < europLatMax ){
      if( europLngMin < country["Longitude (average)"] && country["Longitude (average)"] < europLngMax ){
        // console.log( country["Country"] )
        return <MapCountry
          key={country["Alpha-3 code"]}
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

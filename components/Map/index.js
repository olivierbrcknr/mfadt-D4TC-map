import React, { useEffect, useState} from 'react'

import MapCountry from '../MapCountry'
import MapTimeSelector from '../MapTimeSelector'
import MapEqualizerToggle from '../MapEqualizerToggle'
import MapLegend from '../MapLegend'

import './Map.css';

import countriesLatLong from '../data/latLongEUonly.js'
import totalPopulation from '../data/totalPopulation.js'
import gdp from '../data/gdp.js'
import refugeesInCountry from '../data/refugee.js'
import growth from '../data/growth.js'
import gdpGrowth from '../data/gdpGrowth.js'


const europLngMin = -28;
const europLngMax = 46;
const europLatMin = 30;
const europLatMax = 72.1;

const possibleTimes = [2015,2016,2017,2018,2019,2025];
const yearsInTheFuture = 2025 - 2019;

const DataVizMap = (props) => {

  const [mapState,setMapState] = useState({
    year: possibleTimes[0],
    isEqualized: false
  });

  let handleKeyPress = (e) => {

    let yearIndex = possibleTimes.indexOf(mapState.year);

    switch (e.key){
      case 'd':
      case 'D':
        setMapState({
          ...mapState,
          isEqualized: !mapState.isEqualized
        })
        break;
      case 'ArrowLeft':
        yearIndex--;
        if( yearIndex < 0 ){
          yearIndex = 0;
        }
        setMapState({
          ...mapState,
          year: possibleTimes[yearIndex]
        })
        break;
      case 'ArrowRight':
        yearIndex++;
        if( yearIndex > possibleTimes.length-1 ){
          yearIndex = possibleTimes.length-1;
        }
        setMapState({
          ...mapState,
          year: possibleTimes[yearIndex]
        })
        break;
    }
  }

  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
    return() => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  },[mapState]);

  let classes = ['DataVizMap'];

  let totalPopulationEU = 0;
  let totalRefugeesEU = 0;
  let totalGDPEU = 0;

  for( let i = 0; i < countriesLatLong.length; i++ ){

    let countryCode = countriesLatLong[i]["Alpha-3 code"];
    let totalPopCountry = 0;
    let acceptedRefugees = 0;
    let countryGDP = 0;

    const totalPopCountryElement = totalPopulation.find(element => (
      element["Country Code"] === countryCode
    ));
    const refugeeElement = refugeesInCountry.find(element => (
      element["Country Code"] === countryCode
    ));
    const gdpElement = gdp.find(element => (
      element["Country Code"] === countryCode
    ));

    if(totalPopCountryElement){
      if( mapState.year === 2025 ){

        let growthFactor = growth.find(element => (
          element["Country Code"] === countryCode
        ));
        growthFactor = growthFactor['2019'] / 100 + 1;
        totalPopCountry = totalPopCountryElement[2019] * Math.pow( growthFactor , yearsInTheFuture );

      }else{
        totalPopCountry = totalPopCountryElement[mapState.year];
      }
    }
    if(gdpElement){
      if( mapState.year === 2025 ){

        let growthFactor = gdpGrowth.find(element => (
          element["Country Code"] === countryCode
        ));

        let averageGDPGrowth = 0;
        let allGDPPoints = 0;
        // create average of gdpGrowth
        for( let i = 0; i < 5; i++ ){
          if( growthFactor[(2015+i).toString()] ){
            averageGDPGrowth+=growthFactor[(2015+i).toString()];
            allGDPPoints++;
          }
        }

        averageGDPGrowth = (averageGDPGrowth / allGDPPoints) / 100 + 1;

        countryGDP = gdpElement[2019] * Math.pow( averageGDPGrowth , yearsInTheFuture );

      }else{
        countryGDP = gdpElement[mapState.year];
      }
    }
    if(refugeeElement){
      if( mapState.year === 2025 ){
        acceptedRefugees = refugeeElement[2019] * Math.pow( 1.05 , yearsInTheFuture );
      }else{
        acceptedRefugees = refugeeElement[mapState.year];
      }
    }

    totalPopulationEU += parseInt(totalPopCountry);
    if(acceptedRefugees){
      totalRefugeesEU += parseInt(acceptedRefugees);
    }
    if(countryGDP){
      totalGDPEU += parseInt(countryGDP);
    }
  }

  // if(mapState.year === 2025){
  //   totalRefugeesEU += 2000000; // add 2 mio from lebanon etc
  // }

  // let allEUCountries = [];
  let dataPoints = countriesLatLong.map( (country,index)=>{

    // if( europLatMin < country["Latitude (average)"] && country["Latitude (average)"] < europLatMax ){
      // if( europLngMin < country["Longitude (average)"] && country["Longitude (average)"] < europLngMax ){
        // console.log( country["Country"] )

        // allEUCountries.push(country)

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
          if( mapState.year === 2025 ){

            let growthFactor = growth.find(element => (
              element["Country Code"] === countryCode
            ));
            growthFactor = growthFactor['2019'] / 100 + 1;
            totalPopCountry = totalPopCountryElement[2019] * Math.pow( growthFactor , yearsInTheFuture );

          }else{
            totalPopCountry = totalPopCountryElement[mapState.year];
          }
        }
        if(gdpElement){
          if( mapState.year === 2025 ){

            let growthFactor = gdpGrowth.find(element => (
              element["Country Code"] === countryCode
            ));

            let averageGDPGrowth = 0;
            let allGDPPoints = 0;
            // create average of gdpGrowth
            for( let i = 0; i < 5; i++ ){
              if( growthFactor[(2015+i).toString()] ){
                averageGDPGrowth+=growthFactor[(2015+i).toString()];
                allGDPPoints++;
              }
            }

            averageGDPGrowth = (averageGDPGrowth / allGDPPoints) / 100 + 1;

            countryGDP = gdpElement[2019] * Math.pow( averageGDPGrowth , yearsInTheFuture );

          }else{
            countryGDP = gdpElement[mapState.year];
          }
        }
        if(refugeeElement){
          if( mapState.year === 2025 ){
            acceptedRefugees = refugeeElement[2019] * Math.pow( 1.05 , yearsInTheFuture );
          }else{
            acceptedRefugees = refugeeElement[mapState.year];
          }
        }

        return <MapCountry
          totalPopulation={totalPopCountry}
          gdp={countryGDP}
          key={countryCode}
          year={mapState.year}
          refugees={acceptedRefugees}
          countryInfo={country}
          isEqualized={mapState.isEqualized}
          EUtotalPop={totalPopulationEU}
          EUtotalRefugee={totalRefugeesEU}
          EUtotalGDP={totalGDPEU}
          latLongVals={[europLngMin,europLngMax,europLatMin,europLatMax]} />;
    //   }
    // }
  });


  // let printEUCOuntries = '[';
  // for (var i = allEUCountries.length - 1; i >= 0; i--) {
  //   printEUCOuntries += JSON.stringify(allEUCountries[i]) + ',';
  // }
  // printEUCOuntries+=']';
  // console.log(printEUCOuntries)

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

        <img className="DataVizMap-NorthIndicator" src="/northarrow.svg" />

      </div>

      <MapTimeSelector
      possibleTimes={possibleTimes}
      selection={mapState.year}
      callback={(y) => setMapState({...mapState,year: y}) } />

      <MapEqualizerToggle
      toggleState={mapState.isEqualized}
      callback={(e) => setMapState({...mapState,isEqualized: e}) } />

      <MapLegend />

    </div>
  )
}

export default DataVizMap

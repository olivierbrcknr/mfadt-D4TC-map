import React from 'react'

import './Key.css';

import {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas} from '../utils'


const MapKey = (props) => {

  let classes = ['MapKey'];

  return (
    <div className={classes.join(' ')}>

      <h4>
        Key
      </h4>

      <div className="MapKey-Point">

        <div className="MapKey-Point-Viz">

          <div className="MapKey-Point-Viz-Country MapKey-Point-Viz-Country-Size">
          </div>

        </div>

        <div className="MapKey-Point-Desc">
          <p>
            The <b>size</b> represents the population
          </p>
          <p>
            The <b>biggest</b> size is approx. <b>80 mio</b>, the <b>smallest</b> size is approx. <b>2 mio</b>. Lower numbers will be displayed the same.
          </p>
        </div>

      </div>

      <div className="MapKey-Point">

        <div className="MapKey-Point-Viz">

          <div className="MapKey-Point-Viz-Country MapKey-Point-Viz-Country-Color">
          </div>

        </div>

        <div className="MapKey-Point-Desc">
          <p>
            The <b>color</b> inidcates the % of refugees relative to the population
          </p>
          <p>
            <b style={{'color': '#0085FF'}}>blue</b> is approx. <b>2%</b>, <b style={{'color': '#FF0000'}}>red</b> is approx. <b>6%</b>
          </p>

        </div>

      </div>

      <h4>
        Usage
      </h4>

      <div className="MapKey-Point MapKey-PointUsage">
        <div className="MapKey-Point-Viz">
          <img src="/cursor.svg" />
        </div>
        <div className="MapKey-Point-Desc">
          <p>
            Hover over a country to see the details
          </p>
        </div>
      </div>

      <div className="MapKey-Point MapKey-PointUsage">
        <div className="MapKey-Point-Viz">
          <div className="MapKey-Point-Viz-Button">
            →
          </div>
        </div>
        <div className="MapKey-Point-Desc">
          <p>
            The right arrow key increases the year
          </p>
        </div>
      </div>

      <div className="MapKey-Point MapKey-PointUsage">
        <div className="MapKey-Point-Viz">
          <div className="MapKey-Point-Viz-Button">
            ←
          </div>
        </div>
        <div className="MapKey-Point-Desc">
          <p>
            The left arrow key decreases the year
          </p>
        </div>
      </div>

      <div className="MapKey-Point MapKey-PointUsage">
        <div className="MapKey-Point-Viz">
          <div className="MapKey-Point-Viz-Button">
            D
          </div>
        </div>
        <div className="MapKey-Point-Desc">
          <p>
            The D key toggles between the distributions
          </p>
        </div>
      </div>


      <h4>
        Calculation — Adjusted Distribution
      </h4>

      <p>
        Refugees per Country = Total Number of Refugees × GDP ÷ Total GDP
      </p>

      <h4>
        Calculation — Estimation 2025
      </h4>

      <p>
        <b>GDP</b> = GDP in 2019 × Average GDP Growth of Country ^ 6 Years
      </p>
      <p>
        <b>Population</b> = Population in 2019 × Population Growth of Country in 2019 ^ 6 Years
      </p>
      <p>
        <b>Refugees</b> = Number of Refugees in 2019 × approx. Average Growth of Asylum Allocation ^ 6 Years
      </p>


    </div>
  )
}

export default MapKey

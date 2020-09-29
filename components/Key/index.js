import React from 'react'

import './Key.css';

import {latLongToPixelMercartor,mapValues,colorMixer,numberWithCommas} from '../utils'


const MapKey = (props) => {

  let classes = ['MapKey'];

  return (
    <div className={classes.join(' ')}>

      <div>
        Size = Population
      </div>

      <div>
        Color = refugees in Country * PPP / EU total GDP
      </div>

    </div>
  )
}

export default MapKey

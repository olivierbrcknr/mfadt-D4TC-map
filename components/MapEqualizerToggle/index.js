import React from 'react'

import './MapEqualizerToggle.css';

const MapEqualizerToggle = (props) => {

  let classes = ['MapEqualizerToggle'];

  return (
    <ul className={classes.join(' ')} onClick={ () => props.callback(!props.toggleState) }>

      <li className={( !props.toggleState ? '--isToggled' : '')}>
        actual distribution
      </li>
      <li className={( props.toggleState ? '--isToggled' : '')}>
        even distribution
      </li>
    </ul>
  )
}

export default MapEqualizerToggle

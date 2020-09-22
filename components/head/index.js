import React, {useState, useEffect} from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

// CSS
import "./reset.css"
import "./variables.css"
import "./index.css"

const Head = props => {

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* IBM Plex
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,600;1,400&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />*/}

      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;1,400;1,500&display=swap" rel="stylesheet" />


    </NextHead>
  )
}

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head

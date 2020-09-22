// React
import React, { useEffect, useState, useRef } from 'react'

// Components
import Head from '../components/head'
import Footer from '../components/footer'

import DataVizMap from '../components/Map'

import sourceList from '../components/data/sources.js'

const Home = () => {

  let classes = ['home'];


  let sources = sourceList.map( (source, index) => {

    // Eurostat (2020). Asylum statistics [dataset]. Accessed on September 20th, 2020 at ec.europa.eu/eurostat/statistics-explained/index.php/Asylum_statistics

    let sourceType = ( source.type ? ' ['+source.type+']' : null);
    let sourceDate = source.accessed; // needs to be adapted

    return(
      <li key={'source-'+index}>
        {source.author} ({source.year}). <i>{source.title}</i>{sourceType}. Accessed on {sourceDate} at <a href={source.link}>{source.link}</a>

      </li>
    )
  });


  return (
    <div className={classes.join(' ')}>

      <Head title="Home" date="" />

      <div id="wrapepr">

        <section className="essay">

          <article>

            <h1>
              The Refugee Crisis In Europe
            </h1>
            <h4>
              by <a href="https://olivierbrueckner.de/">Olivier Brückner</a>, October 12th, 2020
            </h4>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet magna cursus, semper tortor at, hendrerit tortor. Nunc vulputate dapibus quam, sit amet vulputate dolor mattis a. Aliquam ipsum arcu, viverra a arcu vitae, luctus dapibus mauris. Donec pharetra convallis massa. Phasellus facilisis faucibus rutrum. Duis ultrices sit amet dui id convallis. Pellentesque quis ipsum semper lectus auctor porttitor. Vestibulum commodo efficitur scelerisque. Proin at elit sit amet nulla condimentum sagittis. Donec finibus, dui ac tincidunt bibendum, risus sem vulputate mauris, vel maximus lorem mauris vitae urna.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet magna cursus, semper tortor at, hendrerit tortor. Nunc vulputate dapibus quam, sit amet vulputate dolor mattis a. Aliquam ipsum arcu, viverra a arcu vitae, luctus dapibus mauris. Donec pharetra convallis massa. Phasellus facilisis faucibus rutrum. Duis ultrices sit amet dui id convallis. Pellentesque quis ipsum semper lectus auctor porttitor. Vestibulum commodo efficitur scelerisque. Proin at elit sit amet nulla condimentum sagittis. Donec finibus, dui ac tincidunt bibendum, risus sem vulputate mauris, vel maximus lorem mauris vitae urna.
            </p>

            <div className="key">
              {/* Key */}
            </div>

            <ul className="sourceList">
              {sources}
            </ul>

            <Footer />

          </article>

        </section>

        <DataVizMap />

       </div>

    </div>
  )
}

export default Home

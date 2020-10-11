// React
import React, { useEffect, useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

// Components
import Head from '../components/head'
import Footer from '../components/footer'

import DataVizMap from '../components/Map'
import MapKey from '../components/Key'

import sourceList from '../components/data/sources.js'
import description from '../components/data/description.md'

const Home = () => {

  let classes = ['home'];

  const [showInfo,setShowInfo] = useState(false);


  let sources = sourceList.map( (source, index) => {

    // Eurostat (2020). Asylum statistics [dataset]. Accessed on September 20th, 2020 at ec.europa.eu/eurostat/statistics-explained/index.php/Asylum_statistics

    let sourceType = ( source.type ? ' ['+source.type+']' : null);
    let sourceDate = source.accessed; // needs to be adapted
    let sourcePublisher = (source.publisher ? ', '+source.publisher : null);

    return(
      <li key={'source-'+index}>
        <a href={source.link}>
          {source.author} ({source.year}). <i>{source.title}</i>{sourceType}{sourcePublisher}. Accessed on {sourceDate} at <span className="sourceList-pseudoLink">{source.link}</span>
         </a>
      </li>
    )
  });


  if( showInfo ){
    classes.push('--isShowingInfo');
  }

  let SourceRenderer = (props) => {

    let idToSearch = parseInt(props.children);
    let source = sourceList.find( element => element.ID === idToSearch );
    let author = source.author.split(',')[0];
    let date = source.year.toString().substring(0, 4);

    return <a href={source.link} className="description-source">({author} {date})</a>
  }

  return (
    <div className={classes.join(' ')}>

      <Head title="The Refugee Crisis In Europe" date="" />

      <div id="wrapper">

        <DataVizMap />

        <section className="essay">

          <article>

            <h1>
              The Refugee Crisis In Europe
            </h1>
            <h4>
              by <a href="https://olivierbrueckner.de/">Olivier Brückner</a>, October 12th, 2020
            </h4>

            <div className="description">
              <ReactMarkdown
                renderers={{
                  inlineCode: SourceRenderer
                }}
                source={description} />
            </div>

            <MapKey />

            <ul className="sourceList">
              {sources}
            </ul>

            <div className="gitHub">
              → see the <a href="https://github.com/olivierbrcknr/mfadt-D4TC-map">source code at GitHub</a>
            </div>

          </article>

        </section>

       </div>

    </div>
  )
}

export default Home

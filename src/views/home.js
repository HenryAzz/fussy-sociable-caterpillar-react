import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import LilHome from '../components/lil-home'
import MediumHome from '../components/medium-home'
import AppComponent from '../components/component'
import BigText from '../components/big-text'
import SobreMiSkills from '../components/sobre-mi-skills'
import Metodologia from '../components/metodologia'
import ContactoFinal2 from '../components/contacto-final2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fussy Sociable Caterpillar</title>
        <meta property="og:title" content="Fussy Sociable Caterpillar" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <LilHome rootClassName="lil-home-root-class-name"></LilHome>
      <MediumHome rootClassName="medium-home-root-class-name"></MediumHome>
      <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
      {/* <BigText rootClassName="big-text-root-class-name"></BigText> */}
      <SobreMiSkills rootClassName="sobre-mi-skills-root-class-name"></SobreMiSkills>
      <Metodologia rootClassName="metodologia-root-class-name"></Metodologia>
      <ContactoFinal2 rootClassName="contacto-final2-root-class-name1"></ContactoFinal2>
    </div>
  )
}

export default Home

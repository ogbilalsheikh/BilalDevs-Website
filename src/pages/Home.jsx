import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import HomeCalculator from '../components/HomeCalculator'
import ProcessHome from '../components/ProcessHome'
import AboutHome from '../components/AboutHome'
import ContactHome from '../components/ContactHome'
import Footer from '../components/Footer'

const Home = () => {
  return (
  <>
    <HomeHero />
    <HomeServices />
    <HomeCalculator />
    <ProcessHome />
    <AboutHome />
    <ContactHome />
    <Footer />
    </>
  )
}

export default Home
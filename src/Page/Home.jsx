import React from 'react'
import Nav from "../Component/Nav"
import Hero1 from '../Component/Hero1'
import Marquservice from '../Component/Marquservice'
import WhyChooseUs from '../Component/Why'
import Servicearc from '../Component/Servicearc'
import Process from '../Component/Process'
import Clientlogo from '../Component/Clientlogo'
import Footer from "../Component/Footer"
import Project from '../Component/Project'
import Testnomial from '../Component/Testnomial'

function Home() {


  return (
  <>
  <Nav />
  <Hero1 />
  <Marquservice />
  
  <WhyChooseUs />
  <Servicearc />
  <Process />
  <Project />
  <Clientlogo />
  <Testnomial />
  <Footer />
  
  </>
  )
}

export default Home
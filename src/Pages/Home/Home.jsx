import React from 'react'
import SliderHome from '../../Components/SliderHome';
import About from '../../Components/about';
import Services from '../../Components/Services.jsx';
export const Home = () => {
  return (
    <div>
        <SliderHome />
        <About/>
        <Services/>
    </div>
  )
}
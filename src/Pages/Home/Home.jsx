import React from 'react'
import SliderHome from '../../Components/SliderHome';
import About from '../../Components/about';
import Features from '../../Components/features';
export const Home = () => {
  return (
    <div>
        <SliderHome />
        <Features/>
        <About/>
    </div>
  )
}
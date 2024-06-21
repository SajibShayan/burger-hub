'use client';
import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Feature from '../components/Features/Feature'
import PopularBurger from '../components/PopularBurger/PopularBurger'
import Delivery from '../components/Delivery/Delivery'
import Team from '../components/Team/Team'
import Reservation from '../components/Reservation/Reservation'
import NewsLetter from '../components/NewsLetter/NewsLetter'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjusted to make animations more noticeable
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-center',
    });
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Feature />
      <PopularBurger />
      <Delivery />
      <Team />
      <Reservation />
      <NewsLetter />
    </div>
  )
}

export default Home
import React from 'react'
import R003Tabs from '../components/R003Tabs'
import R004Carousel from '../components/R004Carousel'

function Home() {
  return (
    <>
      <R003Tabs></R003Tabs>
      <div className='container'>
        <R004Carousel></R004Carousel>
      </div>      
    </>
  )
}

export default Home
 import React from 'react'
import Swiper from 'react-id-swiper';

import ReactPlayer from 'react-player'
import DocterDetails from '../DocterDetails/DocterDetails'
import  './Banner.css'

const Banner= () =>{
 
  
    const params = {
      spaceBetween: 30,
      centeredSlides: true,
      direction: 'vertical',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
  

  return (
        <div className='banner'>
            <div className='posters'>
            <ReactPlayer 
            playing
            loop
            unMuted
            
            config={{
              file: {
                attributes: {
                  preload: "auto",
                },
              },
            }}
             className='react-player' 
             url={['https://youtu.be/5E9TRuZ0mPs',
            ' https://youtu.be/U8r3oTVMtQ0' ]}/>
           
            </div>
           
 
        <div className="slide-profile">
        <Swiper {...params}>
        <div><DocterDetails/></div>
        <div><DocterDetails/></div>
        <div><DocterDetails/></div>
        <div><DocterDetails/></div>
        <div><DocterDetails/></div>
      </Swiper>
    
  

    </div>
       
                
        </div>
    
    )
  }  
     

export default Banner

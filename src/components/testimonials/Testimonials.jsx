import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/scaler.png'
import AVTR2 from '../../assets/leetcode.png'
import AVTR3 from '../../assets/gfg.png'
import AVTR4 from '../../assets/codeforces.png'

import { Pagination ,Nagi , Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const data = [
  {
    avatar:AVTR1,
    name: 'Scaler Academy',
    link:'https://www.scaler.com/academy/profile/154cc3f0af73/',
    review:'Attended Fullstack Dev Program . Solved 300+ DSA problems . Learned OOPS , DBMS , OS and computer science fundamentals   '

  },

]






const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <h5>Slide to tee more</h5> */}
      <h2>Profiles</h2>
      
      <Swiper className='container testimonials__container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        


        {data.map(({avatar , name ,link ,  review} , index)=>{
          
          return(
              <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar} alt ='avatar'></img>
              </div>
              <h3 className='client__name'><a href= {link}  target='_blank'>{name}</a></h3>
              <small className='client__review'>
                  {review}
              </small>
            </SwiperSlide>
          )


        } 
        )}



      </Swiper>
    
    
    </section>
  )
}

export default Testimonials







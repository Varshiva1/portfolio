import React from 'react'
import './about.css'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import '../../index.css'


const About = () => {
  return (
    <section id='about'>

      <h5>Get to know</h5>
      <h2>About Me</h2>


      <div className='container about__container'>



        <div className='about__content'>
          <div className='about__cards'>
            
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0.5+ Years Working Experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Companies</h5>
              <small>Ijrdo Journal , Abhiwan Technology Private Limited</small>
            </article>


            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3 Complete Projects</small>            
            </article>
          </div>

          <br>
          </br>

          <h1>My key qualities</h1>

          <br></br>
          <p>

            
            Can handle multiple tasks on a daily basis , have
            creative approach to problem solving.
             I am a dependable person who is great at time management.
             and always energetic and eager to learn new skills.
              I have experience working as part of a team and individually and
              , flexible in my working hours, being able to work evenings and weekends.
              I am always on time for organized events, work-related or otherwise.
              Even though I take my work seriously, I do have a good sense of humour.

                      
          
          </p>
          <br></br>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


        </div>

      </div>


    </section>
  )
}

export default About
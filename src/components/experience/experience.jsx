import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I have</h5>
      <h2>My Expertise</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'>
            <h3>Frontend Developement</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>

                <div>                
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>React</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>


              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small></div>
                

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div><h4>Tailwind CSS</h4>
                <small className='text-light'>Intermediate</small></div>
                

              </article>

            </div>
        </div>

        <div className='experience__backend'>
        <h3>Backend Developement</h3>
            <div className='experience__content'>
              
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>NodeJs</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>ExpressJs</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>Rust</h4>
                <small className='text-light'>Basic</small></div>

              </article>
              

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                
                <div>                
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small></div>

              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>AWS Lambda And Dynamo DB</h4>
                <small className='text-light'>Basic</small></div>           
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div><h4>Jest</h4>
                <small className='text-light'>Basic</small></div>           
              </article>
            

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>CS Fundamentals (DSA , OOPS)</h4>
                <small className='text-light'>Basic</small>
                </div>
                </article>

            </div>

        </div>


      </div>

    </section>
  )
}

export default experience
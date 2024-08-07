import './services.css'
import React from 'react'

import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>

      <h5>Academics - Experience - Certificates</h5>
      <h2>My Journey</h2>

      <div className='container services__container'>
        
        {/* ACADEMICS */}
        <article className='service'>
          <div className='service_head'>
            <h3>Academics</h3>
          </div>
        
          <ul className='service_list'>
            <li>
          
              <p className='service_decription'>High School -  DAV Public School Patna(2010)</p>

              <ol className='service_list-items'>
                <li>1. CGPA - 9.4</li>
                <li>2. Board - CBSE</li>
              </ol>

            </li>
            
            <li>
     
              <p className='service_decription'  >Senior Secondry School - DAV Public School Patna(2012)</p>
              <ol className='service_list-items'>
                <li>1. Percentage - 71.8</li>
                <li>2. Board - CBSE</li>
              </ol>

            </li>
            
            <li>
            
              <p className='service_decription' >Graduate Degree - GL Bajaj Institute Of technology and Management</p>
              
              <ol className='service_list-items'>
                <li>1. Branch - Civil Engineering </li>
                <li>2. Percentage - 66.12 %</li>
               
              </ol>


            </li>
          </ul>
        </article>
        {/*END OF ACADEMICS*/}


        {/* EXPERIENCE */}
        <article className='service'>
          <div className='service_head'>
            <h3>Experience</h3>
          </div>
        
          <ul className='service_list'>

          <li>
              <p className='service_decription' >Thinkscoop Technology</p>
              <li> October 2023 - january 2024</li>
              <li>Full Stack Developer</li>
                <ol className='service_list-items'>
                  <li>1.Spearheaded the upgrade of a flight booking platform, transitioning from a mobile app to a web app, to enhance accessibility and provide a seamless user experience across devices.</li>
                  <li>2.Developed an RESTful APIs for fetching real-time flight details, airlines, and airport information by integrating Amadeus, Airtable, and MongoDB, enhancing data accessibility and accuracy</li>
                  <li>3.Developed robust Jest test suites for API endpoints, ensuring comprehensive coverage and reliability.</li>
                  <li>4.Utilized MongoDB for scalable and robust data storage, improving data processing speed by 30% and ensuring reliable flight details retrieval.</li>
                </ol>
            </li>


          <li>
              <p className='service_decription' >IJRDO journal</p>
              <li> March 2022 - September 2023</li>
              <li>Backend Developer</li>
              {/* <li>Description</li> */}
                <ol className='service_list-items'>
                  <li>1. Design and implementation of RESTful APIs to support the front-end applications</li>
                  <li>2. Writing server-side code in Node.js and Lambda to create a robust and scalable back-end architecture Using AWS</li>
                  <li>3.Participating in code reviews to improve the quality and maintainability of the codebase</li>
                </ol>
            </li>
           

            <li>
             
              <p className='service_decription'>THE HOLISTIC GROUP</p>
              <li>Nov 2021 - Dec 2021</li>
              <li>Full Stack Developer trainee</li>
              {/* <li>Description</li> */}
                <ol className='service_list-items'>
               <li>Creating APIs using NODEJS, MongoDB using Express </li>
                   
                </ol>

            </li>
             

          </ul>
        </article>
        {/*END OF EXPERIENCE*/}

        {/* CERTIFICATES */}
        <article className='service'>
          <div className='service_head'>
            <h3>Cerificates</h3>
          </div>
        
          <ul className='service_list'>
          <li>
            
              <p  className='service_decription' >Scaler Academy - Full Stack Developement Program</p>
              <li>Duration  -  April 2022 - Present</li>
              
              <li>Description</li>
                <ol className='service_list-items'>
                  <li>1. Course Work - OOPS , DSA , Java Core  </li>
                  <li>2. Solved more than 300 DSA problems on the platform</li>
                 <li>3. Learning Fundamentals of Spring Framework</li>
                  <li>4. Passed Expert Mock interviews on Adnanced DSA and CS Fundamentals taken by Industry Experts</li>
                </ol>

            </li>

          </ul>
        </article>
        {/*END OF CERTIFICATES*/}



      </div>

    </section>
  )
}

export default Services
import './portfolio.css' 
import React from 'react'
import IMG1 from '../../assets/notesapp.png'
import IMG2 from '../../assets/NewsApp.png'
import IMG3 from '../../assets/project-sample.png'
import IMG4 from '../../assets/project-sample.png'




const data = [

  {
    id: 1,
    image : IMG1 , 
    title:'notes-app', 
    title2:'NOTES-APP',
    github : 'https://github.com/Varshiva1/notes-app',
    demo: 'https://notessappp.netlify.app/'

  },


  {
    id: 2,
    image : IMG2 ,
    title:'News App', 
    title2:'NewsApp',
    github : 'https://github.com/Varshiva1/news-app',
    demo: 'https://newssapp.netlify.app/'

  },
  
  {
    id: 3,
    image : IMG3 , 
    title:'Decor App',
    title2:'Decor- A complete Home Solution',
    github : 'https://github.com/Varshiva1/Decor--A-complete-home-solution',
    demo: 'https://decorrr.netlify.app/#'

  },
 
]


function Portfolio() {
  return (
    <section id='portfolio'>

      <h5>My Projects and Profiles</h5>
      <h2>Portfolio</h2>


      <div className='container portfolio__container'>

      
        {
          data.map(({id, image , title , title2 , github , demo})=>{

            return(

              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={IMG4}/>
              </div>
              <h3>{title}</h3>
              <h2>{title2}</h2>
    
              <div className="portfolio__item-cta">
                <a href={demo} target='_blank' className='btn'>See Live</a>
                <a href= {github} target='_blank' className='btn btn-primary'>Source Code</a>
              </div>
    
                
              </article>

            )

          })
        }
          

      </div>


    </section>
  )
}





export default Portfolio
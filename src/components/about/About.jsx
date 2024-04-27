import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Info from './Info'


const About = () => {
  return (
    <section className="about section">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction </span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className= "about__img" />

            <div className="about_data">

                <Info />

                <p className="about__description">
                    Frontend developer, I create web pages with react , I have years of experience and many clients are happy with the projects carried out.
                </p>
            </div>



        </div>
        
    </section>
  )
}

export default About
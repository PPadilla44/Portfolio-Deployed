import React from "react";
import me from '../assets/me-boxed.jpg';
import './About.css';
import Resume from "../assets/Pablo.Padilla.Resume.pdf";
import { Link } from 'react-scroll';


const About = (props) => {


    return (
        <section className="section" name="about">
            <div className="main">  
                <div className="top-content">
                    <img className="about-me" src={me} alt="its a me" />
                    <div className="contents">
                        <div className="fullstack">
                            <h1>Pablo Padilla</h1>
                            <h3>Full Stack Engineer</h3>
                        </div>
                        <div className="buttons">
                            <Link to="contact" className="option" spy={true} smooth={true}>
                                    <h3>Contact</h3>
                            </Link>
                            <Link to="projects" className="option" spy={true} smooth={true}>
                                    <h3>Projects</h3>
                            </Link>
                            <a href={Resume} target='_blank' className="option" rel='noopener noreferrer'>
                                <h3>Resume</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-content">
                    <h3>I am a Committed and enthusiastic full-stack software engineer proficient in a variety of
                    programming languages with experience in all levels of creating a web application including
                    deployment and maintenance on cloud computing platforms.</h3>
                </div>
            </div>
        </section>
    )
}
export default About;
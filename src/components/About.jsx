import React from "react";
import './About.css';
import { Link } from 'react-scroll';


const About = (props) => {


    return (
        <div id="hero">
            <section className="section" name="about">
                <div className="main">

                    <div className="fullstack">
                        <h1>Pablo Padilla</h1>
                        <h3>Full Stack Engineer</h3>
                    </div>
                    <div className="buttons">
                        <Link to="projects" className="option" spy={true} smooth={true}>
                            <h3>Projects</h3>
                        </Link>
                        <a href="https://drive.google.com/file/d/1_KuQOLixYHB2WoC7q4yHZ2I3Ftza7l5q/view" target='_blank' className="option" rel='noopener noreferrer'>
                            <h3>Resume</h3>
                        </a>
                        <a rel="noopener noreferrer" id="about-contact" className="option" href={"mailto:padilla.pablo1998@gmail.com"} target="_blank" >
                            <h3>Contact</h3>
                        </a>
                    </div>
                    <div className="text-content">
                        <h3>
                            I am a committed and enthusiastic full-stack engineer proficient in various
                            programming languages. I am experienced in all levels of web application
                            development, including deployment and maintenance on cloud computing platforms.
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;
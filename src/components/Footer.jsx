import React from "react";
import './Footer.css';
import { NavData } from "./NavData";
import { Link } from 'react-scroll';



const Footer = (props) => {



    return (
        <section>
            <div className="foot-main">
                <div className="foot-nav">
                    {
                        NavData.map((item, index) => {
                            return (
                                item.title === "Resume"
                                    ?
                                    <a key={index} href="https://drive.google.com/file/d/1_KuQOLixYHB2WoC7q4yHZ2I3Ftza7l5q/view" className="foot-item" target='_blank' rel='noopener noreferrer'>
                                        <h5 style={{ caretColor: "rgba(0,0,0,0)" }}>{item.title}</h5>
                                    </a>
                                    :
                                    <Link key={index} to={item.link} className="foot-item" spy={true} smooth={true} offset={0}>
                                        <h5 style={{ caretColor: "rgba(0,0,0,0)" }}>{item.title}</h5>
                                    </Link>
                            )
                        })
                    }
                </div>
                <p>Designed and built by &nbsp;
                    <a href="https://www.linkedin.com/in/pablo-padilla-6861b5137/" target="_blank" className="foot-name" rel="noreferrer">Pablo Padilla</a>
                </p>
            </div>
        </section>
    );
};

export default Footer;
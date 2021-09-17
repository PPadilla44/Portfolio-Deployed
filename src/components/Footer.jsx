import React from "react";
import './Footer.css';
import { NavData } from "./NavData";
import { Link } from 'react-scroll';
import Resume from "../assets/Pablo.Padilla.Resume.pdf";



const Footer = (props) => {



    return(
        <section>
            <div className="foot-main">
                <div className="foot-nav">
                    {
                        NavData.map((item, index) => {
                            return (
                                    item.title === "Resume" 
                                    ?
                                    <a key={index} href={Resume} className="foot-item" target='_blank' rel='noopener noreferrer'>
                                        <h5 style={{caretColor: "rgba(0,0,0,0)"}}>{item.title}</h5>
                                    </a>
                                    :
                                    <Link key={index} to={item.link} className="foot-item" spy={true} smooth={true} offset={0}>
                                        <h5 style={{caretColor: "rgba(0,0,0,0)"}}>{item.title}</h5>
                                    </Link>
                            )
                        })
                    }
                </div>
                <p>Designed and built by <span className="foot-name">Pablo Padilla</span></p>
            </div>
        </section>
    );
};

export default Footer;
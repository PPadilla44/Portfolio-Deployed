import React from "react";
import { ContactData } from "./ContactData";
import './Contact.css'

const Contact = (props) => {


    return (
        <section name="contact">
            <h1 className="title">Contact</h1>
            <div className="contact-main">
                {
                    ContactData.map((item, i) => {
                        return (
                            <div  key={i} className="contact-contents">
                            <a  rel="noopener noreferrer"  className={`${item.classN} contact-data`} href={item.link} target="_blank" >

                                <img src={item.image} alt={item.title} className="contact-img" />
                            </a>
                                <h3>{item.title}</h3>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    );
};

export default Contact;
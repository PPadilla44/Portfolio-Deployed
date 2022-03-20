import React from "react";
import { ContactData } from "./ContactData";
import './Contact.css'

const Contact = (props) => {


    return (
        <>
            <h1 className="title">Contact</h1>
            <section name="contact">
                <div className="contact-main">
                    {
                        ContactData.map((item, i) => {
                            return (
                                <a key={i} rel="noopener noreferrer" className={`contact-contents`} href={item.link} target="_blank" >
                                        {item.image}
                                    <h3>{item.title}</h3>
                                </a>

                            )
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Contact;
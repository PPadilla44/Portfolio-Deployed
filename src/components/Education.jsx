import React from "react";
import './Education.css';
import { EducationData } from './EducationData';

const Education = (props) => {


    return (
        <section name="education">
            <h1 className="title">Education</h1>
            <div className="ed-main">
                {
                    EducationData.map((item, i) => {
                        return(
                            <div key={i} className="ed-data">
                                <a rel="noopener noreferrer" href={item.link} target="_blank" className="ed-imgLink" >
                                    <img src={item.image} alt={item.name} id={item.classN} className="ed-img" />
                                </a>
                                <div className="ed-contents">
                                    <a  rel="noopener noreferrer" href={item.link} target="_blank">
                                        <h1 className={item.classN}>{item.name}</h1>

                                    </a>
                                    <div className="ed-desc">
                                        {
                                            item.description.map((d, j) => {
                                                return (
                                                    <h3 key={j}>{d}</h3>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="ed-foot">
                                        <p>{item.location}</p>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default Education;
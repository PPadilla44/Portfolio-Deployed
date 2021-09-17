import React from "react";
import './Skills.css';
import { SkillsData } from './SkillsData';


const Skills = (props) => {


    return (
        <section name="skills" id="test">
            <h1 className="title">Skills</h1>
            <div className="main">
                { SkillsData.map((item, index) => {
                    return (
                        <div key={index} className="category">
                            <h3>{item.title}</h3>
                            <div className="skillList" id={item.title}>
                                {item.contents.map((a, i) => {
                                    return (
                                        <h2 className="skill" key={i}>
                                            <span className="skill-name">{a}</span>
                                            </h2>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;
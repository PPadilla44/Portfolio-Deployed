import React, { useState } from "react";
import './Projects.css';
import { ProjectsData } from "./ProjectsData.jsx";

const Projects = (props) => {

    const [raise, setRaise] = useState(new Array(ProjectsData.length).fill(false));

    const handleProjects = (i) => {
        let temp = raise;
        temp[i] = !temp[i];
        setRaise([...temp])
    }


    return (
        <section name="projects">
            <h1 className="title">Projects</h1>
            <div className="projects-main">
                { ProjectsData.map((item, i) => {
                    return (
                        <div key={i} className="gifWrapper">
                            <h3>{item.title}</h3>
                            <img className="gif" src={item.src} alt={item.title}/>
                            <div className="project-foot">
                                <div className={raise[i]  ? "project-blur raise" : "project-blur"}/>
                                    <ul className={raise[i] ? "project-desc desc-show" : "project-desc desc-hide"}>
                                        {
                                            item.description.map((d, j) => {
                                                return (
                                                    <li key={j} className={raise[i] ? "project-descItem slidetext" : "project-descItem"}>
                                                        <p>{d}</p>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                <div className="project-btns">
                                    <button className="project-info" onClick={() => handleProjects(i)}>
                                        {!raise[i] ? 'Info' : 'Close'}
                                    </button>
                                    <a rel="noopener noreferrer" href={item.link} target="_blank" className="project-srcCode">Source</a>
                                </div>
                            </div>
                        </div>
                    )
                    }) }
            </div>
        </section>
    )
}

export default Projects;
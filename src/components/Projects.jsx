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
                {ProjectsData.map((item, i) => {
                    return (
                        <div key={i} className="gifWrapper">
                            <h3>{item.title}</h3>
                            <img className="gif" src={item.src} alt={item.title} />
                            <div className="project-foot">
                                <div className={raise[i] ? "project-blur raise" : "project-blur"} />
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
                                    <button className="project-btn project-info" onClick={() => handleProjects(i)}>
                                        {!raise[i] ?

                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
                                                <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
                                            </svg>

                                            :

                                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                                                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                                            </svg>

                                        }
                                    </button>
                                    {item.deployed && <a rel="noopener noreferrer" href={item.deployed} target="_blank" className="project-btn project-live">Live</a>}
                                    <a rel="noopener noreferrer" href={item.link} target="_blank" className="project-btn project-srcCode">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;
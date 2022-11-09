import React from 'react';
import style from './Projects.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={"Social network"} description={"first project"}/>
                    <Project title={"TodoList"} description={"second project"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
import React from 'react';
import s from './skills.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={"Js"} description={"Lorem ipsum"}/>
                    <Skill title={"CSS"} description={"Lorem ipsum"}/>
                    <Skill title={"React"} description={"Lorem ipsum"}/>
                </div>
            </div>

        </div>
    );
}

export default Skills;
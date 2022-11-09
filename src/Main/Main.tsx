import React from 'react';
import s from './Main.module.css';
import sContainer from '../common/styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>

            <div className={s.container}>

                <div className={s.greeting}>

                    <span>Hi there</span>
                    <h1>I am Olya Soboleva</h1>
                    <p>Frontend developer.</p>
                </div>

                <div className={s.foto}>

                </div>

            </div>

        </div>
    );
}

export default Main;
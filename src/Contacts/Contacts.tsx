import React from 'react';
import style from './Contacts.module.css'


const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.contacts}>
                    <form className={style.form} action="Contacts">
                        <input className={style.input} type="text"/>
                        <input className={style.input} type="text"/>
                        <div>
                            <textarea className={style.textarea} cols={58} rows={2}></textarea>
                        </div>
                    </form>
                    <div className={style.contButton}>
                        <button className={style.button}>Send</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contacts;
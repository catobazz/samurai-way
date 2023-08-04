import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' > Bobba </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' > Bibba</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' > Puppa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' >Luppa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5' > Ahmed</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hello naggers!</div>
                <div className={s.dialog}>Oba-boba!</div>
                <div className={s.dialog}>Wuzzup! How are you?</div>
            </div>
        </div>
    );
};

export default Dialogs;
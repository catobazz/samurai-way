import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Bobba
                </div>
                <div className={s.dialog}>
                    Bibba
                </div>
                <div className={s.dialog}>
                    Puppa
                </div>
                <div className={s.dialog}>
                    Luppa
                </div>
                <div className={s.dialog}>
                    Ahmed
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
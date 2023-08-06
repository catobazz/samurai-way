import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return <div className={s.dialog}> {props.message} </div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name='Boba' id='1'/>
                <DialogItem name='Bibba' id='2'/>
                <DialogItem name='Puppa' id='3'/>
                <DialogItem name='Luppa' id='4'/>
                <DialogItem name='Ahmed' id='5'/>

            </div>
            <div className={s.messages}>

                <Message message='Hello naggers!'/>
                <Message message='Oba-boba!'/>
                <Message message='Wuzzup! How are you?'/>

            </div>
        </div>
    );
};

export default Dialogs;
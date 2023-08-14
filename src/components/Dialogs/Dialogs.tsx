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

    let dialogsData = [
        {id: 1, name: 'Boba'},
        {id: 2, name: 'Bibba'},
        {id: 3, name: 'Puppa'},
        {id: 4, name: 'Luppa'},
        {id: 5, name: 'Ahmed'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello naggers!'},
        {id: 2, message: 'Oba-boba!'},
        {id: 3, message: 'Wuzzup! How are you?'},
    ]

    const dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = messagesData.map(m => <DialogItem name={m.message} id={m.id}/>)

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    );
};

export default Dialogs;
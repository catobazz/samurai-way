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
        {id: 1, name:'Boba' },
        {id: 2, name:'Bibba' },
        {id: 3, name:'Puppa' },
        {id: 4, name:'Luppa' },
        {id: 5, name:'Ahmed' },
    ]

    let messagesData = [
        {id: 1, message:'Hello naggers!' },
        {id: 2, message:'Oba-boba!' },
        {id: 3, message:'Wuzzup! How are you?' },
    ]

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;
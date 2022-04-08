import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {

    return(
        <div className={classes.message}>
            {props.message}
        </div>
    )
}


export const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Sasha' id='1'/>
                <DialogItem name='Vasya' id='2'/>
                <DialogItem name='Valera' id='3'/>
                <DialogItem name='Kolyan' id='4'/>
                <DialogItem name='Dima' id='5'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hello Bro!'/>
                <Message message='How are you my friend!?'/>
                <Message message='There is nice day, isnt it?'/>
            </div>
        </div>
    )
}
import React from 'react';
import classes from './Post.module.css'

export const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" alt="Avatar"/>
                {props.message}
                <div>
                    Like
                </div>
            </div>
        </div>
    )
}
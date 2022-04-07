import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div className={classes.item}>my posts</div>
            <div className={classes.item}>
                <textarea>provet</textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <Post message='Hi people!'/>
            <Post message='First POST!!!'/>
        </div>
    )
}
import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {
    return (
        <div className={classes.postsBlock}>
            <div className={classes.item}>my posts</div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Delete post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message='Hi people!'
                      likescount='0'
                />
                <Post message='First POST!!!'
                      likescount='190'/>
            </div>
        </div>
    )
}
import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {


    let postElements = props.posts.map( p => <Post message={p.message} likescount={p.likesCount} /> )
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
                {postElements}
            </div>
        </div>
    )
}
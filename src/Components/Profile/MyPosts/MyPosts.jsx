import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props) => {

    let posts = [{id: 1, message: 'Hi people', likesCount: 22},
                {id: 2, message: 'First POST!!!', likesCount: 1},
    ]
    let postElements = posts.map( p => <Post message={p.message} likescount={p.likesCount} /> )
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
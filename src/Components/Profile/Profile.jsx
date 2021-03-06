import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}
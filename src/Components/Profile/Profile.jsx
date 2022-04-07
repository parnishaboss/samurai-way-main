import React from 'react';
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <img src="https://art-oboi.by/assets/images/by_users/Modern-city/adobestock_214402701.jpg" alt=""/>
            <div className={classes.item}>ava i opisanie</div>
            <MyPosts/>
        </div>
    )
}
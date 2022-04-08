import React from 'react';
import classes from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div >
            <img src="https://art-oboi.by/assets/images/by_users/Modern-city/adobestock_214402701.jpg" alt=""/>
            <div className={classes.descriptionBlock}>ava i opisanie</div>
        </div>
    )
}
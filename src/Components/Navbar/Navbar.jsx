import React from 'react';
import classes from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><a>Profile</a></div>
            <div className={classes.item}><a>Messages</a></div>
            <div className={classes.item}><a>Music</a></div>
            <div className={classes.item}><a>Settings</a></div>
        </nav>
    )
}
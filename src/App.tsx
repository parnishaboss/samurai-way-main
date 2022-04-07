import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Navbar} from './Components/Navbar/Navbar';
import {Profile} from './Components/Profile/Profile';

export const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


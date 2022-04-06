import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Navbar} from './Components/Navbar';
import {Profile} from './Components/Profile';

export const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


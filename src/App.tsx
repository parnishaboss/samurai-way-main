import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className="App-wrapper">
            <header className="header">
                <img src="https://art-polevoy.ru/images/portfolio/L2.jpg" alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                <img src="https://art-oboi.by/assets/images/by_users/Modern-city/adobestock_214402701.jpg" alt=""/>
                <div>
                    ava i opisanie
                </div>
                <div>
                    my posts
                </div>
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>

        </div>
    );
}


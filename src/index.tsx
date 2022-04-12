import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';

let posts = [{id: 1, message: 'Hi people', likesCount: 22},
    {id: 2, message: 'First POST!!!', likesCount: 1},
]
let dialogs = [{id: 1, name: 'Sasha'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Valera'},
    {id: 4, name: 'Kolyan'},
    {id: 5, name: 'Dima'},
]
let messages = [{id: 1, message: 'Hello Bro!'},
    {id: 2, message: 'How are you my friend!?'},
    {id: 3, message: 'There is nice day, isnt it?'},
    {id: 4, message: 'There is nice day, isnt it?'},
    {id: 5, message: 'There is nice day, isnt it?'}
]

ReactDOM.render(
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}
    />,
  document.getElementById('root')
);
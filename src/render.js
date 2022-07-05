import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {addPost, updateNewPostText, updateNewMesText, addMes} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMes={addMes} updateNewMesText={updateNewMesText}/>
        </React.StrictMode>
    );
}


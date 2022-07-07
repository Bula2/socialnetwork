import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() =>{
    rerenderEntireTree(store.getState());
});

reportWebVitals();

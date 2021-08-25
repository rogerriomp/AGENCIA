import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import Routes from './Router'
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<Routes />, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter><Routes /></BrowserRouter>, document.getElementById('root'));
//ReactDOM.render(<Auth />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

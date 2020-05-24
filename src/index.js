import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// import Hello from './Hello'
// import AppNefolosit from './AppNefolosit';
// import Card from './Card.js';
// import CardList from './CardList.js'



ReactDOM.render(
  <React.StrictMode>
    {/* <AppNefolosit /> */}
    {/* <Hello greeting={'Hello '+'React Ninja'}/> */}
    {/* <CardList robots = {robots}/> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


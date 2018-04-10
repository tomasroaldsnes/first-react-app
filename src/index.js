import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(<IndecisionApp/>, document.getElementById('root'));

registerServiceWorker();

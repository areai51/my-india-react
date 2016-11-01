import React from 'react';  
import ReactDOM from 'react-dom';  
import { Router, Link, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './containers/main.jsx';

require('./styles/main.scss');

const app = document.getElementById('app');

ReactDOM.render(<Main />, app);
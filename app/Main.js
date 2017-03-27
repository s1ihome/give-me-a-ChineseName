import React from 'react'
import { render } from 'react-dom'
import FastClick from 'fastclick'
import 'babel-polyfill'
import 'whatwg-fetch'
import Root from './router/Root'

// import './css/style.sass'
import './css/style.css'

//fastclick init
window.addEventListener('load', () => {
    FastClick.attach(document.body);
});

render(<Root />, document.getElementById('root'))

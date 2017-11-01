import React from 'react'
import ReactDom from 'react-dom'
import JobAdmin from './JobAdmin/index.js'
import './index.css'

const AppRoot = <JobAdmin />

console.log(document.querySelector('.app-root'))

ReactDom.render(AppRoot, document.querySelector('.app-root'))

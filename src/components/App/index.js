import React from 'react'
import AppBar from '$components/AppBar'
import AppSideMenu from '$components/AppSideMenu'

import './index.css'

export default function App(props) {
	return <div styleName="app">
		<AppBar />
		<div styleName="cont">
			<AppSideMenu />
			<div styleName="page-cont">{ props.children }</div>
		</div>
	</div>
}

import React from 'react'
import AppBar from '$components/AppBar'
import AppSideMenu from '$components/AppSideMenu'

import './index.css'

export default function App(props) {
	return <div className="flexbox flex-column" styleName="app">
		<AppBar />
		<div styleName="cont" className="flex flexbox">
			<AppSideMenu />
			<div styleName="panel" className="flex flexbox flex-column">{ props.children }</div>
		</div>
	</div>
}

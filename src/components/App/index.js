import React from 'react'
import View from '$components/View'
import AppBar from '$components/AppBar'
import AppSideMenu from '$components/AppSideMenu'

import './index.css'

export default function App(props) {
	return <View styleName="app">
		<AppBar />
		<View styleName="cont" direction="|">
			<AppSideMenu />
			<View styleName="panel">{ props.children }</View>
		</View>
	</View>
}

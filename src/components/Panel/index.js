import React from 'react'
import View from '$components/View'

import './index.css'

export default function(props) {
	return <View styleName="panel">
		<div styleName="panel-header">{ props.header }</div>
		<View styleName="panel-body" className="flex">{ props.children }</View>
		<div styleName="panel-footer">by honchy</div>
	</View>
}

import React, { Component } from 'react'
import View from '$components/View'

import './index.css'

export default function(props) {
	return <View styleName="table">
		<View styleName="table-header" direction="|" flex={false}>
			{ props.cols.map(item => <div key={item.text} className={item.className}>{item.text}</div>) }
		</View>
		<View styleName="table-body">
			<div styleName="list">
			{ props.rows.map(props.renderRow) }
			</div>
		</View>
	</View>
}

import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import ReactDom from 'react-dom'

import View from '$components/View'
import Panel from '$components/Panel'
import Table from '$components/table'

import "./index.css"

@inject("model")
@observer
export default class JobInfo extends Component {
	constructor(props) {
		super(props)

		this.renderRow = this.renderRow.bind(this)
	}
	componentDidMount() {
		this.props.model.query()
	}
	renderRow(item) {
		return <div  styleName="item" key={ item.app_name }>
			<div className="flex" styleName="name">{ item.app_name }</div>
			<div className="flex" styleName="address">{ item.address }</div>
			<div className="flex" styleName="port">{ item.port }</div>
			<div styleName="port" className="flex">
				<button type="button" >修改</button>
				<button type="button" >查看明细</button>
			</div>
		</div>
	}
	render() {
		let model = this.props.model
		const cols = [
			{ text: '应用'},
			{ text: '机器列表'},
			{className: 'port', text: '端口'},
			{text: '操作'}
		];
		return (<Panel header="Application Info">
			<Table
				cols={cols}
				rows={model.applications}
				renderRow={this.renderRow}
			/>
		</Panel>)
	}
}

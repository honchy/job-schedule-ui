import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import styles from "./index.css"

@inject("model")
@observer
export default class JobAdmin extends Component {
	componentDidMount() {
		this.props.model.queryApplications()
	}
	render() {
		let model = this.props.model
		return <div styleName="table" className="flex flexbox flex-column">
			<div styleName="table-header" className="flexbox">
				<div styleName="name" className="flex">Name</div>
				<div styleName="address" className="flex">Address</div>
				<div styleName="port" className="flex">Port</div>
			</div>
			<div styleName="table-body" className="flex">
				<div styleName="list">
				{ 
					model.applications.map((item) => {
						return <div  styleName="item" key={ item.app_name }>
							<div className="flex" styleName="name">{ item.app_name }</div>
							<div className="flex" styleName="address">{ item.address }</div>
							<div className="flex" styleName="port">{ item.port }</div>
						</div>
					})
				}
				</div>
			</div>
		</div>
	}
}

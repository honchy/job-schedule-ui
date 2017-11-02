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
		return <div>{ model.applications.map((item) => {
			return <div key={ item.app_name }>{ item.app_name }</div>
		})}</div>
	}
}

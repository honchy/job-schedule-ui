import React from 'react'
import './index.css'

const MenuList = [
	{ label: 'Job Admin' }
]

export default function AppSideMenu(props) {
	return <div styleName="menu">
	{
		MenuList.map(item => <div key={item.label} styleName="item">{item.label}</div>)
	}
	</div>
}

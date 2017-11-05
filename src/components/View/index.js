import React, { Component } from 'react'

export default function View(props) {
	return <div className={`flexbox ${props.flex === false ? '' : 'flex'} ${props.direction === '|' ? '' : 'flex-column'} ${props.className}`}>{ props.children}</div>
}

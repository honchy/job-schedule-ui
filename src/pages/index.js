import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import JobAdmin from './JobAdmin'
import JobInfo from './JobInfo'
import AppModel from '$models/appModel'
import App from '$components/App'

import './index.css'

const AppRoot = <Provider model={ new AppModel }>
	<App>
		<JobAdmin />
	</App>
</Provider>

ReactDom.render(AppRoot, document.querySelector('.app-root'))

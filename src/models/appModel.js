// 整个应用的状态管理
import { observable, action } from 'mobx'
import { ApplicationInfo } from '$models/def'
import moment from 'moment'

export default class AppStore {
	@observable applications = []
	@observable notifyMessages = []

	@action.bound
	queryApplications() {
		let list = []
		for(let i = 0; i < 20; i ++) {
			let app = new ApplicationInfo()
			app.id = i
			app.app_name = `app_name_${i}`
			app.address = `10.0.2.${i}`
			app.port = `8${i}`
			app.create_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
			app.update_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')

			list.push(app)
		}
		setTimeout(() => {
			this.applications = this.applications.concat(list)
		}, 300)
	}

	@action.bound
	queryJobInfoByApplication(applicationName) {
		
	}

	@action.bound
	queryScheduleHistoryByJobInfo(jobCode) {
		
	}

	@action.bound
	updateJobInfo(newJobInfo) {

	}

	@action.bound
	executeJobImmediately(jobCode) {

	}

	@action.bound
	updateApplication(newApplicationInfo) {

	}

	@action.bound
	notifyNewMessage(message) {

	}
}

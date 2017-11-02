// 整个应用的状态管理
import { observable, action } from 'mobx'

export default class AppStore {
	@observable applications = []
	@observable notifyMessages = []

	@action.bound
	queryApplications() {
		// setInterval(() => {
			this.applications.push({
				app_name: `haha-${Date.now()}`
			})
		// }, 300)
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

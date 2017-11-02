export class ApplicationInfo {
	id
	app_name
	address
	port
	create_time
	update_time
}

export class JobInfo {
	id
	job_code
	app_name
	bean_name
	method_name
	cron_param
	schedule_addr
	param
	create_time
	update_time
}

export class ScheduleHistory {
	id
	job_code
	schedule_address
	schedule_param
	execute_time
	execute_status
	create_time
	update_time
}

export class NotifyMessage {
	// 静态类变量
	static NotifyMessageLevel = {
		INFO: 0, // 表现为气泡消息
		ATTENTION: 1, // 需要引起注意的信息弹窗
		INTERACTION: 2 // 需要用户停下来思考，决定如何参与其中的弹窗
	}

	static NotifyMessageStatus = {
		SUCC: 0,
		FAIL: 1
	}

	status //状态
	msg // 消息
	level // 等级
}

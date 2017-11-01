import { observable } from 'mobx'

export default class JobInfo {
	id ;
	job_code ;
	app_name ;
	bean_name ;
	method_name ;
	cron_param ;
	schedule_addr ;
	param ;
	create_time ;
	update_time ;
}

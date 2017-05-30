//Dependencies
import taskTemplate from './taskTemplate.html';
import taskCtrl from './task.controller';

//Component
export const task = {
	template: taskTemplate,
	controller: taskCtrl,
	bindings: {
		task: '<',
		onDelete: '&',
		onUpdate: '&',
	}
}
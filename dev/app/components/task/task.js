//Dependencies
import taskTemplate from './taskTemplate.html';

//Component
export const task = {
	template: taskTemplate,
	bindings: {
		task: '=',
		onDelete: '&',
		onUpdate: '&',
	}
}
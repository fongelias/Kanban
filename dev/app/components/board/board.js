//Dependencies
import boardTemplate from './boardTemplate.html';

//Component
export const board = {
	template: boardTemplate,
	controller: 'boardCtrl',
	controllerAs: 'boardCtrl',
	bindings: {
		board: '=',
		onDelete: '&',
	}
};
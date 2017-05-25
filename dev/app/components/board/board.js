//Dependencies
import boardTemplate from './boardTemplate.html';
import boardCtrl from './board.controller';

//Component
export const board = {
	template: boardTemplate,
	controller: boardCtrl,
	bindings: {
		board: '=',
		onDelete: '&',
	}
};
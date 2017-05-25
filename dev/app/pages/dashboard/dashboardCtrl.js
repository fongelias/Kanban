//Dependencies
//Controller
export default function($rootScope) {
	$rootScope.title = 'You Kan do it! | Kanban';
	let _this = this;
	
	this.boards = [
		{
			_id: 'b1',
			title: 'backlog',
			tasks: ['t1', 't2'],
		}
	];

	this.addBoard = function() {
		_this.boards.push({
			_id: 'b2',
			title: 'in progress',
			tasks: ['t3', 't4'],
		});
	};

	this.deleteBoard = function(board) {
		console.log(board);
		let index = _this.boards.indexOf(board);
		if (index !== -1) {
			_this.boards.splice(index, 1);
		}
	};
}
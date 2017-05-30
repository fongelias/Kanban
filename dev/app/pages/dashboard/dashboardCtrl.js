//Dependencies
//Controller
export default ['$rootScope','indexDB', function($rootScope, indexDB) {
	$rootScope.title = 'You Kan do it! | Kanban';
	let _this = this;
	
	this.boards = [
		{
			_id: 'b1',
			title: 'backlog',
			tasks: ['t1', 't2'],
		}
	];

	indexDB.init().then((result)=>{
		indexDB.db = result;
		//indexDB.add({_id: 'b1', title: 'backlog'}, 'boards');
		indexDB.update({_id: 'b1', title: 'backlo'}, 'boards')
		console.log(indexDB.retrieve('boards'));
	});


	this.addBoard = function() {
		_this.boards.push({
			_id: 'b2',
			title: 'in progress',
			tasks: ['t3', 't4'],
		});
	};

	this.updateBoard = function(board) {
		/*indexDB.init().then((result)=>{
			indexDB.db = result;
			console.log(indexDB.update(board, 'boards'));
		})*/
	}

	this.deleteBoard = function(board) {
		console.log(board);
		let index = _this.boards.indexOf(board);
		if (index !== -1) {
			_this.boards.splice(index, 1);
		}
	};
}]
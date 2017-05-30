//Dependencies
//Controller
export default ['$rootScope','$scope', 'indexDB', function($rootScope, $scope, indexDB) {
	$rootScope.title = 'You Kan do it! | Kanban';
	let _this = this;
	
	$scope.boards = [
		{
			_id: 'b1',
			title: 'backlog',
			tasks: ['t1', 't2'],
		}
	];

	indexDB.init().then((result)=>{
		indexDB.db = result;
		console.log(result);
		//indexDB.add({_id: 'b1', title: 'backlog'}, 'boards');
		//indexDB.update({_id: 'b1', title: 'backlo'}, 'boards');
		console.log(indexDB.retrieve('boards'));
		indexDB.retrieve('boards').then((result)=>{
			result.forEach((board)=>{
				$scope.boards.push(board);
				$scope.$apply();
			})
		});
	});


	this.addBoard = function() {
		$scope.boards.push({
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
		let index = $scope.boards.indexOf(board);
		if (index !== -1) {
			$scope.boards.splice(index, 1);
		}
	};
}]
//Dependencies
//Controller
export default ['$rootScope','$scope', 'indexDB', function($rootScope, $scope, indexDB) {
	$rootScope.title = 'You Kan do it! | Kanban';
	
	$scope.boards = [];

	indexDB.init().then((result)=>{
		indexDB.db = result;
		console.log(result);
		//indexDB.add({_id: 'b1', title: 'backlog'}, 'boards');
		//indexDB.update({_id: 'b1', title: 'backlo'}, 'boards');
		console.log(indexDB.retrieve('boards'));
		indexDB.retrieve('boards').then((result)=>{
			$scope.boards = result;
			$scope.$apply();
			indexDB.db.close();
		});
	});


	this.addBoard = function() {
		let emptyBoard = {title: '', tasks: []};
		$scope.boards.push(emptyBoard);
		indexDB.init().then((result)=>{
			indexDB.db = result;
			indexDB.add(emptyBoard, 'boards');
			indexDB.retrieve('boards').then((result)=>{
				$scope.boards = result;
				$scope.$apply();
				indexDB.db.close();
			});
		});
	};

	this.updateBoard = function(board) {
		indexDB.init().then((result)=>{
			indexDB.db = result;
			indexDB.update(board, 'boards').then(()=>{
				indexDB.retrieve('boards').then((result)=>{
					$scope.boards = result;
					$scope.$apply();
					console.log(result);
					indexDB.db.close();
				});
			});
		})
	}

	this.deleteBoard = function(board) {
		indexDB.init().then((result)=>{
			indexDB.db = result;
			indexDB.delete(board._id, 'boards').then(()=>{
				indexDB.retrieve('boards').then((result)=>{
					$scope.boards = result;
					$scope.$apply();
					console.log(result);
					indexDB.db.close();
				});
			});
		})
	};
}]
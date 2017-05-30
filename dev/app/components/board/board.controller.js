//Dependencies
//Controller
export default function boardCtrl() {
	let _this = this;

	this.deleteBoard = function() {
		console.log(_this.onDelete);
		_this.onDelete({board: _this.board});
	};

	this.updateBoard = function() {
		_this.onUpdate({board: _this.board});
	}

	this.addTask = function() {
		_this.board.tasks.push({time: Date.now(), title: ''});
		_this.onUpdate({board: _this.board});
	}


	this.updateTask = function(task) {
		let index = _this.board.tasks.indexOf(task);
		if (index !== -1) {
			_this.board.tasks.splice(index,1, task);
			_this.onUpdate({board: _this.board});
		}
	}

	this.deleteTask = function(task) {
		let index = _this.board.tasks.indexOf(task);
		if (index !== -1) {
			_this.board.tasks.splice(index,1);
			_this.onUpdate({board: _this.board});
		}
	}
}
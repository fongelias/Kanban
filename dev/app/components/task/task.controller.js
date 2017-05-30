//Controller
export default function taskCtrl() {
	let _this = this;

	this.deleteTask = function() {
		_this.onDelete({task: _this.task});
	}

	this.updateTask = function() {
		_this.onUpdate({task: _this.task});
	}
}
//Dependencies
//Controller
export default function boardCtrl() {
	let _this = this;

	this.deleteBoard = function() {
		console.log(_this.onDelete);
		_this.onDelete({board: _this.board});
	};

	this.updateBoard = function(event) {
		_this.onUpdate({board: _this.board});
	}
}
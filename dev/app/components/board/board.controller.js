//Dependencies
//Controller
export default function boardCtrl() {
	let _this = this;

	this.deleteBoard = function(){
		console.log(_this.onDelete);
		_this.onDelete(_this.board);
	};
}
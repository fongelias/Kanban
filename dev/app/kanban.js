//Dependencies
import angular from 'angular';
import 'angular-route';
//Config
import routes from './config/kanban.routes';
//Modules
import { board } from './components/board/board';
import { task } from './components/task/task';
import dashboardCtrl from './pages/dashboard/dashboardCtrl';

const requires = [
	'ngRoute',
];

//App
angular.module('kanban',requires)
		.controller('dashboardCtrl', dashboardCtrl)
		.component('board', board)
		.component('task', task)
		.config(routes);

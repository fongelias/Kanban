//Dependencies
import dashboardTemplate from '../pages/dashboard/dashboard.html';

//Exports
export default function($routeProvider) {
	$routeProvider
		.when('/', {
			template: dashboardTemplate,
			controller: 'dashboardCtrl',
			controllerAs: '$ctrl',
		});
}
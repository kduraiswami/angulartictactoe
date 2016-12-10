var app = angular.module('ticTacToeApp', []);

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/tictactoe.html',
			controller: 'GameCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.constant('grid_size', 3);

app.factory('game', function(){
	return new Game();
})

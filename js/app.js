var app = angular.module('ticTacToeApp', ['ngRoute']);
app.controller('gameCtrl', function($scope){});

app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/tictactoe.html',
			controller: 'gameCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});

app.constant('grid_size', 3);

app.factory('game', function(){
	return new Game();
})

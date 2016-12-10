'use strict';

function gameCtrl($scope, game){
	$scope.grid = new Array(3);
	$scope.game_status = "";
	$scope.computer_starts = false;
	$scope.game_over = false;

	$scope.startGame = function(){
		$scope.game_status = "";
		$scope.game_over = false;
		game.start(3, $scope.computer_starts);
		game.status_message = "Game Has Started";
	}

	$scope.makeMove = function (col, row){
		var location,
			symbol,
			winner;

		location = (row * 3) + col;

		if (game.board && game.board.canMove)
	}
}





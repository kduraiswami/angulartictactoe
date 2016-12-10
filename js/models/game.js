'use strict';

var Game = function(){
	this.computer_start = false;
	this.grid = 3;
	this.board = null;

	this.humanPlayer = new Player(false);
	this.computerPlayer = new Player(true);
	this.currentPlayer = this.humanPlayer;

	this.winner = null;
	this.tie = false;
	this.winningPlacement = [];
}

Game.prototype = {
	start: function(){
		this.board = new Board();
	}

	move: function(index){
		this.checkBoardStatus();
		this.currentPlayer = switchPlayer();
			
		if (this.currentPlayer.isComputer)
			this.computerMove();
	}

	checkBoardStatus: function(){
		var boardStatus = this.board.checkStatus();

		switch (boardStatus){
			case "winner":
				this.winner = this.currentPlayer;
				break;
			case "cats game":
				this.tie = true;
				break;
		}



	}


}

function switchPlayer(){
	return this.currentPlayer.isComputer ? this.humanPlayer : this.computerPlayer;
}



'use strict';

var Board = function(){
	this.grid = 3;
	this.X = 1;
	this.O = -1;
	this.board = [];
}

Board.prototype = {

	move: function(index, player){
		if(this.validMove(index))
			this.board[index] = player.symbol === "X" ? this.X : this.O;
	},

	renderMove: function(index){
		var symbol = "";
		if(this.validMove(index))
			symbol = this.board[index] === this.X ? "X" : "O"; 

	},

	checkStatus: function(){
		
	}

}

function validMove(index){
	return typeof this.board[index] === "undefined";
}

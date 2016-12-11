"use strict";

var Player = function(isComputer){
	var symbol = isComputer ? "X" : "O";
	var isComputer = isComputer || false;

	this.symbol = symbol;
	this.isComputer = isComputer;	

	Object.assign(this, this.isComputer ? { 
		negaMax : function negaMax(board, depth, player, alpha, beta){
			var i = 9, 
			min = -100, 
			max, 
			value, 
			next, 
			undef;

			if (6 > depth){ 
				while(i--){
					if (!board[i]){
						board[i] = player;
						value = -this.negaMax(board, depth + 1, -player, -beta, -alpha);
						board[i] = undef;
						if (max === undef || value > max) max = value;
						if (value > alpha) alpha = value;
						if (alpha >= beta) return alpha; 
						if (max > min){ min = max; next = i; } 
					}
				}		
			} 
			return depth ? max || 0 : next;
		}
	} : null);

}



var computer = new Player(true);
var human = new Player(false);
debugger;
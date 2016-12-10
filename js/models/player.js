"use strict";

var Player = function(isComputer){
	symbol = isComputer ? "X" : "O";
	isComputer = isComputer || false;

	this.symbol = symbol;
	this.isComputer = isComputer;
}
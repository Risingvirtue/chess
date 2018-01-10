function blackPawn(y,x) {
	this.i = "url(./img/normal/bPawn.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		console.log("#" + letters[this.x] + this.y, this.i);
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whitePawn(y,x) {
	this.i = "url(./img/normal/wPawn.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	this.move = function(y,x) {
		return (y == this.y + 1 && this.x == x);
	}
}

function blackRook(y,x) {
	this.i = "url(./img/normal/bPawn.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteRook(y,x) {
	this.i = "url(./img/normal/wRook.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackKnight(y,x) {
	this.i = "url(./img/normal/bKnight.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKnight(y,x) {
	this.i = "url(./img/normal/wKnight.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackBishop(y,x) {
	this.i = "url(./img/normal/bBishop.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteBishop(y,x) {
	this.i = "url(./img/normal/wBishop.png)";
	this.x = x;
	this.y = y;
	this.draw = function(){
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackKing(y,x) {
	this.i = "url(./img/normal/bKing.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKing(y,x) {
	this.i = "url(./img/normal/wKing.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackQueen(y,x) {
	this.i = "url(./img/normal/bQueen.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteQueen(y,x) {
	this.i = "url(./img/normal/wQueen.png)";
	this.x = x;
	this.y = y;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}
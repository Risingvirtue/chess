function blackPawn(y,x) {
	this.i = "url(./img/normal/bPawn.png)";
	this.x = x;
	this.y = y;
	this.start = true;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	this.move = function(y,x) {
		if (this.start) {
			var moveable = (this.x == x && (this.y - 1 == y || this.y - 2 == y));
			if (moveable) {
				this.start = false;
			}
			return moveable;
		} else {
			return this.x == x && this.y - 1 == y 
		}
	}
	
}

function whitePawn(y,x) {
	this.i = "url(./img/normal/wPawn.png)";
	this.x = x;
	this.y = y;
	this.start = true;
	this.color = 'white';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	this.move = function(y,x) {
		
		if (this.start) {
			var moveable = (this.x == x && (this.y + 1 == y || this.y + 2 == y));
			if (moveable) {
				this.start = false;
			}
			return moveable;
		} else {
			return this.x == x && this.y + 1 == y 
		}
	}
	this.take = function(y,x) {
		var right = (y == this.y + 1 && x == this.x + 1);
		var left = (y == this.y + 1 && x == this.x - 1);
		return right || left;
	}
}

function blackRook(y,x) {
	this.i = "url(./img/normal/bPawn.png)";
	this.x = x;
	this.y = y;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	
	this.move = function(y,x) {
		if (this.y == y) {
			var diff = x - this.x;
			var sign = diff / (Math.abs(x - this.x));
			for (var i = 1; i < Math.abs(diff); i++) {
				var tempX = this.x + sign * i;
				console.log(board[y][tempX]);
			}
		}
	}
}

function whiteRook(y,x) {
	this.i = "url(./img/normal/wRook.png)";
	this.x = x;
	this.y = y;
	this.color = 'white';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackKnight(y,x) {
	this.i = "url(./img/normal/bKnight.png)";
	this.x = x;
	this.y = y;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKnight(y,x) {
	this.i = "url(./img/normal/wKnight.png)";
	this.x = x;
	this.y = y;
	this.color = 'white';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackBishop(y,x) {
	this.i = "url(./img/normal/bBishop.png)";
	this.x = x;
	this.y = y;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteBishop(y,x) {
	this.i = "url(./img/normal/wBishop.png)";
	this.x = x;
	this.y = y;
	this.color = 'white';
	this.draw = function(){
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackKing(y,x) {
	this.i = "url(./img/normal/bKing.png)";
	this.x = x;
	this.y = y;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKing(y,x) {
	this.i = "url(./img/normal/wKing.png)";
	this.x = x;
	this.y = y;
	this.color = 'white';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackQueen(y,x) {
	this.i = "url(./img/normal/bQueen.png)";
	this.x = x;
	this.y = y;
	this.color = 'black';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteQueen(y,x) {
	this.i = "url(./img/normal/wQueen.png)";
	this.x = x;
	this.y = y;
	this.color = 'white';
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}
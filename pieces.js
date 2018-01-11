function blackPawn(y,x) {
	this.i = "url(./img/normal/bPawn.png)";
	this.x = x;
	this.y = y;
	this.start = true;
	this.color = false;
	this.type = 'pawn';
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
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		var right = (y == this.y - 1 && x == this.x + 1);
		var left = (y == this.y - 1 && x == this.x - 1);
		return (right || left);
	}
	
}

function whitePawn(y,x) {
	this.i = "url(./img/normal/wPawn.png)";
	this.x = x;
	this.y = y;
	this.start = true;
	this.color = true;
	this.type = 'pawn';
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
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		var right = (y == this.y + 1 && x == this.x + 1);
		var left = (y == this.y + 1 && x == this.x - 1);
		return (right || left);
	}
}

function blackRook(y,x) {
	this.i = "url(./img/normal/bRook.png)";
	this.x = x;
	this.y = y;
	this.color = false;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	
	this.move = function(y,x) {
		if (this.y == y) {
			var diff = x - this.x;
			var sign = diff / (Math.abs(x - this.x));
			
			for (var i = 1; i < Math.abs(diff); i++) {
				
				var tempX = this.x + sign * i;
				
				var piece = board[y][tempX];
				
				if (piece != '0') {
					if (tempX == x && piece.color == !this.color) {
						return true;
					}
					return false;
				}
			}
			return true;
		} else if (this.x == x) {
			var diff = y - this.y;
			var sign = diff / (Math.abs(y - this.y));
			
			for (var i = 1; i <= Math.abs(diff); i++) {
				var tempY = this.y + sign * i;
				var piece = board[tempY][x];
				if (piece != '0') {
					if (tempY == y && piece.color == !this.color) {
						return true;
					}
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
	
	this.take = this.move;
}

function whiteRook(y,x) {
	this.i = "url(./img/normal/wRook.png)";
	this.x = x;
	this.y = y;
	this.color = true;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	this.move = function(y,x) {
		if (this.y == y) {
			var diff = x - this.x;
			var sign = diff / (Math.abs(x - this.x));
			
			for (var i = 1; i < Math.abs(diff); i++) {
				
				var tempX = this.x + sign * i;
				
				var piece = board[y][tempX];
				
				if (piece != '0') {
					if (tempX == x && piece.color == !this.color) {
						return true;
					}
					return false;
				}
			}
			return true;
		} else if (this.x == x) {
			var diff = y - this.y;
			var sign = diff / (Math.abs(y - this.y));
			
			for (var i = 1; i <= Math.abs(diff); i++) {
				var tempY = this.y + sign * i;
				var piece = board[tempY][x];
				if (piece != '0') {
					if (tempY == y && piece.color == !this.color) {
						return true;
					}
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	}
	
	this.take = this.move;
}

function blackKnight(y,x) {
	this.i = "url(./img/normal/bKnight.png)";
	this.x = x;
	this.y = y;
	this.color = false;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKnight(y,x) {
	this.i = "url(./img/normal/wKnight.png)";
	this.x = x;
	this.y = y;
	this.color = true;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackBishop(y,x) {
	this.i = "url(./img/normal/bBishop.png)";
	this.x = x;
	this.y = y;
	this.color = false;
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
	this.color = false;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteKing(y,x) {
	this.i = "url(./img/normal/wKing.png)";
	this.x = x;
	this.y = y;
	this.color = true;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function blackQueen(y,x) {
	this.i = "url(./img/normal/bQueen.png)";
	this.x = x;
	this.y = y;
	this.color = false;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}

function whiteQueen(y,x) {
	this.i = "url(./img/normal/wQueen.png)";
	this.x = x;
	this.y = y;
	this.color = true;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
}
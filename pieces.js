function getArr(x0, x1) {
	var diff = x1 - x0;
	var sign = (x1 - x0) / Math.abs(x1 - x0); 
	var arr = [];
	for (var i = 1; i <= Math.abs(diff); i++) {
		arr.push(sign*i);
	}
	return arr;
}

function checkDiagonal(currY, currX, y, x) {
	var currDiff = currX - currY;
	var diff = x - y;
	if (currDiff != diff && y + x != currX + currY) {
		return false;
	}
	return true;
}

function checkRow(currY, currX, y, x) {
	return currY == y || currX == x;
}

function rowMove(currY, currX, y, x) {
	var arrX = getArr(currX, x);
	var arrY = getArr(currY, y);
	
	if (arrX.length == 0) {
		arrX = arrY.map(function(a) {return 0;});
	} else {
		arrY = arrX.map(function(a) {return 0;});
	}
		
	for (var i = 0; i < arrX.length; i++) {
		var piece = board[currY + arrY[i]][currX + arrX[i]];
		if (piece != '0') {
			if (i == arrX.length - 1) {
				return true;
			}
			return false;
		}
	}
	return true;
}

function diagonalMove(currY, currX, y, x) {
	var arrX = getArr(currX, x);
	var arrY = getArr(currY, y);
	//check empty space
	for (var i = 0; i < arrX.length; i++) {
		var piece = board[currY + arrY[i]][currX + arrX[i]];
		if (piece != '0') {
			if (i == arrX.length - 1) {
				return true;
			}
			return false;
		}
	}
	return true;
}
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
		
		if (checkRow(this.y, this.x, y, x)) {
			return rowMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x,piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
	}
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
		if (checkRow(this.y, this.x, y, x)) {
			return rowMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x,piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
	}
}

function blackKnight(y,x) {
	this.i = "url(./img/normal/bKnight.png)";
	this.x = x;
	this.y = y;
	this.color = false;
	this.draw = function() {
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	
	this.move = function(y,x) {
		var diffX = Math.abs(x - this.x);
		var diffY = Math.abs(y - this.y);
		if ((diffX == 1 || diffX == 2) && diffX + diffY == 3) {
			return true;
		}
		return false;
		
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	this.move = function(y,x) {
		var diffX = Math.abs(x - this.x);
		var diffY = Math.abs(y - this.y);
		if ((diffX == 1 || diffX == 2) && diffX + diffY == 3) {
			return true;
		}
		return false;
		
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	this.move = function(y,x) {
		if (checkDiagonal(this.y, this.x, y, x)) {
			return diagonalMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
	}
}

function whiteBishop(y,x) {
	this.i = "url(./img/normal/wBishop.png)";
	this.x = x;
	this.y = y;
	this.color = true;
	this.draw = function(){
		$("#" + letters[this.x] + this.y).css('background-image', this.i);
	}
	this.move = function(y,x) {
		if (checkDiagonal(this.y, this.x, y, x)) {
			return diagonalMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	this.move = function(y, x) {
		var diffX = x - this.x;
		var diffY = y - this.y;
		if (Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) {
			return true;
		}
		return false;
	}
	
	this.take = function(y, x,piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	
	this.move = function(y, x) {
		var diffX = x - this.x;
		var diffY = y - this.y;
		if (Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) {
			return true;
		}
		return false;
	}
	
	this.take = function(y, x,piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	this.move = function(y,x) {
		var diagonal = checkDiagonal(this.y, this.x, y, x);
		var row = checkRow(this.y, this.x, y, x);
		if (diagonal) {
			return diagonalMove(this.y, this.x, y, x);
		} else if (row) {
			return rowMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
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
	this.move = function(y,x) {
		var diagonal = checkDiagonal(this.y, this.x, y, x);
		var row = checkRow(this.y, this.x, y, x);
		if (diagonal) {
			return diagonalMove(this.y, this.x, y, x);
		} else if (row) {
			return rowMove(this.y, this.x, y, x);
		} else {
			return false;
		}
	}
	
	this.take = function(y,x, piece) {
		if (piece.color == this.color) {
			return false;
		}
		return this.move(y,x);
	}
}
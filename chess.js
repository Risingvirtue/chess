var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	//0 = white 1 = black
	//1 = pawn 2= king 3=queen 4=bishop 5=knight 6 =rook 0= clear
	var board;
$(document).ready(function(){
	
	
	for (var i = 7; i>=0;i--) {
		var div = ['<div class="row board">',
				'<label class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></label>',
				'<div id="' + i + '" class="row col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>',
				'<label class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></label></div>'];	
		$('#board').append(div.join('\n'));
		for (var j =0; j < 8; j++) {
			var letter = letters[j];
			$("#" + i).append('<button id="' + letter + i + '" class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="width: 12.499999995%"></button>');
		}
	}
	square();
	newBoard();
	drawBoard();
	
	
});


function newBoard() {
	board = [
			[new whiteRook(0,0), new whiteKnight(0,1), new whiteBishop(0,2), 
			new whiteQueen(0,3), new whiteKing(0, 4), new whiteBishop(0, 5), 
			new whiteKnight(0, 6), new whiteRook(0,7)],
			[new whitePawn(1,0), new whitePawn(1,1), new whitePawn(1,2), 
			new whitePawn(1,3), new whitePawn(1,4), new whitePawn(1,5), 
			new whitePawn(1,6), new whitePawn(1,7)],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			[new blackPawn(6,0), new blackPawn(6,1), new blackPawn(6,2), 
			new blackPawn(6,3), new blackPawn(6,4), new blackPawn(6,5), 
			new blackPawn(6,6), new blackPawn(6,7)],
			[new blackRook(7,0), new blackKnight(7,1), new blackBishop(7, 2), 
			new blackQueen(7,3), new blackKing(7, 4), new blackBishop(7, 5), 
			new blackKnight(7, 6), new blackRook(7,7)]	
	];
}

function drawBoard() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			var piece = board[i][j];
			if (piece != '0') {
				piece.draw();
				//console.log(letters[piece.x] + piece.y);
			}
		}
	}
}

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

$(window).resize(function() {
	square();
});

function square() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			var elle = '#' + letters[j] + i;
			$(elle).css('height', $(elle).css('width'));
		}
	}
	}
	
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	//0 = white 1 = black
	//1 = pawn 2= king 3=queen 4=bishop 5=knight 6 =rook 0= clear
var board;
var active = false;
var activePiece;
var activeId;
var map = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7};
var black = [];
var white = [];
var bKing;
var wKing;
var turn = true;
$(document).ready(function(){
	for (var i = 7; i>=0;i--) {
		var div = ['<div class="row board">',
				'<label class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></label>',
				'<div id="' + i + '" class="row col-lg-8 col-md-8 col-sm-8 col-xs-8"></div>',
				'<label class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></label></div>'];	
		$('#board').append(div.join('\n'));
		for (var j =0; j < 8; j++) {
			var letter = letters[j];
			$("#" + i).append('<button id="' + letter + i + '" class="col-lg-1 col-md-1 col-sm-1 col-xs-1" style="width: 12.499999995%" onclick="move(' + letter + i + ')"></button>');
		}
	}
	square();
	newBoard();
	drawBoard();
	
});

function newBoard() {
	bKing = new blackKing(7, 4);
	wKing = new whiteKing(0, 4);
	board = [
			[new whiteRook(0,0), new whiteKnight(0,1), new whiteBishop(0,2), 
			new whiteQueen(0,3), wKing, new whiteBishop(0, 5), 
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
			new blackQueen(7,3), bKing, new blackBishop(7, 5), 
			new blackKnight(7, 6), new blackRook(7,7)]	
	];
	insertPieces();
}

function drawBoard() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			var piece = board[i][j];
			if (piece != '0') {
				piece.draw();
			}
		}
	}
}

function move(info) {
	var id = info.id;
	var y = parseInt(id[1]);
	var x = map[id[0]];
	var piece = board[y][x];
	//cannot move when not your turn
	if (turn) {
		$('#turn').html("White's turn");
	} else {
		$('#turn').html("Black's turn");
	}
	
	if (checker(turn)) {
		$('#check').html("You are in check");
	} else {
		$('#check').html("");
	}
	//console.log(checker(turn));
	
	
	if (!active && piece != '0') {
		if (piece.color != turn) {
			return;
		}
		$('#' + id).css('border-color', 'yellow');
		activePiece = piece;
		activeId = id;
		active = true;
		return;
	}
	
	if (active && piece == activePiece) {
		$('#' + activeId).css('border-color', '#eee');
		active = false;
		return;
	}
	
	if (active && piece == '0') {
		$('#' + activeId).css('border-color', '#eee');
		if (activePiece.move(y,x)) {
			movePiece(y, x, id);
			turn = !turn;
			
		} else {
			active = false;
		}
		return;
	}
	if (active && piece != '0') {
		$('#' + activeId).css('border-color', '#eee');
		if (activePiece.take(y,x, piece)) {
			movePiece(y, x, id);
			turn = !turn;
		} else {
			active = false;
		}
		return;
	}
}

function movePiece(y, x, id) {
	$('#' + activeId).css('background-image', 'none');
	board[activePiece.y][activePiece.x] = '0';
	board[y][x] = activePiece;
	activePiece.x = x; activePiece.y = y;
	$('#' + id).css('background-image', activePiece.i);
	active = false;
}

function insertPieces() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			var piece = board[i][j];
			if (piece != '0') {
				if (piece.color) {
					white.push(piece);
				} else {
					black.push(piece);
				}
			}
		}
	}
}

function checker(bool) {
	var pieces = bool ? black : white;
	var king = bool ? wKing : bKing;
	for (p of pieces) {
		if (p.take(king.y, king.x, king)) {
			return true;
		}
	}
	return false;
	
}

$(window).resize(function() {
	square();
});

//make buttons square
function square() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			var elle = '#' + letters[j] + i;
			$(elle).css('height', $(elle).css('width'));
		}
	}
}
	
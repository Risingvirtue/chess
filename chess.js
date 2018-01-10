var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	//0 = white 1 = black
	//1 = pawn 2= king 3=queen 4=bishop 5=knight 6 =rook 0= clear
var board;
var active = false;
var activePiece;
var map = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7};
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
			}
		}
	}
}

function move(info) {
	var id = info.id;
	
	var y = id[1];
	var x = map[id[0]];
	var piece = board[y][x];
	if (!active && piece != '0') {
		$('#' + id).css('background-color', 'red');
		activePiece = piece;
		active = true;
		return;
	}
	if (active && piece == '0') {
		movePiece(y, x, id);
		return;
	}
	
	if (active && piece != '0') {
		
			//movePiece(y, x, id);
		
		
		return;
	}
}

function movePiece(y, x, id) {
	var prevId = letters[activePiece.x] + activePiece.y;
	$('#' + prevId).css('background-image', 'none');
	$('#' + prevId).css('background-color', 'blue');
	board[activePiece.y][activePiece.x] = '0';
	board[y][x] = activePiece;
	activePiece.x =x; activePiece.y = y;
	$('#' + id).css('background-image', activePiece.i);
	active = false;
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
	
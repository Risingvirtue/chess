$(document).ready(function(){
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
	//0 = white 1 = black
	//1 = pawn 2= king 3=queen 4=bishop 5=knight 6 =rook 0= clear
	var board;
	newBoard();
	var bKing = new Image();
	bKing.src = "./img/bKing.png";
	for (var i = 8; i>=0;i--) {
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
	$('#a7').css('background-image', 'url(' + bKing.src + ')');
	
});


function newBoard() {
	board = [
			['06', '05', '04', '03', '02', '04', '05', '06'],
			['01', '01', '01', '01', '01', '01', '01', '01'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['0', '0', '0', '0', '0', '0', '0', '0'],
			['11', '11', '11', '11', '11', '11', '11', '11'],
			['16', '15', '14', '13', '12', '14', '15', '16']	
	];
}

function drawBoard() {
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			
		}
	}
}

function blackPawn() {
	
}

$(window).resize(function() {
	$('#a7').css('height', $('#a7').css('width')); 
});
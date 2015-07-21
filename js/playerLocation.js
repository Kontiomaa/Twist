var p1Loc=0;
var p2Loc=0;
var p3Loc=0;
var p4Loc=0;

var p1x/*=50*/;
var p1y/*=670*/;
var p2x/*=90*/;
var p2y/*=670*/;
var p3x/*=50*/;
var p3y/*=710*/;
var p4x/*=90*/;
var p4y/*=710*/;

var firstPlace=0;
var secondPlace=0;
var thirdPlace=0;
var fourthPlace=0;

var p1fin=0;
var p2fin=0;
var p3fin=0;
var p4fin=0;

function checkPlacement(player){//when someone gets to the finish
	if(firstPlace===0){
		alert("Player "+player+" finished first!");
		firstPlace=1;
		endTurn(player);
	}else if(secondPlace===0){
		alert("Player "+player+" finished second!");
		secondPlace=1;
		endTurn(player);
	}else if(thirdPlace===0){
		alert("Player "+player+" finished third!");
		thirdPlace=1;
		endTurn(player);
	}else if(fourthPlace===0){
		alert("Player "+player+" finished fourth!");
		fourthPlace=1;
		//endTurn(player);
	}

	if(player===1){
		p1fin=1;
	}else if(player===2){
		p2fin=1;
	}else if(player===3){
		p3fin=1;
	}else if(player===4){
		p4fin=1;
	}
	
	if(fourthPlace){//last place, not fourth... Fix next!
		alert("Game Over\n\nNew Game?");
		endGame();
	}
}

function getP1Location(){
	getP1X();
}
function setP1Location(newLoc){
	p1Loc+=newLoc;
	if(p1Loc>83){
		p1Loc=83;
	}
	if(p1Loc===83){
		checkPlacement(1);
	}
}
function getP2Location(){
	getP2X();
}
function setP2Location(newLoc){
	p2Loc+=newLoc;
	if(p2Loc>83){
		p2Loc=83;
	}
	if(p2Loc===83){
		checkPlacement(2);
	}
}
function getP3Location(){
	getP3X();
}
function setP3Location(newLoc){
	p3Loc+=newLoc;
	if(p3Loc>83){
		p3Loc=83;
	}
	if(p3Loc===83){
		checkPlacement(3);
	}
}
function getP4Location(){
	getP4X();
}
function setP4Location(newLoc){
	p4Loc+=newLoc;
	if(p4Loc>83){
		p4Loc=83;
	}
	if(p4Loc===83){
		checkPlacement(4);
	}
}

function loadP1X(){
	return p1x;
}
function saveP1X(data){
	p1x=data.pl1Loc[p1Loc].x;
	getP1Y();
}
function getP1X(){
	$.getJSON('json/locations.json', saveP1X);
}
function loadP1Y(){
	return p1y;
}
function saveP1Y(data){
	p1y=data.pl1Loc[p1Loc].y;
	printPlayer1();
}
function getP1Y(){
	$.getJSON('json/locations.json', saveP1Y);
}

function loadP2X(){
	return p2x;
}
function saveP2X(data){
	p2x=data.pl2Loc[p2Loc].x;
	getP2Y();
}
function getP2X(){
	$.getJSON('json/locations.json', saveP2X);
}
function loadP2Y(){
	return p2y;
}
function saveP2Y(data){
	p2y=data.pl2Loc[p2Loc].y;
	printPlayer2();
}
function getP2Y(){
	$.getJSON('json/locations.json', saveP2Y);
}

function loadP3X(){
	return p3x;
}
function saveP3X(data){
	p3x=data.pl3Loc[p3Loc].x;
	getP3Y();
}
function getP3X(){
	$.getJSON('json/locations.json', saveP3X);
}
function loadP3Y(){
	return p3y;
}
function saveP3Y(data){
	p3y=data.pl3Loc[p3Loc].y;
	printPlayer3();
}
function getP3Y(){
	$.getJSON('json/locations.json', saveP3Y);
}

function loadP4X(){
	return p4x;
}
function saveP4X(data){
	p4x=data.pl4Loc[p4Loc].x;
	getP4Y();
}
function getP4X(){
	$.getJSON('json/locations.json', saveP4X);
}
function loadP4Y(){
	return p4y;
}
function saveP4Y(data){
	p4y=data.pl4Loc[p4Loc].y;
	printPlayer4();
}
function getP4Y(){
	$.getJSON('json/locations.json', saveP4Y);
}
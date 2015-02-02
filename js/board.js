function printCanvas(){
	var canvasArea=document.getElementById("game");
	var boardCanvas=document.getElementById("board");
	board.width = canvasArea.clientWidth;
	board.height = canvasArea.clientHeight;
	var context=boardCanvas.getContext("2d");

	//board tiles
	var x=30;
	var y=50;
	for(var i=0;i<12;i++){
		for(var j=0;j<7;j++)
		{
			context.beginPath();
			context.rect(x,y,80,80);
			context.stroke();
			context.closePath();
			y+=100;
		}
		x+=100;
		y=50;
	}
	
	//start
	context.fillStyle = "black";
	context.font = "bold 52px Arial";
	context.fillText("S", 53, 710);
	
	//finish
	context.fillStyle = "black";
	context.font = "bold 52px Arial";
	context.fillText("F", 855, 410);
	
	//dots

	//left vertical
	x=70;
	var maxY=6;
	for(var i=0;i<4;i++){
		if(i===0||i===1){
			y=640;
		}
		else if(i>2){
			y=440;
			maxY--;
		}
		else if(i>1){
			y=540;
			maxY--;
		}
		for(var j=0;j<maxY;j++){
			context.fillStyle="black";
			context.beginPath();
			context.arc(x,y,5,0,2*Math.PI);
			context.closePath();
			context.fill();
			y-=100;
		}
		x+=100;
		maxY--;
	}
	
	//right vertical
	x=1170;
	var maxY=6;
	for(var i=0;i<4;i++){
		if(i===0){
			y=640;
		}
		else if(i===1){
			y=540;
			maxY--;
		}
		else if(i>2){
			y=440;
			maxY--;
		}
		else if(i>1){
			y=440;
			maxY--;
		}
		for(var j=0;j<maxY;j++){
			context.fillStyle="black";
			context.beginPath();
			context.arc(x,y,5,0,2*Math.PI);
			context.closePath();
			context.fill();
			y-=100;
		}
		x-=100;
		maxY--;
	}
	
	//top horizontal
	y=90;
	var maxX=11;
	for(var i=0;i<4;i++){
		if(i===0){
			x=120;
		}
		else if(i>2){
			x=420;
			maxX--;
		}
		else if(i>1){
			x=320;
			maxX--;
		}
		else if(i>0){
			x=220;
			maxX--;
		}
		for(var j=0;j<maxX;j++){
			context.fillStyle="black";
			context.beginPath();
			context.arc(x,y,5,0,2*Math.PI);
			context.closePath();
			context.fill();
			x+=100;
		}
		y+=100;
		maxX--;
	}
	
	//bottom horizontal
	y=690;
	var maxX=10;
	for(var i=0;i<4;i++){
		if(i===0){
			x=1120;
		}
		else if(i>2){
			x=820;
			maxX--;
		}
		else if(i>1){
			x=920;
			maxX--;
		}
		else if(i>0){
			x=1020;
			maxX--;
		}
		for(var j=0;j<maxX;j++){
			context.fillStyle="black";
			context.beginPath();
			context.arc(x,y,5,0,2*Math.PI);
			context.closePath();
			context.fill();
			x-=100;
		}
		y-=100;
		maxX--;
	}

	getPlayerLocations();
}

function getPlayerLocations(){
	getP1Location();
	getP2Location();
	getP3Location();
	getP4Location();
}

function printPlayer1(){
	var x=loadP1X();
	var y=loadP1Y();

	var boardCanvas=document.getElementById("board");
	var context=boardCanvas.getContext("2d");
	
	context.fillStyle="blue";
	context.beginPath();
	context.arc(x,y,20,0,2*Math.PI);
	context.closePath();
	context.fill();
	context.lineWidth=2;
	context.strokeStyle='black';
	context.stroke()
}
function printPlayer2(){
	var x=loadP2X();
	var y=loadP2Y();
	
	var boardCanvas=document.getElementById("board");
	var context=boardCanvas.getContext("2d");

	context.fillStyle="green";
	context.beginPath();
	context.arc(x,y,20,0,2*Math.PI);
	context.closePath();
	context.fill();
	context.lineWidth=2;
	context.strokeStyle='black';
	context.stroke();
}

function printPlayer3(){
	var x=loadP3X();
	var y=loadP3Y();
	
	var boardCanvas=document.getElementById("board");
	var context=boardCanvas.getContext("2d");

	context.fillStyle="darkorange";
	context.beginPath();
	context.arc(x,y,20,0,2*Math.PI);
	context.closePath();
	context.fill();
	context.lineWidth=2;
	context.strokeStyle='black';
	context.stroke();
}
function printPlayer4(){
	var x=loadP4X();
	var y=loadP4Y();
	
	var boardCanvas=document.getElementById("board");
	var context=boardCanvas.getContext("2d");

	context.fillStyle="darkred";
	context.beginPath();
	context.arc(x,y,20,0,2*Math.PI);
	context.closePath();
	context.fill();
	context.lineWidth=2;
	context.strokeStyle='black';
	context.stroke();
}
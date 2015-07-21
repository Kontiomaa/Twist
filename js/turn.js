var p1Active=1;
var p2Active=1;
var p3Active=1;
var p4Active=1;

function startTurn(playerTurn){
	if(playerTurn==1){
		document.getElementById("row2").style.height="";
		document.getElementById("row2").style.backgroundColor="";
		document.getElementById("p2Card").disabled=true;
		document.getElementById("p2Throw").disabled=true;
		document.getElementById("p2End").disabled=true;
				
		if(maxPlayers>2)
		{
			document.getElementById("row3").style.height="";
			document.getElementById("row3").style.backgroundColor="";
			document.getElementById("p3Card").disabled=true;
			document.getElementById("p3Throw").disabled=true;
			document.getElementById("p3End").disabled=true;
		}
				
		if(maxPlayers==4)
		{
			document.getElementById("row4").style.height="";
			document.getElementById("row4").style.backgroundColor="";
			document.getElementById("p4Card").disabled=true;
			document.getElementById("p4Throw").disabled=true;
			document.getElementById("p4End").disabled=true;
		}
		document.getElementById("row1").style.height="55px";
		document.getElementById("row1").style.backgroundColor="lightblue";
		document.getElementById("p1Card").disabled=false;
		document.getElementById("p1Throw").disabled=false;
		document.getElementById("p1End").disabled=false;
	}
	else if(playerTurn==2){	
		document.getElementById("row1").style.height="";
		document.getElementById("row1").style.backgroundColor="";
		document.getElementById("p1Card").disabled=true;
		document.getElementById("p1Throw").disabled=true;
		document.getElementById("p1End").disabled=true;
		
		if(maxPlayers>2)
		{
			document.getElementById("row3").style.height="";
			document.getElementById("row3").style.backgroundColor="";
			document.getElementById("p3Card").disabled=true;
			document.getElementById("p3Throw").disabled=true;
			document.getElementById("p3End").disabled=true;
		}
		
		if(maxPlayers==4)
		{
			document.getElementById("row4").style.height="";
			document.getElementById("row4").style.backgroundColor="";
			document.getElementById("p4Card").disabled=true;
			document.getElementById("p4Throw").disabled=true;
			document.getElementById("p4End").disabled=true;
		}
		
		document.getElementById("row2").style.height="55px";
		document.getElementById("row2").style.backgroundColor="lightgreen";
		document.getElementById("p2Card").disabled=false;
		document.getElementById("p2Throw").disabled=false;
		document.getElementById("p2End").disabled=false;
	}
	else if(playerTurn==3){
		document.getElementById("row1").style.height="";
		document.getElementById("row1").style.backgroundColor="";
		document.getElementById("p1Card").disabled=true;
		document.getElementById("p1Throw").disabled=true;
		document.getElementById("p1End").disabled=true;
		
		document.getElementById("row2").style.height="";
		document.getElementById("row2").style.backgroundColor="";
		document.getElementById("p2Card").disabled=true;
		document.getElementById("p2Throw").disabled=true;
		document.getElementById("p2End").disabled=true;
		
		if(maxPlayers==4)
		{
			document.getElementById("row4").style.height="";
			document.getElementById("row4").style.backgroundColor="";
			document.getElementById("p4Card").disabled=true;
			document.getElementById("p4Throw").disabled=true;
			document.getElementById("p4End").disabled=true;
		}
				
		document.getElementById("row3").style.height="55px";
		document.getElementById("row3").style.backgroundColor="orange";
		document.getElementById("p3Card").disabled=false;
		document.getElementById("p3Throw").disabled=false;
		document.getElementById("p3End").disabled=false;
	}	
	else if(playerTurn==4){
		document.getElementById("row1").style.height="";
		document.getElementById("row1").style.backgroundColor="";
		document.getElementById("p1Card").disabled=true;
		document.getElementById("p1Throw").disabled=true;
		document.getElementById("p1End").disabled=true;
		
		document.getElementById("row2").style.height="";
		document.getElementById("row2").style.backgroundColor="";
		document.getElementById("p2Card").disabled=true;
		document.getElementById("p2Throw").disabled=true;
		document.getElementById("p2End").disabled=true;
		
		document.getElementById("row3").style.height="";
		document.getElementById("row3").style.backgroundColor="";
		document.getElementById("p3Card").disabled=true;
		document.getElementById("p3Throw").disabled=true;
		document.getElementById("p3End").disabled=true;
		
		document.getElementById("row4").style.height="55px";
		document.getElementById("row4").style.backgroundColor="red";
		document.getElementById("p4Card").disabled=false;
		document.getElementById("p4Throw").disabled=false;
		document.getElementById("p4End").disabled=false;
	}
}
function endGame(){
	document.getElementById("row1").style.height="";
	document.getElementById("row1").style.backgroundColor="";
	document.getElementById("p1Card").disabled=true;
	document.getElementById("p1Throw").disabled=true;
	document.getElementById("p1End").disabled=true;
	
	document.getElementById("row2").style.height="";
	document.getElementById("row2").style.backgroundColor="";
	document.getElementById("p2Card").disabled=true;
	document.getElementById("p2Throw").disabled=true;
	document.getElementById("p2End").disabled=true;
	
	document.getElementById("row3").style.height="";
	document.getElementById("row3").style.backgroundColor="";
	document.getElementById("p3Card").disabled=true;
	document.getElementById("p3Throw").disabled=true;
	document.getElementById("p3End").disabled=true;
		
	document.getElementById("row4").style.height="";
	document.getElementById("row4").style.backgroundColor="";
	document.getElementById("p4Card").disabled=true;
	document.getElementById("p4Throw").disabled=true;
	document.getElementById("p4End").disabled=true;
	
	for(var i=0;i<maxPlayers;i++){
		document.getElementById("p"+(i+1)+"Dice").innerHTML="";
	}
}
/*function checkActive(){//when a new turn starts

}*/
function oldEndTurn(playerTurn){//bug! If Player 4 finishes first, forced to player 1 although player 1 might have also finished at some point.
	if(playerTurn==maxPlayers){ //maxPlayers must be 4 at the moment...
		if(!p1fin){
			playerTurn=1;
		}
		else if(!p2fin){
			playerTurn=2;
		}
		else if(!p3fin){
			playerTurn=3;
		}
		else if(!p4fin){
			playerTurn=4;
		}
		else{
			alert("Everyone has reached the goal");
		}
		for(var i=0;i<maxPlayers;i++){
			document.getElementById("p"+(i+1)+"Dice").innerHTML="";//or .value? Difference? If it works, don't fix it.
		}
	}else{
		playerTurn++;
		if(playerTurn===2&&p2fin){
			playerTurn++;
		}
		if(playerTurn===3&&p3fin){
			if(maxPlayers>3){
				playerTurn++;
			}
		}
		if(playerTurn===4&&p4fin){
			playerTurn=1;
			if(p1fin&&p2fin&&p3fin){
				alert("Everyone has reached the goal");
			}
			else{
				for(var i=0;i<maxPlayers;i++){
					document.getElementById("p"+(i+1)+"Dice").innerHTML="";
				}
				endTurn(maxPlayers);
			}
		}
	}
	//checkActive(playerTurn);
	startTurn(playerTurn);
}

function endTurn(playerTurn){ //check logic again, to not miss anything (check earlier players again before alerting that everyone is done)...
	if(playerTurn===1){
		if(!p2fin){
			playerTurn=2;
		}
		else{
			if(maxPlayers>2){
				if(!p3fin){
					playerTurn=3;
				}
				else{
					if(maxPlayers>3){
						if(!p4fin){
							playerTurn=4;
						}
						else if(!p1fin){
							playerTurn=1;
						}
						else{
							console.log("End of player 1 turn, 4 players and everyone finished");
							alert("Everyone has reached the goal");
							//endGame();
						}
					}
					else{
						console.log("End of player 1 turn, 3 players and everyone finished");
						alert("Everyone has reached the goal");
						//endGame();
					}
				}
			}
			else{
				if(!p1fin){
					playerTurn=1;
				}
				else{
					console.log("End of player 1 turn, only 2 players and both finished");
					alert("Everyone has reached the goal");
					//endGame();
				}
			}
		}
	}
	else if(playerTurn===2){
		if(maxPlayers>2){
			if(!p3fin){
				playerTurn=3;
			}
			else{
				if(maxPlayers>3){
					if(!p4fin){
						playerTurn=4;
					}
					else{
						if(!p1fin){
							playerTurn=1;
						}
						else if(!p2fin){
							playerTurn=2;
						}
						else{
							console.log("End of player 2 turn, 4 players and everyone finished");
							alert("Everyone has reached the goal");
							//endGame();
						}
					}
				}
				else{
					console.log("End of player 2 turn, 3 players and everyone finished");
					alert("Everyone has reached the goal");
					//endGame();
				}
			}
		}
		else{
			if(!p1fin){
				playerTurn=1;
			}
			else{
				console.log("End of player 2 turn, only 2 players and both finished");
				alert("Everyone has reached the goal");
				//endGame();
			}
		}
	}
	else if(playerTurn===3){
		if(maxPlayers>3){
			if(!p4fin){
				playerTurn=4;
			}
			else{
				if(!p1fin){
					playerTurn=1;
				}
				else if(!p2fin){
					playerTurn=2;
				}
				else if(!p3fin){
					playerTurn=3;
				}
				else{
					console.log("End of player 2 turn, 4 players and everyone finished");
					alert("Everyone has reached the goal");
					//endGame();
				}
			}
		}
		else{
			if(!p1fin){
				playerTurn=1;
			}
			else if(!p2fin){
				playerTurn=2;
			}
			else if(!p3fin){
				playerTurn=3;
			}
			else{
				console.log("End of player 2 turn, 3 players and everyone finished");
				alert("Everyone has reached the goal");
				//endGame();
			}
		}
	}
	else if(playerTurn===4){
		if(!p1fin){
			playerTurn=1;
		}
		else if(!p2fin){
			playerTurn=2;
		}
		else if(!p3fin){
			playerTurn=3;
		}
		else if(!p4fin){
			playerTurn=4;
		}
		else{
			console.log("End of player 4 turn and everyone finished");
		}
	}
	//need logic for this...
	/*for(var i=0;i<maxPlayers;i++){
		document.getElementById("p"+(i+1)+"Dice").innerHTML="";//or .value? Difference? If it works, don't fix it.
	}*/
	startTurn(playerTurn);
}
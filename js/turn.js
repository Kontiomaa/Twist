function checkTurn(playerTurn){
	if(playerTurn==1)
	{
		document.getElementById("row"+maxPlayers).style.height="";
		document.getElementById("row"+maxPlayers).style.backgroundColor="";
		document.getElementById("p"+maxPlayers+"Card").disabled=true;
		document.getElementById("p"+maxPlayers+"Throw").disabled=true;
		document.getElementById("p"+maxPlayers+"End").disabled=true;
		
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
	else if(playerTurn==2)
	{	
		document.getElementById("row1").style.height="";
		document.getElementById("row1").style.backgroundColor="";
		document.getElementById("p1Card").disabled=true;
		document.getElementById("p1Throw").disabled=true;
		document.getElementById("p1End").disabled=true;
			
		document.getElementById("row2").style.height="55px";
		document.getElementById("row2").style.backgroundColor="lightgreen";
		document.getElementById("p2Card").disabled=false;
		document.getElementById("p2Throw").disabled=false;
		document.getElementById("p2End").disabled=false;
	}
	else if(playerTurn==3)
	{
		document.getElementById("row2").style.height="";
		document.getElementById("row2").style.backgroundColor="";
		document.getElementById("p2Card").disabled=true;
		document.getElementById("p2Throw").disabled=true;
		document.getElementById("p2End").disabled=true;
				
		document.getElementById("row3").style.height="55px";
		document.getElementById("row3").style.backgroundColor="orange";
		document.getElementById("p3Card").disabled=false;
		document.getElementById("p3Throw").disabled=false;
		document.getElementById("p3End").disabled=false;
	}	
	else if(playerTurn==4)
	{	
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
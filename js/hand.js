function throwDie(p)
{
	dieValue=Math.floor((Math.random()*6)+1);
	document.getElementById("p"+p+"Dice").innerHTML=dieValue;
	document.getElementById("p"+p+"Throw").disabled=true;
	
	if(p===1){
		setP1Location(dieValue);
	}
	else if(p===2){
		setP2Location(dieValue);
	}
	else if(p===3){
		setP3Location(dieValue);
	}
	else if(p===4){
		setP4Location(dieValue);
	}
	printCanvas();
}
function showCards(p)
{
	alert(p+"'s cards");
}
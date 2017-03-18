function doLevel1(){
	var answer = prompt("Enter you answer")
	alert("2"); 
	hide("level1"); 
	show("level2"); 
	
}

function doLevel2(){
    var answer = prompt("Enter you answer")
	alert("hii");
	hide("level2");
	show("level3");	
	
}

function doLevel3(){
	var answer = prompt("Enter you answer")
	alert("hhi");
	
}

function show(id){
	var el = document.getElementById(id);
	el.classList.remove("hidden");
}

function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden")
}

var score = 0;

function addpoints(points){
	score = score + points;
	document.getElementById("score").innerHTML = score;
}
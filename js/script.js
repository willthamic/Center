function tick (){
	// console.log("tick");
	var x = 0.001;
	if (crosshair1.PX > 0) {
		crosshair1.VX -= x;
		crosshair1.PX -= x;
	}
	if (crosshair1.PY > 0) {
		crosshair1.VY -= x; 
		crosshair1.PY -= x;
	}
	if (crosshair2.PX > 0) {
		crosshair2.VX -= x; 
		crosshair2.PX -= x;
	}
	if (crosshair2.PY > 0) {
		crosshair2.VY -= x; 
		crosshair2.PY -= x;
	}
	if (crosshair1.PX < 0) {
		crosshair1.VX += x; 
		crosshair1.PX += x;
	}
	if (crosshair1.PY < 0) {
		crosshair1.VY += x; 
		crosshair1.PY += x;
	}
	if (crosshair2.PX < 0) {
		crosshair2.VX += x; 
		crosshair2.PX += x;
	}
	if (crosshair2.PY < 0) {
		crosshair2.VY += x; 
		crosshair2.PY += x;
	}
	crosshair1.CX = crosshair1.CX + crosshair1.VX;
	crosshair1.CY = crosshair1.CY + crosshair1.VY;
	crosshair2.CX = crosshair2.CX + crosshair2.VX;
	crosshair2.CY = crosshair2.CY + crosshair2.VY;
	set(crosshair1.CX,crosshair1.CY,1);
	set(crosshair2.CX,crosshair2.CY,2);
	checkStatus();
	time += 0.01;
}

function checkStorage() {
	var  version = '1';
	if (localStorage.length == 0||localStorage.getItem('version') != version) {
		localStorage.clear();
		localStorage.setItem('version', version);
		localStorage.setItem('high', '0');
	}
}

function checkStatus () {
	if (crosshair1.CX>=50||crosshair1.CX<=-50||crosshair1.CY>=50||crosshair1.CY<=-50||crosshair2.CX>=50||crosshair2.CX<=-50||crosshair2.CY>=50||crosshair2.CY<=-50) {
		if (localStorage.getItem('high') < time) {
			localStorage.setItem('high', time.toFixed(2));
		}
		alert("Time: " + time.toFixed(2) + "\n" + "Highscore: " + localStorage.getItem('high'));
		reset();
	}
}

function getRandom() {
	return (Math.random()-0.5)*2;
}

function reset () {
	crosshair1.PX = 0;
	crosshair1.PY = 0;
	crosshair2.PX = 0;
	crosshair2.PY = 0;
	crosshair1.VX = 0;
	crosshair1.VY = 0;
	crosshair2.VX = 0;
	crosshair2.VY = 0;
	crosshair1.CX = 0;
	crosshair1.CY = 0;
	crosshair2.CX = 0;
	crosshair2.CY = 0;
	time = 0;
}

function timeIncrement(){
	time += 0.01;
}

function set(tX, tY, cross) {
	if (cross == 1) {
		document.getElementById("crosshair1").style.transform = "translateX("+ tX +"px) translateY("+ tY +"px)";
	} else if (cross == 2) {
		document.getElementById("crosshair2").style.transform = "translateX("+ tX +"px) translateY("+ tY +"px)";
	}
}

function randVel(){
	crosshair1.PX = getRandom();
	crosshair1.PY = getRandom();
	crosshair2.PX = getRandom();
	crosshair2.PY = getRandom();
}
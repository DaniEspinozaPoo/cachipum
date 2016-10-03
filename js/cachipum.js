var jugadaUser;
var jugadaCompu;

var jugadaUser = prompt ("¿Piedra, papel o tijera?")
console.log(jugadaUser);

var numRandom = Math.random ()*2;
var numRedondo = Math.round (numRandom);
console.log(numRedondo);

/* 0:piedra / 1: tijera / 2:papel */

if(numRedondo == 0){
	jugadaCompu = "piedra";
}else if(numRedondo == 1) {
	jugadaCompu = "tijera";
}else {
	jugadaCompu = "papel";
}

alert("ahora le toca el computador elegir");
console.log (jugadaCompu);
alert("el computador eligio : " + jugadaCompu);

if (jugadaUser == "piedra") {
	if (jugadaCompu == "piedra") {
		alert("¡Oh! empate");
	}else if(jugadaCompu == "tijera"){
	alert("¡Ganaste!");		
	}else{
	alert("¡Oh! Gano el compu");	
	}
}else if (jugadaUser == "tijera"){
	if (jugadaCompu == "tijera"){		
	   alert("¡Oh! empate");
	}else if(jugadaCompu == "papel"){		
	   alert("¡Ganaste!");
	}else{
	alert("¡Oh! Gano el compu");	
	}
}else{
	if (jugadaCompu == "papel") {
		alert ("¡Oh! empate");
	}else if (jugadaCompu == "piedra") {
		 alert("¡Ganaste!");
		}else {
		 alert("¡Oh! Gano el compu");		
		}
}

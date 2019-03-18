function nbrMagicFacil() {
	var resultat = Math.round(Math.random() * 10);
	var i = 0;

	do{
		i++;
		var nbrEntrer = parseInt(prompt("choisissez un nombre entre 0 et 10"));

		if (nbrEntrer == resultat) {
			alert("*** BRAVO VOUS AVEZ TROUVÉ LE NOMBRE MAGIQUE EN " + i +" coup ***");
			break;
		}else if(nbrEntrer < resultat ){
			alert("désolé le nombre magique est plus il vous reste " + (5-i) + " coup" );

		}else{
			alert("désolé le nombre magique est moins il vous reste " + (5-i) + " coup" );

		}

		
	}while(i <5)

	if (nbrEntrer != resultat) {
		alert("vous avez perdu; le nombre magique était " + resultat);
	}
}

function nbrMagicMoyen() {
	var resultat = Math.round(Math.random() * 50);
	var i = 0;

	do{
		i++;
		var nbrEntrer = parseInt(prompt("choisissez un nombre entre 0 et 50"));

		if (nbrEntrer == resultat) {
			alert("*** BRAVO VOUS AVEZ TROUVÉ LE NOMBRE MAGIQUE EN " + i +" coup ***");
			break;
		}else if(nbrEntrer < resultat ){
			alert("désolé le nombre magique est plus il vous reste " + (5-i) + " coup" );
		}else{
			alert("désolé le nombre magique est moins il vous reste " + (5-i) + " coup" );
		}

		
	}while(i <5)

	if (nbrEntrer != resultat) {
		alert("vous avez perdu; le nombre magique était " + resultat);
	}
}

function nbrMagicDificil() {
	var resultat = Math.round(Math.random() * 100);
	var i = 0;

	do{
		i++;
		var nbrEntrer = parseInt(prompt("choisissez un nombre entre 0 et 100"));

		if (nbrEntrer == resultat) {
			alert("*** BRAVO VOUS AVEZ TROUVÉ LE NOMBRE MAGIQUE EN " + i +" coup ***");
			break;
		}else if(nbrEntrer < resultat ){
			alert("désolé le nombre magique est plus il vous reste " + (5-i) + " coup" );
		}else{
			alert("désolé le nombre magique est moins il vous reste " + (5-i) + " coup" );
		}

		
	}while(i <5)

	if (nbrEntrer != resultat) {
		alert("vous avez perdu; le nombre magique était " + resultat);
	}
}

// console.log( nbrEntrer + "<br>" + resultat);
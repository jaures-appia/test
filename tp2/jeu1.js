
function combat(){
	
	
	var tabResult1 = [], tabResult2 = [];

	

	var i = 0;
	
	do{
		i++;
		var joueur1 = parseInt(prompt("joueur 1 entrez un nombre svp ! (4 chiffres max)"));
	var joueur2 = parseInt(prompt("joueur 2 entrez un nombre svp ! (4 chiffres max)"));
		

		var a = Math.round(Math.random() * 10);
		var b = Math.round(Math.random() * 10);
		var w = Math.round(Math.random() * 50);
		var x = Math.round(Math.random() * 50);
		var y = Math.round(Math.random() * 100);
		var z = Math.round(Math.random() * 100);

		joueur1 = Math.round(((joueur1 / y) - w) * a );
		
			tabResult1.push(joueur1);
		

		joueur2 = Math.round(((joueur2 / z) - x) * b) ;
		
			tabResult2.push(joueur2);
		
		if (joueur1 < joueur2) {
			alert("joueur1 à " + joueur1 + "  joueur2 à " + joueur2 + "; joueur2 est le vaiceur de la manche " + i);
		}else if(joueur1 > joueur2){
			alert("joueur1 à " + joueur1 + "  joueur2 à " + joueur2 + "; joueur1 est le vaiceur de la manche " + i);
		}else{
			alert("joueur1 à " + joueur1 + "  joueur2 à " + joueur2 + "; joueur1 et joueur2 sont égaux à la manche " + i);

		}

		// console.log("a = " +a + " , " + "b = "+b + " ," + "w = "+w +" ," +"x = "+x + " ," + "y = "+y + " ," + "z = "+z + " ," + "joueur1 = "+joueur1 + " ," + "joueur2 = "+joueur2);

	}while(i < 3)

	result1 = tabResult1[0] + tabResult1[1] + tabResult1[2];
	result2 = tabResult2[0] + tabResult2[1] + tabResult2[2];
		// console.log("joueur1 = "+result1 + " et " + "joueur2 = " +result2)
	if (joueur1 < joueur2) {
			alert("joueur1 totalise : " + result1 + "  joueur2 totalise : " + result2 + "; joueur2 est le vaiceur du combat ");
	}else if(joueur1 > joueur2){
		alert("joueur1 totalise : " + result1 + "  joueur2 totalise : " + result2 + "; joueur1 est le vaiceur du combat ");
	}else{
		alert("joueur1 totalise : " + result1 + "  joueur2 totalise : " + result2 + "; joueur1 et joueur2 sont égaux à la fin de ce combat");

	}

}


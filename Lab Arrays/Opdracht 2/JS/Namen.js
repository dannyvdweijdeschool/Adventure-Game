var aantal = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
var namen = [];

if (aantal > 2) {
	for (i = 1; i <= aantal; i++){
		var ingevoerdenamen = prompt("Wat is uw naam? " + i + "/" + aantal);
		namen.push(ingevoerdenamen);
	}
}else{
	alert("Je moet minimaal 3 invoeren druk op f5 om het opnieuw te proberen.");
}

var paragraaf1 = document.createElement("p");
var text = document.createTextNode(namen);
paragraaf1.appendChild(text);

document.getElementById("namen").appendChild(paragraaf1);



var paragraaf2 = document.createElement("p");

for (a = namen.length-1; a >= 0; a--){
	var text2 = document.createTextNode(namen[a] + " ");
	paragraaf2.appendChild(text2);
	document.getElementById("omgekeerd").appendChild(paragraaf2);
}
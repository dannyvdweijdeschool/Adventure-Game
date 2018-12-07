var days = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

var paragraaf = document.createElement("p");

var text = document.createTextNode(days); 
paragraaf.appendChild(text);

document.getElementById("weekdays").appendChild(paragraaf);




var paragraaf2 = document.createElement("p");

for (i = 0; i <= 4; i++){
	var text2 = document.createTextNode(days[i] + ", ");
	paragraaf2.appendChild(text2);
	document.getElementById("workdays").appendChild(paragraaf2);
}




var paragraaf3 = document.createElement("p");

for (a = 5; a <= 6; a++){
	var text3 = document.createTextNode(days[a] + ", ");
	paragraaf3.appendChild(text3);
	document.getElementById("weekend").appendChild(paragraaf3);
}




var paragraaf4 = document.createElement("p");

for (b = 6; b >=0; b--){
	var text4 = document.createTextNode(days[b] + ", ");
	paragraaf4.appendChild(text4);
	document.getElementById("backwards").appendChild(paragraaf4);
}




var paragraaf5 = document.createElement("p");

for (c = 4; c >= 0; c--){
	var text5 = document.createTextNode(days[c] + ", ");
	paragraaf5.appendChild(text5);
	document.getElementById("workdaysbackwards").appendChild(paragraaf5);
}





var paragraaf6 = document.createElement("p");

for (d = 6; d >= 5; d--){
	var text6 = document.createTextNode(days[d] + ", ");
	paragraaf6.appendChild(text6);
	document.getElementById("weekendbackwards").appendChild(paragraaf6);
}
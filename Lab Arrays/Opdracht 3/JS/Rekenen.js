var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen (getal1, getal2){
	var berekeningoptellen = document.createElement("p")
	berekeningoptellen.innerHTML=(getal1 + " + " + getal2 + " = " + (getal1 + getal2) + "<br>");
	paragraafoptellen.appendChild(berekeningoptellen);
	document.getElementById("Optellen").appendChild(paragraafoptellen);
}

function aftrekken (getal1, getal2){
	var berekeningaftrekken = document.createElement("p");
	berekeningaftrekken.innerHTML=(getal2 + " - " + getal1 + " = " + (getal2 - getal1) + "</br>");
	paragraafaftrekken.appendChild(berekeningaftrekken);
	document.getElementById("Aftrekken").appendChild(paragraafaftrekken);
}

function vermenigvuldigen (getal1, getal2){
	var berekeningenvermenigvuldigen = document.createElement("p");
	berekeningenvermenigvuldigen.innerHTML=(getal1 + " x " + getal2 + " = " + (getal1 * getal2) + "</br>");
	paragraafvermenigvuldigen.appendChild(berekeningenvermenigvuldigen);
	document.getElementById("Vermenigvuldigen").appendChild(paragraafvermenigvuldigen);
}

function delen (getal1, getal2){
	var berekeningdelen = document.createElement("p");
	berekeningdelen.innerHTML=(getal1 + " : " + getal2 + " = " + (getal2 / getal1) + "</br>");
	paragraafdelen.appendChild(berekeningdelen);
	document.getElementById("Delen").appendChild(paragraafdelen);
}

var paragraafoptellen = document.createElement("p");
var paragraafaftrekken = document.createElement("p");
var paragraafvermenigvuldigen = document.createElement("p");
var paragraafdelen = document.createElement("p");


for (i = 0; i <= 9; i++){
	optellen(arrayEen[i], arrayTwee[i]);
}

for (i = 0; i <= 9; i++){
	aftrekken(arrayEen[i], arrayTwee[i]);
}

for (i = 0; i <= 9; i++){
	vermenigvuldigen(arrayEen[i], arrayTwee[i]);
}

for (i = 0; i <= 9; i++){
	delen(arrayEen[i], arrayTwee[i]);
}
var title = document.getElementById("title");
var description = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var paper = document.getElementById("inventoryItem");
var gameContainer = document.getElementById("game-container");
var gameButtons = document.getElementById("game-buttons");

//Layout
var inventory = document.createElement("div");
inventory.id = "Inventory";
document.body.appendChild(inventory);
var inventorytitle = document.createElement("h1");
inventorytitle.id = "Inventorytitle";
document.getElementById("Inventory").appendChild(inventorytitle);
inventorytitle.innerHTML = "Inventory";
var leftside = document.createElement("div");
leftside.id = "Leftside";
document.body.insertBefore(leftside,gameContainer);
var textbar = document.createElement("div");
textbar.id = "Textbar";
document.getElementById("game-container").appendChild(textbar);
document.getElementById("game-container").removeChild(description);
document.getElementById("Textbar").appendChild(description);
var gamescreen = document.createElement("div");
gamescreen.id = "Gamescreen";
document.getElementById("game-container").appendChild(gamescreen);
var currentscreen = document.createElement("img");
currentscreen.id = "Currentscreen";
document.getElementById("Gamescreen").appendChild(currentscreen);
var buttonPosition = document.createElement("div");
buttonPosition.id = "ButtonPosition";
document.getElementById("game-buttons").appendChild(buttonPosition);
document.getElementById("game-buttons").removeChild(button1);
document.getElementById("ButtonPosition").appendChild(button1);
document.getElementById("game-buttons").removeChild(button2);
document.getElementById("ButtonPosition").appendChild(button2);
document.getElementById("game-buttons").removeChild(button3);
document.getElementById("ButtonPosition").appendChild(button3);
document.getElementById("inventoryItem").src = "../Images/items/briefje.png";
var exit = document.createElement("img");
exit.id = "Exit";
var paperText = document.createElement("p");
paperText.id = "PaperText";
paperText.innerHTML = "Als je opzoek bent naar voorwerpen kan ik je wel helpen. <br> Je kunt me vinden in het steegje."
var paperwithcross = document.createElement("div");
paperwithcross.id = "paperwithcross";
document.getElementById("Gamescreen").appendChild(paperwithcross);
document.getElementById("paperwithcross").appendChild(paperText);
document.getElementById("paperwithcross").appendChild(paper);
document.getElementById("paperwithcross").appendChild(exit);
document.getElementById("Exit").src = "../Images/kruisje.png";
var keys = document.createElement("img");
keys.id = "Keys";
document.getElementById("Gamescreen").appendChild(keys);
document.getElementById("Keys").src = "../Images/items/sleutels.png";
var rope = document.createElement("img");
rope.id = "Rope";
document.getElementById("Gamescreen").appendChild(rope);
document.getElementById("Rope").src = "../Images/items/touw.png";
var person = document.createElement("img");
person.id = "Person";
document.getElementById("Gamescreen").appendChild(person);
document.getElementById("Person").src = "../Images/mysterieuspersoon.gif";
//

//lettertypes
var lettertype = document.createElement("link");
lettertype.id = "Lettertype";
lettertype.rel = "stylesheet";
lettertype.href = "http://fonts.googleapis.com/css?family=Inconsolata";
document.body.appendChild(lettertype);

var handGeschrevenLetterType = document.createElement("link");
handGeschrevenLetterType.id = "HandGeschrevenLetterTypeLettertype";
handGeschrevenLetterType.rel = "stylesheet";
handGeschrevenLetterType.href = "https://fonts.googleapis.com/css?family=Amatic+SC";
document.body.appendChild(handGeschrevenLetterType);
//

//checkVars
var checkPaper = "niet opgepakt";
var checkKeys = "niet opgepakt";
var checkRope = "niet opgepakt";
//

//Watch
var watch = document.createElement("div");
watch.id = "Watch";
document.getElementById("Leftside").appendChild(watch);
var square = document.createElement("div");
square.id = "Square";
document.getElementById("Watch").appendChild(square);
var getallen = document.createElement("img");
getallen.id = "Getallen";
document.getElementById("Square").appendChild(getallen);
document.getElementById("Getallen").src = "../Images/getallen.png";
var strap = document.createElement("div");
strap.id = "Strap";
document.getElementById("Watch").appendChild(strap);
var smallPointer = document.createElement("div");
smallPointer.id = "SmallPointer";
document.getElementById("Square").appendChild(smallPointer);
var largePointer = document.createElement("div");
largePointer.id = "LargePointer";
document.getElementById("Square").appendChild(largePointer);
//

start();

//startscreen
function start(){
	title.innerHTML = "Dit is de titel";
	description.innerHTML = "Je bent in Dordrecht om een vriend van je te bevrijden uit de cel. Hem bevrijden is alleen niet zo simpel je zal naar aanweizingen en voorwerpen moeten gaan zoeken. Dit is nodig aangezien je anders op sommige punten niet verder kan of dat je betrapt wordt en zelf de cel in wordt gegooit. Je kunt via knoppen beslissingen maken. Let ook op voor voorwerpen op het scherm op sommige kan je namelijk kliken. Veel succes met de missie!";
	inventory.style.display = "none";
	button1.innerHTML = "Start";
	button2.style.display = "none";
	button3.style.display = "none";
	Leftside.style.display = "none";
	document.getElementById("Currentscreen").src = "../Images/startfoto.jpg";
	document.getElementById("button1").addEventListener("click", level1);
	console.log(title);	
}
//

//level 1
function level1(){
	title.innerHTML = "Splitsing";
	description.innerHTML = "Je staat op een splitsing welke kant ga je op?";
	inventory.style.display = "block";
	button1.innerHTML = "Links";
	button2.innerHTML = "Rechtdoor";
	button3.innerHTML = "Rechts";
	document.getElementById("button1").removeEventListener("click", level1);
	document.getElementById("button2").removeEventListener("click", level1_21);
	document.getElementById("button2").removeEventListener("click", level1_31);
	document.getElementById("button3").removeEventListener("click", level1_33);
	document.getElementById("button1").removeEventListener("click", losescreen);
	document.getElementById("button2").removeEventListener("click", losescreen);
	document.getElementById("button3").removeEventListener("click", level2_1);			
	document.getElementById("button1").addEventListener("click", level1_1);
	document.getElementById("button2").addEventListener("click", level1_2);
	document.getElementById("button3").addEventListener("click", level1_3);
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";
	Leftside.style.display = "block";
	document.getElementById("Currentscreen").src = "../Images/level1.png";	
	if (checkPaper == "niet opgepakt"){
		paper.style.display = "none";
	}	
	if (checkRope == "niet opgepakt"){
		Rope.style.display = "none";
	}
}
//

//Level 1_1 (links)
function level1_1(){
	title.innerHTML = "Lange Wantijkade";
	description.innerHTML = "Je staat op de Lange Wantijkade. Je kunt naar rechts of terug naar de splitsing.";
	button1.innerHTML = "terug";
	button2.innerHTML = "rechtsaf";
	button2.style.display = "inline-block";
	button3.style.display = "none";
	if(checkPaper != "opgepakt"){
		paper.style.display = "block";
		paper.style.top = "48%";
		paper.style.right = "33%";
	}
	document.getElementById("inventoryItem").addEventListener("click", openpaper);
	document.getElementById("button1").removeEventListener("click", level1_1);
	document.getElementById("button2").removeEventListener("click", level1_2);
	document.getElementById("button3").removeEventListener("click", level1_3);
	document.getElementById("button1").removeEventListener("click", level2_2);
	document.getElementById("button2").removeEventListener("click", level2_3);		
	document.getElementById("button1").addEventListener("click", level1);
	document.getElementById("button2").addEventListener("click", level1_21);	
	document.getElementById("Currentscreen").src = "../Images/level1_1.png";		
}
//

//Level 1_2 (rechtdoor)
function level1_2(){
	title.innerHTML = "Molen de Vilder";
	description.innerHTML = "Je staat op de Molen de Vilder. Je kunt rechtdoor of terug naar de splitsing.";
	button1.innerHTML = "terug";
	button2.innerHTML = "rechtdoor";
	button2.style.display = "inline-block";
	button3.style.display = "none";
	document.getElementById("button1").removeEventListener("click", level1_1);
	document.getElementById("button2").removeEventListener("click", level1_2);
	document.getElementById("button3").removeEventListener("click", level1_3);
	document.getElementById("button1").removeEventListener("click", level2_2);
	document.getElementById("button2").removeEventListener("click", level2_3);	
	document.getElementById("button1").addEventListener("click", level1);
	document.getElementById("button2").addEventListener("click", level1_21);		
	document.getElementById("Currentscreen").src = "../Images/level1_2.png";
	document.getElementById("Rope").addEventListener("click", appendRope);
	if(checkRope != "opgepakt"){
		Rope.style.display = "block";
		Rope.style.bottom = "38.5%";
		Rope.style.left = "59.5%";
		document.getElementById("Rope").addEventListener("click", appendRope);
	}				
}
//

//Level 1_3 (Voorstraat)
function level1_3(){
	title.innerHTML = "Voorstraat";
	description.innerHTML = "Je staat op de voorstraat. Je ziet rechts van je een steegje.";
	button1.innerHTML = "terug";
	button2.innerHTML = "rechtdoor";
	button3.innerHTML = "het steegje in";
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";
	button2.style.fontSize = "12px";
	Person.style.display = "none";
	document.getElementById("button1").removeEventListener("click", level1_1);
	document.getElementById("button2").removeEventListener("click", level1_2);
	document.getElementById("button3").removeEventListener("click", level1_3);
	document.getElementById("button1").removeEventListener("click", level1_3);
	document.getElementById("button2").removeEventListener("click", level1_32);
	document.getElementById("button1").removeEventListener("click", level1_3);	
	document.getElementById("button1").addEventListener("click", level1);
	document.getElementById("button2").addEventListener("click", level1_31);
	document.getElementById("button3").addEventListener("click", level1_33);		
	document.getElementById("Currentscreen").src = "../Images/level1_3.png";
	document.getElementById("Keys").removeEventListener("click", appendKeys);
	if (checkKeys != "opgepakt"){
		checkKeys = "niet opgepakt";
	}	
	if (checkKeys == "niet opgepakt"){
		Keys.style.display = "none";
	}			
}
//

//level1_21 ()
function level1_21(){
	title.innerHTML = "noordendijk";
	description.innerHTML = "Je staat op de noordendijk. je kunt naar de Lange Wantijkade en de Molen de Vilder. ";
	button1.innerHTML = "Lange Wantijkade";
	button2.innerHTML = "Molen de Vilder";
	button2.style.display = "inline-block";
	button3.style.display = "none";
	document.getElementById("button1").removeEventListener("click", level1);
	document.getElementById("button2").removeEventListener("click", level1_21);
	document.getElementById("button1").addEventListener("click", level1_1);
	document.getElementById("button2").addEventListener("click", level1_2);	
	document.getElementById("Currentscreen").src = "../Images/level1_21.png";
	if (checkPaper == "niet opgepakt"){
		paper.style.display = "none";
	}
	if (checkRope == "niet opgepakt"){
		Rope.style.display = "none";
	}	
}
//

//level1_31 (Politiebureau)
function level1_31(){
	title.innerHTML = "Politiebureau";
	description.innerHTML = "Je staat voor het politiebureau. Je kan het politiebureau betreden of je kunt terug naar de Voorstraat.";
	button1.innerHTML = "terug";
	button2.innerHTML = "het gebouw betreden";
	button2.style.display = "inline-block";
	button3.style.display = "none";
	button2.style.fontSize = "11px";
	document.getElementById("button1").removeEventListener("click", level1_1);
	document.getElementById("button2").removeEventListener("click", level1_31);
	document.getElementById("button3").removeEventListener("click", level1_33);
	document.getElementById("button1").removeEventListener("click", losescreen);
	document.getElementById("button2").removeEventListener("click", losescreen);
	document.getElementById("button3").removeEventListener("click", level2_1);
	document.getElementById("button1").removeEventListener("click", level1);	
	document.getElementById("button1").addEventListener("click", level1_3);
	document.getElementById("button2").addEventListener("click", level1_32);	
	document.getElementById("Currentscreen").src = "../Images/level1_31.png";
	if(checkKeys != "opgepakt"){
		Keys.style.display = "block";
		Keys.style.bottom = "35%";
		Keys.style.left = "20%";
		document.getElementById("Keys").addEventListener("click", appendKeys);
	}	
}
//

//level1_32 (Boven op het politiebureau)
function level1_32(){
	if (checkKeys == "niet opgepakt"){
		Keys.style.display = "none";
	}	
	if (checkRope == "opgepakt"){
		appendRope();
		title.innerHTML = "Boven op het politiebureau";
		description.innerHTML = "Je bent nu boven op het politiebureau, maar er zit een slot op het venster. Welke code heb je nodig om het venster te openen. Pas wel op, want zo te zien zit er een alarm aan dus als je niet de goede kiest zal er een alarm af gaan.";
		button1.innerHTML = "3";
		button2.innerHTML = "16";
		button3.innerHTML = "54";
		button2.style.display = "inline-block";
		button3.style.display = "inline-block";
		button2.style.fontSize = "12px";
		document.getElementById("button1").removeEventListener("click", level1_3);
		document.getElementById("button2").removeEventListener("click", level1_31);
		document.getElementById("button1").removeEventListener("click", level2_2);
		document.getElementById("button2").removeEventListener("click", level2_3);
		document.getElementById("button1").removeEventListener("click", level1);
		document.getElementById("button2").removeEventListener("click", level1_32);		
		document.getElementById("button1").addEventListener("click", losescreen);
		document.getElementById("button2").addEventListener("click", losescreen);
		document.getElementById("button3").addEventListener("click", level2_1);	
		document.getElementById("Currentscreen").src = "../Images/level1_32.jpg";
		document.getElementById("Keys").removeEventListener("click", appendKeys);		
	}else{		
		description.innerHTML = "Je kunt niet zomaar het politiebureau in er moet een andere manier zijn.";			
	}
}
//

//level2_1 (In het politiebureau)
function level2_1(){
	title.innerHTML = "In het politiebureau";
	description.innerHTML = "Je bent nu ongezien in het politiebureau. Je kunt rechtdoor en de trap op.";
	button1.innerHTML = "rechtdoor";
	button2.innerHTML = "de trap op";
	button3.style.display = "none";
	button2.style.display = "inline-block";
	document.getElementById("button1").removeEventListener("click", losescreen);
	document.getElementById("button2").removeEventListener("click", losescreen);
	document.getElementById("button3").removeEventListener("click", level1_32);
	document.getElementById("button1").removeEventListener("click", level2_1);
	document.getElementById("button2").removeEventListener("click", losescreen2);
	document.getElementById("button2").removeEventListener("click", winscreen);	
	document.getElementById("button1").addEventListener("click", level2_2);
	document.getElementById("button2").addEventListener("click", level2_3);	
	document.getElementById("Currentscreen").src = "../Images/level2_1.jpg";	
}
//

//level2_3 (In het politiebureau)
function level2_3(){
	if (checkKeys == "opgepakt") {
	title.innerHTML = "In het politiebureau";
	description.innerHTML = "Je kunt de duur openen maar wel alleen als je de sleutels hebt. Of je kunt terug gaan.";
	button1.innerHTML = "terug";
	button2.innerHTML = "open de duur";
	button3.style.display = "none";	
	document.getElementById("button1").removeEventListener("click", level2_2);
	document.getElementById("button2").removeEventListener("click", level2_3);
	document.getElementById("button1").addEventListener("click", level2_1);
	document.getElementById("button2").addEventListener("click", winscreen);	
	document.getElementById("Currentscreen").src = "../Images/level2_3.jpg";		
	}else{
	title.innerHTML = "level2_3";
	description.innerHTML = "Je kunt de duur openen maar wel alleen als je de sleutels hebt. Of je kunt terug gaan.";
	button1.innerHTML = "terug";
	button2.innerHTML = "open de duur";
	button3.style.display = "none";	
	document.getElementById("button1").removeEventListener("click", level2_2);
	document.getElementById("button2").removeEventListener("click", level2_3);
	document.getElementById("button1").addEventListener("click", level2_1);
	document.getElementById("button2").addEventListener("click", losescreen3);	
	document.getElementById("Currentscreen").src = "../Images/level2_3.jpg";	
	}
}
//

//level2_2 (In het politiebureau)
function level2_2(){
	title.innerHTML = "In het politiebureau";
	description.innerHTML = "Je kunt de rechtdoor of je kunt terug gaan.";
	button1.innerHTML = "terug";
	button2.innerHTML = "rechtdoor";
	button3.style.display = "none";
	document.getElementById("button1").removeEventListener("click", level2_2);
	document.getElementById("button2").removeEventListener("click", level2_3);
	document.getElementById("button1").addEventListener("click", level2_1);
	document.getElementById("button2").addEventListener("click", losescreen2);	
	document.getElementById("Currentscreen").src = "../Images/level2_2.jpg";	
}
//

//winscreen
function winscreen(){
	title.innerHTML = "Je hebt gewonnen";
	description.innerHTML = "";
	inventory.style.display = "none";
	button1.innerHTML = "opnieuw spelen?";
	button2.style.display = "none";
	button3.style.display = "none";
	Leftside.style.display = "none";
	document.getElementById("button1").removeEventListener("click", level2_1);
	document.getElementById("button2").removeEventListener("click", winscreen);	
	document.getElementById("button1").addEventListener("click", function(){
		window.location = window.location;
	});
	document.getElementById("Currentscreen").src = "../Images/victory.png";	
}
//

//losescreen
function losescreen(){
	title.innerHTML = "Je hebt verloren";
	description.innerHTML = "De code was niet goed en het alarm is afgegaan. Ze hebben je gevonden en in de cel gegooit.";
	inventory.style.display = "none";
	button1.innerHTML = "opnieuw spelen?";
	button2.style.display = "none";
	button3.style.display = "none";
	Leftside.style.display = "none";	
	document.getElementById("button1").addEventListener("click", function(){
		window.location = window.location;
	});
	document.getElementById("Currentscreen").src = "../Images/lose.png";	
}
//

//losescreen2
function losescreen2(){
	title.innerHTML = "Je hebt verloren";
	description.innerHTML = "Je bent een agent tegen gekomen en die heeft je de cel in gegooit.";
	inventory.style.display = "none";
	button1.innerHTML = "opnieuw spelen?";
	button2.style.display = "none";
	button3.style.display = "none";
	Leftside.style.display = "none";	
	document.getElementById("button1").addEventListener("click", function(){
		window.location = window.location;
	});
	document.getElementById("Currentscreen").src = "../Images/";		
}
//

//losescreen3
function losescreen3(){
	title.innerHTML = "Je hebt verloren";
	description.innerHTML = "Je probeerde de cel met alles wat je had te open maar het lukte niet. Het duurde daarom te lang waardoor er een politie agent langs was gekomen en je de cel in heeft gegooit.";
	inventory.style.display = "none";
	button1.innerHTML = "opnieuw spelen?";
	button2.style.display = "none";
	button3.style.display = "none";
	Leftside.style.display = "none";
	document.getElementById("button1").addEventListener("click", function(){
		window.location = window.location;
	});
	document.getElementById("Currentscreen").src = "../Images/lose.png";		
}
//

//Level 1_33 (Steegje)
function level1_33(){
	if (checkPaper == "opgepakt"){
		title.innerHTML = "Steegje";
		description.innerHTML = "Je bent het steegje in gegaan... het hele kleine steegje. Je ziet een man die zich raar gedraagt was hij dege die de brief geschreven heeft? Voordat je het weet duwt de rare man een horloge in je hand. uhh bedankt?";
		button1.innerHTML = "terug";
		button2.style.display = "none";
		button3.style.display = "none";
		document.getElementById("button1").removeEventListener("click", level1);
		document.getElementById("button2").removeEventListener("click", level1_31);
		document.getElementById("button3").removeEventListener("click", level1_33);
		document.getElementById("button1").addEventListener("click", level1_3);		
		document.getElementById("Currentscreen").src = "../Images/level1_33.jpg";
		person.style.display = "block";
		Watch.style.display = "block";
	}else{
		title.innerHTML = "Steegje"
		description.innerHTML = "Je bent het steegje in gegaan alleen staat er een hek voor het steegje misschien maar terug gaan dan.";
		button1.innerHTML = "terug";
		button2.style.display = "none";
		button3.style.display = "none";
		document.getElementById("button1").removeEventListener("click", level1);
		document.getElementById("button2").removeEventListener("click", level1_31);
		document.getElementById("button3").removeEventListener("click", level1_33);
		document.getElementById("button1").addEventListener("click", level1_3);		
		document.getElementById("Currentscreen").src = "../Images/hek.png";		
	}		
}
//

//resetstylepaper
function resetstylepaper(){
	paper.style.top = "0%";
	paper.style.right = "0%";
}
//

//openpaper
function openpaper(){
	checkPaper = "opgepakt";
	resetstylepaper();
	paper.style.width = "40%";
	paper.style.top = "15%";
	paper.style.right = "30%";
	Exit.style.display = "block";
	paperText.style.display = "block";
	document.getElementById("Exit").addEventListener("click", closepaper);		
}
//

//closepaper
function closepaper(){
	document.getElementById("Inventory").appendChild(paperwithcross);
	Exit.style.display = "none";
	PaperText.style.display = "none";
	paper.style.width = "5%";
	resetstylepaper();
	paper.style.top = "12%";
	paper.style.right = "11%";
}
//

//appendKeys
function appendKeys(){
	checkKeys = "opgepakt";
	Keys.style.bottom = "80%";
	Keys.style.left = "93%";
	Keys.style.width = "5%";
	document.getElementById("Inventory").appendChild(keys);
}
//

//appendRope
function appendRope(){
	checkRope = "opgepakt";
	Rope.style.bottom = "68%";
	Rope.style.left = "84%";
	Rope.style.width = "5%";
	document.getElementById("Inventory").appendChild(Rope);	
}
//
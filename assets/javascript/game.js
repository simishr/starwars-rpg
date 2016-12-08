
//DECLARING THE VARIABLES..
	//THE ARRAY CONTAINING THE OBJECTS....
var characters = [{
	name: "Obi Wan Kenobi", 
	HP: 120, 
	AP: 8,
	CAP: 8,
	image:"./assets/images/obi.jpg"
}, {
	name: "Darth Vader", 
	HP: 140, 
	AP: 10, 
	CAP: 10,
	image:"./assets/images/vader.jpg"
}, {
	name: "Luke Skywalker", 
	HP: 110, 
	AP: 13, 
	CAP: 13,
	image:"./assets/images/luke.jpg"
}, {
	name: "Darth Maul", 
	HP: 130, 
	AP: 5, 
	CAP: 5,
	image:"./assets/images/maul.jpg"
} ];

var yourCharacter;
var enemiesAvailable = [];
var defender;
var chosenYourCharacter = false;
var chosenYourDefender = false;
var defeatedDefender= false;

function loadCharacters(){
		//DYNAMICALLY CREATING DIVS FOR ALL PLAYERS....
		//A LOOP THAT ITERATES THROUGH THE CHARACTERS ARRAY...
		for(var i = 0; i < characters.length; i++) {

			var charactersDiv = $("<div>").addClass("col-md-2 characters player");
			charactersDiv.data("charname", characters[i].name);
			charactersDiv.data("charHP", characters[i].HP);
			charactersDiv.data("charAP", characters[i].AP);
			charactersDiv.data("charCAP", characters[i].CAP);

		//APPENDING THE NEW DIV TO THE TOP ROW "yourCharactersList"....
			$("#yourCharactersListId").append(charactersDiv);
				charactersDiv.append("<p>" + characters[i].name + "</p>");
	       		charactersDiv.css("background-image", "url(" + characters[i].image + ")");
	       		charactersDiv.append("<p>" + characters[i].HP + "</p>");
		}
	}

$(document).ready(function() {

	loadCharacters();

	//ATTACHING ON-CLICK EVENTS TO "yourCharacterList" DIVS...
	$(".player").on("click", function() {
		//var chosenYourCharacter = false;
		for(var i = 0; i < characters.length; i++) {

		//IF THE CHOSEN PLAYERNAME MATCHES TO THAT OF THE "characters" List....
  			if($(this).data("charname") === characters[i].name){
  			//ASSINGING A NEW DIV FOR IT..
				var player1 = $("<div>").addClass("col-md-2 characters fighter");
				yourCharacter = characters[i];
				player1.data("charname", characters[i].name);
				player1.data("charHP", characters[i].HP);
				player1.data("charAP", characters[i].AP);
				player1.data("charCAP", characters[i].CAP);

			//APPENDING THE CHOSEN PLAYER TO THE "yourCharcterId" DIV....
			$("#yourCharacterId").append(player1);
				player1.append("<p>" + characters[i].name + "</p>");
				player1.css("background-image", "url(" + characters[i].image + ")");
	       		player1.append("<p>" + characters[i].HP + "</p>").addClass("yourPlayerHP");
		}
	}
	//THIS WILL STOP THE ONCLICK EVENT
	$(".player").off();
	// HIDING THE CHOSEN CHARACTER FROM THE yourCharacterListId....AND THEN GIVING A NEW MESSAGE..
	$(this).addClass("hide");
	$(".message").html("Enemies Available. Pick your Defender!");
	enemiesAvailable = characters.slice(characters[i]);

//function enemySelection(){}
	//ATTACHING ON-CLICK EVENTS TO "yourDefenderId" DIV....
	$(".player").on("click", function(){
		for(var i = 0; i < enemiesAvailable.length; i++) {
			if($(this).data("charname") === characters[i].name){
  			//ASSINGING A NEW DIV FOR IT..
			var defender1 = $("<div>").addClass("col-md-2 characters defender");
			defender = characters[i];
			defender1.data("charname", characters[i].name);
			defender1.data("charHP", characters[i].HP);
			defender1.data("charAP", characters[i].AP);
			defender1.data("charCAP", characters[i].CAP);

		//APPENDING THE CHOSEN PLAYER TO THE "yourCharcterId" DIV....
		$("#yourDefenderId").append(defender1);
			defender1.append("<p>" + characters[i].name + "</p>");
			defender1.css("background-image", "url(" + characters[i].image + ")");
       		defender1.append("<p>" + characters[i].HP + "</p>").addClass("yourDefenderHP");
		}
	}
	//THIS WILL STOP THE ONCLICK EVENT
	$(".player").off();
	// HIDING THE CHOSEN CHARACTER FROM THE yourCharacterListId....AND THEN GIVING A NEW MESSAGE..
	$(this).addClass("hide");
	$(".message").html("Start attacking by clicking the BUTTON");
	enemiesAvailable = characters.slice(characters[i]);

	//DYNAMICALLY CREATING THE ATTACK BUTTON......
	var attack = $("<button>").addClass("btn-danger").html("Attack ").appendTo("#clickHere");

		})
			
	});
});

$(".btn-danger").on("click", function() {
	startGame();
})

function startGame() {

	
	yourCharactersHP -= yourDefenderAP;
	yourCharacterCAP += yourCharacterAP;
	yourDefenderHP -= yourCharacterAP;

	if(yourCharacterHP <= 0){

	}

}


	

// $("#startAttack").on("click", function() {


// 	//chose yourCharacter
// 	//chose yourDefender
// 	//onclick of ATTACK button, gameStart(){
// 		// yourCharacter's HP-= AP of defender
// 		// yourCharacter's AP += yourCharacter's AP
// 		// defender's HP -= AP of yourCharacter
// 		if(yourCharacter.HP <= 0) {
// 			document.querySelector("#message").innerHTML = "You have been defeated, play again?";
// 		}
// 		else if(yourDefenderHP <= 0) {
// 			defeatedDefender = true;
// 			document.querySelector("#message").innerHTML = = "You have defeated" + yourDefender + ". Please select your next defender";
// 		}
// 		});

// 		//}






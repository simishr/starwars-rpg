
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

function setFighterAttributes (fighter, index) {

	fighter.data("charname", characters[index].name);
	fighter.data("charHP", characters[index].HP);
	fighter.data("charAP", characters[index].AP);
	fighter.data("charCAP", characters[index].CAP);
	}

//=================================================================================================================

function loadCharacters(){
		
		//A LOOP THAT ITERATES THROUGH THE CHARACTERS ARRAY...AND DYNAMICALLY CREATING DIVS FOR ALL PLAYERS..
		for(var i = 0; i < characters.length; i++) {
			var charactersDiv = $("<div>").addClass("col-md-2 characters player");
			setFighterAttributes(charactersDiv, i);	

		//APPENDING THE NEW DIV TO THE TOP ROW "yourCharactersList"....
			$("#yourCharactersListId").append(charactersDiv);
				charactersDiv.append("<p>" + characters[i].name + "</p>");
	       		charactersDiv.css("background-image", "url(" + characters[i].image + ")");
	       		charactersDiv.append("<p>" + characters[i].HP + "</p>");
			}
		}
//==================================================================================================================

$(document).ready(function() {

	loadCharacters();

	//ATTACHING ON-CLICK EVENTS TO "yourCharacterList" DIVS...
	$(".player").on("click", function() {
		
		for(var i = 0; i < characters.length; i++) {

		//IF THE CHOSEN PLAYERNAME MATCHES TO THAT OF THE "characters" List....
  			if($(this).data("charname") === characters[i].name){
  			//ASSINGING A NEW DIV FOR IT..
				var player1 = $("<div>").addClass("col-md-2 characters player");
				yourCharacter = characters[i];
				setFighterAttributes(player1, i);

			//APPENDING THE CHOSEN PLAYER TO THE "yourCharcterId" DIV....
			$("#yourCharacterId").append(player1);
				player1.append("<p>" + characters[i].name + "</p>");
				player1.css("background-image", "url(" + characters[i].image + ")");
				var player1HP_p = $("<p>").addClass("yourPlayerHP").html(characters[i].HP);
	       		player1.append(player1HP_p);
	       		chosenYourCharacter = true;
		}
	}
	//THIS WILL STOP THE ONCLICK EVENT...
	$(".player").off();
	// HIDING THE CHOSEN CHARACTER FROM THE yourCharacterListId....AND THEN GIVING A NEW MESSAGE..
	$(this).hide();
	$(".message").text("Enemies Available. Pick your Defender!");
	enemiesAvailable = characters.slice(characters[i]);
//===================================================================================================
	//ATTACHING ON-CLICK EVENTS TO "yourDefenderId" DIV....
	$(".player").on("click", function(){
		function pickDefender(){
		for(var i = 0; i < enemiesAvailable.length; i++) {
			if($(this).data("charname") === characters[i].name){
  			//ASSINGING A NEW DIV FOR IT..
			var defender1 = $("<div>").addClass("col-md-2 characters defender");
			defender = characters[i];
			setFighterAttributes(defender1, i);

		//APPENDING THE CHOSEN PLAYER TO THE "yourCharcterId" DIV....
		$("#yourDefenderId").append(defender1);
			defender1.append("<p>" + characters[i].name + "</p>");
			defender1.css("background-image", "url(" + characters[i].image + ")");
			var defender1HP_p = $("<p>").addClass("yourDefenderHP").html(characters[i].HP);
	       	defender1.append(defender1HP_p);
       		chosenYourDefender = true;

		}
	}
}
	//THIS WILL STOP THE ONCLICK EVENT
	$(".player").off();
	// HIDING THE CHOSEN CHARACTER FROM THE yourDefenderId....AND THEN GIVING A NEW MESSAGE..
	$(this).hide();
	$(".message").text("Start attacking by clicking the BUTTON");
	enemiesAvailable = characters.slice(characters[i]);

	//DYNAMICALLY CREATING THE ATTACK BUTTON......
	var attack = $("<button>").addClass("btn-danger").html("Attack ").appendTo("#clickHere");

//ATTCK BUTTON ONCLICK EVENT HANDLER..
$("#clickHere").on("click", function() {
	//if(yourCharacter["HP"] > 0 && defender["HP"] > 0){
	// if((chosenYourCharacter) && (chosenYourDefender)){
	startAttack();

	if (yourCharacter["HP"] <= 0){
		$(".btn-danger").prop('disabled', true);
		$(".message").text("You have been defeated, play again?");


	} else if(defender["HP"] <= 0){
		//defeatedDefender = true;
		$(".btn-danger").prop('disabled', true);
		$(".message").text("You won this round. Please select your next Defender");
		$(defender1).hide();
		chosenYourDefender = false;
		pickDefender();
		$(".player").on();
	} else {
			$(".message").text("Continue Attacking!!");
		}

	// }

	});


})
			
	});
});



function startAttack() {

	
	yourCharacter["HP"] -= defender["AP"];
	$(".yourPlayerHP").text(yourCharacter["HP"]);
	

	defender["HP"] -= yourCharacter["AP"];
	$(".yourDefenderHP").text(defender["HP"]);

	yourCharacter["AP"] += yourCharacter["CAP"];
	





	// //if(enemiesAvailable.length === 0) {
	// 	$(".message").html("Congratulations!!! You WON the game!");
	// }

}


	//GAME DOESNT END EVEN WHEN THE HPs ARE LESSER THAN 0..
	//ATTACK BUTTON APPEARS EVEN WHEN yourCharacter is clicked on twice..
	//NEED TO MAKE THE RESTART BUTTON..








var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){

};

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


for(var i = 0; i< enemyNames.length; i++) {
    fight(enemyNames [i]);
    console.log(enemyNames[i] + " is at " + i + " index ");
}


//Game states
// "win" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "lose" - Player robot's health is zero or less

//if player choses to fight, then fight
if(promptFight === "fight" || promptFight === "FIGHT") {
    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    //Lod a resulting messsage to the console so we know that it worked 
    console.log(
         playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );

    //check enemy's health 
    if(enemyHealth <= 0) {
         window.alert(enemyNames + " had died!");
    }  else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    //log a resulting message to the console so we know that it worked 
    console.log(
    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's heath
    if (playerHealth <= 0) {
    window.alert(playerName + " has died!")
    }  else {
    window.alert (playerName + " still has " + playerHealth + " health left.")
    }
    //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip fight 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight. Goodbye! ");
        //subtract player money 
        playerMoney = playerMoney - 2;
    } else {
    for(var i = 0; 1 < enemyNames.length; i++) {
        fight(enemyNames [i]);
    }
 } 
}

 fight();

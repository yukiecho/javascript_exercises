# browswer will jump a window for you to input
prompt("What is your name?");

# These boxes can be used on websites to confirm things with users. You've probably seen them pop up when you try to delete #important things or leave a website with unsaved changes.
confirm("I feel awesome!");

#Length counts every character in the string - including spaces! ???? <-- Not sure
string = "what is your age my dd";
"string".length;

console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.
/* Note: "===" instead of "=="
# Fill in with >, <, === so that the following print out true:8*/
console.log("Xiao Hui".length<122);
console.log("Goody Donaldson".length> 8);
console.log(8*2 ===16);

#if loop
if (10 == 10) {
    console.log("You got a true!");
} else {
    console.log("You got a false!");
}

# print substrings
console.log("JavaScript".substring(0,4));

#declare variables
# Check if the user is ready to play!
confirm("I understand confirm!");

var age = prompt("What's your age");

if(age < 13) {
    console.log("they're allowed to play but you take no responsibility");
    
    
    }
else{
    console.log("Welcome!");
    }
    
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?")

if(userAnswer = "yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
    }
else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
    }
    
var feedback = prompt("rate your game out of 10.")

if (feedback > 8) {
    console.log("Thank you! We should race at the next concert!");
    }
else{
    console.log("I'll keep practicing coding and racing.")
    }

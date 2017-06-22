
var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;

if (elevatorUp === true) {
	console.log("Going up!");
} else {
	console.log("Going down.");
}

if (elevatorBroken) {
	console.log("Take stairs");
} else {
	console.log("Ride elevator");
}
if (elevatorIsStuckWhileWeAreOnIt) {
	console.log("Call for help");
}

if (elevatorBroken || elevatorDown) {
	console.log("Oh no!!!");
}

if (elevatorNumber && elevatorIsStuckWhileWeAreOnIt) {
	console.log("I knew we should have taken the stairs!")
}
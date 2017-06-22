
//Declaration

function hello(){
	console.log("Hello!!!");
}
hello();

var hey = function(){
	console.log("hey!");
}
hey();
function youngestsiblingName() {
	console.log("Lizeth");
}
youngestsiblingName();

function addition() {
	var x = 2;
	var y = 40;
	console.log(x + y);
}
addition();
function division() {
	var a = 152;
	var b = 2;
	console.log(a / b)
}
division();

function numberEntered(x) {
	console.log("The number entered is", x);
}
numberEntered(4);
numberEntered(3);
numberEntered(42);
function addingTwoNumbers(x, y) {
	console.log(x + y)
}
addingTwoNumbers(40, 2);
addingTwoNumbers(70, 6);
function personName(first, last) {
	console.log(first + " " + last)
}
personName("Alexander", "Knight");

function petNameAndBreed(name, breed) {
	var details = name + ", " + breed;
	return details;
}
petNameAndBreed("Rufus", "Weiner Dog");

//write a function that calculates the
//price of 10 candy bars in Indiana.
//Allow us to enter more than one product
//Sales Tax 0.07

function productAfterTax(amount, price, tax) {
	var tax = 0.07;
	var taxDetails = amount * price * tax;
	var productDetails = taxDetails + amount * price;
	console.log(productDetails)
}
productAfterTax(10, .99)
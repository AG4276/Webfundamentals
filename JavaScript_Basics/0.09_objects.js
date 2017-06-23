//Object Literal
var player = {
	//properties
	name : "",
	life : 100,
	damage : 0, //attack points
	hasSniperRifle : true,
	hasSword : false,
	magics : true,
	rank : ["soldier", "mage", "spartan", "barbarian"],
	//methods
	challenge : function () {
		console.log("Sir, would you like to do battle?");
	},

	fightme : function() {
		console.log("would you care to fight " + this.name + "?")
	},

	attack : function( target) {
		console.log(this.name + " attacks " + target.name + " for " + this.damage);
		target.life -= this.damage;
	},
	pickedUpSword : function() {
		if (this.hasSword === true) {
			console.log(this.name + " picked up the sword");
		}
	},
	hasOrangeMagics : function() {
		if (this.magics === true) {
			console.log(this.name + " uses orange magic");
		}
	},
	useAttackMagics : function(target) {
		console.log(this.name + " defends against " + target.name);
	}
	

};

var saul = Object.create(player);
saul.name = "Saul";
saul.life = 120;
saul.damage = 20;
saul.hasSniperRifle = false;
saul.hasSword = true;
// console.log(saul.name);
// console.log(saul.life);
// console.log(saul.hasSniperRifle);
// console.log(saul.challenge);
var ana = Object.create(player);
ana.name = "Ana";
ana.life = 100;
ana.damage = 42;
ana.hasSniperRifle = false;
ana.magics = true;
ana.rank = "mage";
// console.log(ana);
// console.log(saul);

saul.challenge();
saul.fightme();
ana.fightme();
saul.pickedUpSword();
saul.attack(ana);
ana.hasOrangeMagics();
ana.useAttackMagics(saul);


/* Create a `myName` variable and assign it a String value */
var myName = "WhoDis";

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person = { name: "WhoDis", age: 34 }

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */

var canDrive = true;

function atLeast16 () {
	if (person >= 16) {
		return canDrive;
	} else {
		return false;
	}
}

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */

function greet (name) {
	console.log(`Hello, my name is ${name}`)
}


/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

var dataTypes = ['Charlie', 11, true, {cat: 'meow', dog: 'woof', bird: 'tweet'}, [12, 15, 32], null, undefined];

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */

var dog = { name: "Spot", bark: function bark () {
	console.log('Woof!')
	}
};



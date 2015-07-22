
//  .....  YOUR MISSION  .....
  //1. Author functions that define the Make
  //    and Model of a Car and the Car itself.
  //2. Create three instances of your Car that
  //    each have a different color.
  //3. Each Car you create should inherit the
     // make and model name.


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

function Make() {
	this.make = "Honda"
}


/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model () {
	this.model = "Element";
}
Model.prototype = new Make(); 


// What is the prototype of a Model?


// Define a Car

function Car () {
	
}
Car.prototype = new Model();

// What is the prototype of a Car?


// Create the first car

var myBlueCar = new Car(); 

	myBlueCar.color = "blue"


// Create the second car

var myRedCar = new Car();
myRedCar.color = "red"

// Create the third car

var mySilverCar = new Car();
mySilverCar.color = "silver";

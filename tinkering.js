/* function multiply(a,b) {
	return a*b;
}

const result = multiply(3,6);
console.log(result);

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  //return "Returning: I am returning this string!";
}

isThisWorking(3);

//Build A Triangle Udacity

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
	let triangle = ""; //remember it will be printed as a string
	let lineNumber = 1; //the first line
	for (lineNumber = 1; lineNumber <= length; lineNumber++) {
		triangle = triangle + makeLine(lineNumber);
	} return triangle;
	//return makeLine(length);
	//console.log(makeLine(length));
	//console.log(length);
}

console.log(buildTriangle(10)); */

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
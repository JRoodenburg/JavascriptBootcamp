// function declaration

function multiply(number,multiplier){
    return console.log(number * multiplier);

}

var value1 = 3;
var value2 = 5;
multiply(value1,value2);

console.log("values are: " + value1 + " * " + value2);

function divide(number, multiplier) {
    return console.log(number / multiplier);
}


var value1 = 15;
var value2 = 3;
divide(value1,value2);
console.log("values are: " + value1 + " / " + value2);



// 2 other functions (function expression)
function subtract(number1, number2) {
    return console.log(number1 - number2);

}


var value1 = 22;
var value2 = 3;
subtract(value1,value2);
console.log("values are: " + value1 + " - " + value2);

function add(number1, number2) {
    return console.log(number1 + number2);

}


var value1 = 44;
var value2 = 22;
add(value1,value2);
console.log("values are: " + value1 + " + " + value2);

// Anonymous functions

(function() {
    function scentence() {
            return "Well Played";

    }
    console.log(scentence());

})();

(function() {
    console.log("Just a console log");

})();

//IFFE functions
(function() {
    console.log("IFFE Function, Used ASAP");

})();

// closure
function closusre() {
    var a = 10;
    return console.log("closure is " + a + "*" + a + " = " + (a*a));
}
closusre();

//Global scope en function scope

var favBand = "Postmodern jukebox";
(function() {
    favband = "Not Postmodern Jukebox?";
    return console.log(favBand);
})();
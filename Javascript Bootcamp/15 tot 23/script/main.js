// arrays 15
var numbers = [1,2,3,4,5,6,7,8,9,0 ];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var booleans = [true,false];
var names = ["Bevis","Dieter","Melvin","Elmo","Hammett","Acton","Porter","Gavin","Brian"];
console.log("Length Numbers Array: " + numbers.length);
console.log("Length Letters Array: " + letters.length);
console.log("Length Booleans Array: " + booleans.length);
console.log("...");

// arrays push 16
var empty = [];
console.log("Array Empty: " + empty);
empty.push('not empty anymore');
console.log("Array Empty: " + empty);
console.log("...");

//arrays splice 17
var removal = ["name1","name2","name3","name4","name5","name6","name7","name8"];
console.log("Removal array before splice:  " + removal);
removal.splice(0,1);
removal.splice(1,1);
console.log("Removal array after splice:  " + removal);
console.log("...");

//arrays pop 18
console.log("Removal array Before pop : " + removal);
removal.pop(); // Removes last item in array
console.log("Removal array after pop : " + removal);
console.log("...");

//arrays shift 19
console.log("Removal array before shift : " + removal);
removal.shift(); // Removes first item in array
console.log("Removal array after shift : " + removal);
console.log("...");

// arrays order 20
console.log("Array without sorting: " + names);
names.sort();
console.log("Array with sorting: " + names);

// arrays order numbers (21)
var numbers = ["90","80","899","200","30","1"];
console.log("number array : " + numbers);
numbers.sort();
console.log("number array (sorted): " + numbers);

// arrays slice 22
var copyname = names.slice(0);
console.log("copy / slice of names array: " + copyname); // als je nu iets in de names array verandert, dan veranderd het dus ook in deze array.

//new arrays 23
var Newnumbers = [];
Newnumbers.push(1,25,3,88,33,11,43,54);
console.log("Make a new array in 2 ways: (push) " + Newnumbers);
var Newnumbers2 = [1,52,37,4,52,64,75,28];
console.log("(assign)" + Newnumbers2);


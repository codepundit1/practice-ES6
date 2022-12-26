var number = [1,2,3,4,5,6];

var newNumber = [...number]; //same copy

number.push(100);
console.log(number);
console.log(newNumber); //Immutable
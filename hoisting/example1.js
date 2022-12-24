// Hoisting is JavaScript's default behavior of moving declarations to the top.
// In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.


// Var
num1 = 40;
console.log(num1);
var num1;


//Let
num2 = 40;
console.log(num2);
let num2;

// EKhane references ERROR ashbe karon var=num1 jokhon use korbo sey variable upore chole jabe and (x=undefined) hoye memory te x er jnno akta
// jaiga banabe, kintu let o upore jai kintu x=undefined hoy na , x er jnno konu jaiga hoy na. thats why ref error ashe .

// So let hoy but memory te konu value undefined hisebe jaiga ney na.

// Variables defined with let and const are hoisted to the top of the block, but not initialized.

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// Using a let variable before it is declared will result in a ReferenceError.

// The variable is in a "temporal dead zone" from the start of the block until it is declared:
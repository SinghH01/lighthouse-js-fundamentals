//Example 1
const sayHello = function (name) {
  console.log("Hello, " + name)
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// Example 2  (console.log & return)
const sayHelloToConsole = function (name){
  console.log("Hello, " + name);
}
sayHelloToConsole("John");

const returnHello = function (name){
  return "Hello, " + name;
}

const greeting = returnHello("John");
console.log(greeting);


// Example 1
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}
console.log("Now you're ready to go outside!");

// Example 2
if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}
 
// Example 3 
const temperature =-50

if(temperature<0){
  console.log("Make sure you pick out a scarf!");
} else if(temperature<15){
  console.log("Short sleeves wont cut it.");
}else{
  console.log("Short sleeves are fine.")
}

console.log("Now you are ready to go outside!");

// Example 4
const isCitizen = true;
const age = 26;

if(isCitizen && age>18){
  console.log("You are eligible to vote.");
}

// Example 5
if(temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea...");
}

// Example 6
if(!raining){
  console.log("Leave your umbrealla at home!");
}
//Easy 

// 1.hello world 

console.log('Hello world');

// 2.Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.

let temperature = 10;
if(temperature<20){
console.log("It's cold!");
}else{
    console.log("It's not cold!");
}

// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.

let totalApples = 10;
let giveawayApples = 3;

let leftApples = totalApples-giveawayApples;
console.log("after give away 3 apples from 10 are =",leftApples);

//Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.

let firstName = "Murtaza";
let lastName = "Ghufoor";

let fullName = firstName+lastName;

// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No"

let number1 = 5;
let number2 = 3;

if(number1>number2){
    console.log("5 is greater than 3=", 'yes');
}else{
    console.log("5 is greater than 3=", 'No');
}

// Medium


//Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(radius:number) {
    return Math.PI*radius*radius;
}

// add the radius value

let radius = 100;
let area = calculateArea(radius);
console.log(area);

//Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".

for (let i=1 ;i<=50;i++){
if(i%3==0){
console.log("Fizz");
}else if(i%5==0){
    console.log("buzz")
}else{
    console.log(i)
}
}

//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
















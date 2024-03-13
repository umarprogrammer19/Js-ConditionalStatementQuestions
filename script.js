// Q1: Write a program to take the "city" name as input from user sif user enter karachi then
// Then Welcome user like this: "Welcome To The City Of Lights"

const userInput = prompt("Enter City Name").toLowerCase();
if (userInput == "karachi") {
    document.write("Welcome To The City Of Light <hr>");
} else {
    document.write(`Welcome To The ${userInput} <hr>`)
}

// Q2: Write a program to take a "gender" as input from user. if the user is male give the msg
// Good Morning Sir And if female give Good Morning Maam

const gender = prompt("Enter your Gender").toLowerCase();
if (gender == "male") {
    document.write("Good Morning Sir <hr>");
} else if (gender == "female") {
    document.write("Good Morning Ma'am <hr>");
} else {
    document.write("Please Enter Your Gender <hr>");
}

// Q3: Write a program to take input of traffic signals color and show the message;

const trafficSignalColor = prompt("Enter The Color Of Traffic Signal").toLowerCase();
if (trafficSignalColor == "red") {
    document.write("Must Stop <hr>");
} else if (trafficSignalColor == "yellow") {
    document.write("Ready To Move <hr>");
} else if (trafficSignalColor == "green") {
    document.write("Move Now <hr>");
} else {
    document.write("Please Enter a Valid Traffic Signal Color <hr>");
}

// Q4: Write a program to take remaining fuel in car in litres if fuel is less then 0.25 litres
// show the message

const fuel = +prompt("Please Enter How Many Litres Fuel In Your Car Left Decimal Value Acceptable", 0.2);
if (fuel < 0, 25) {
    document.write("Please Refill The Fuel in Your Car <hr>");
} else {
    document.write("Good Refill When Needed");
}

// Q5: Run The script Check it is true or false;

let a = 4;

if (++a === 5) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

let b = 82;

if (b++ === 83) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

let c = 12;

if (c++ === 13) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

if (c === 13) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

if (++c < 14) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

if (c === 14) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

let materialCost = 20000;
let labourCost = 2000;
let totalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

if (true) {
    document.write(true + "<br>");
} else {
    document.write(false + "<br>");
}

if ("car" < "cat") {
    document.write("car is smaller then cat <hr>");
} else {
    document.write("car is greater then cat <hr>");
}

// Q6: Make Percentage System;

let mark = +prompt("Enter Your Number");
let mark2 = +prompt("Enter Your Number");
let mark3 = +prompt("Enter Your Number");
let totalMarks = 300;
let obtainedMarks = mark + mark2 + mark3;
let percentage = obtainedMarks / totalMarks * 100;
let grade;
let remarks;
if (percentage >= 80 && percentage < 101) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70 && percentage < 80) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60 && percentage < 70) {
    grade = "B";
    remarks = "Good But More Practice is required";
} else {
    grade = "Fail";
    remarks = "You Need To Improve Yourself";
}
document.write(`<h1> MarksSheet </h1> <br>
Total Marks: <b>${totalMarks}</b> <br>
Marks Obtained: <b> ${obtainedMarks} </b> <br>
Percentage: <b> ${percentage} </b> <br>
Grade: <b> ${grade} </b> <br>
Remarks: <b> ${remarks} </b> <hr>`);

// Q7 Make a Guess Game;

let secretNumber = 11;
let guessNumber = +prompt("Enter a number between 1-15");
if (guessNumber === secretNumber) {
    document.write("Bingo You Guessed It Correct <hr>");
} else if (guessNumber === secretNumber + 1 || guessNumber === secretNumber + 2) {
    document.write("Close Enough To The Correct Answer <hr>");
} else if (guessNumber === secretNumber - 1 || guessNumber === secretNumber - 2) {
    document.write("Close Enough To The Correct Answer <hr>");
} else {
    document.write("Try Again <hr>");
}

// Q8 Check number is divisible by 3 or not;
let checkNumber = +prompt("Enter a number to check it is divisible 3 or not");
if (checkNumber % 3 === 0) {
    document.write("The Number is Divisible By 3 <hr>");
} else {
    document.write("The number is not divisible by 3 <hr>");
}

// Q9 : Check output is even or odd 
let input = +prompt("Insert a number to check it is even or odd");
if (input % 2 === 0) {
    document.write("The number is even <hr>");
} else {
    document.write("The number is odd <hr>");
}

// Q10 Check Temperature and give some output
let temperatureCheck = +prompt("Enter Temperature");
if (temperatureCheck >= 40 && temperatureCheck < 50) {
    document.write("It is too hot Outside <hr>");
} else if (temperatureCheck >= 30 && temperatureCheck < 40) {
    document.write("The weather is normal <hr>");
} else if (temperatureCheck >= 20 && temperatureCheck < 30) {
    document.write("The weather is cool <hr>");
} else if (temperatureCheck >= 10 && temperatureCheck < 20) {
    document.write("OMG ! The weather is so cool <hr>");
} else {
    document.write("You Are not in a Earth <hr>");
}

// Q11 Make Normal Calculator;

let number1 = +prompt("Enter Number To Calculate Opearation");
let number2 = +prompt("Enter Number To Calculate Opearation");
let opearation = prompt("Enter Opearator +,-,*,/,%");
if (opearation === "+") {
    document.write(number1 + number2 + "<br>");
} else if (opearation === "-") {
    document.write(number1 - number2 + "<br>");
} else if (opearation === "*") {
    document.write(number1 * number2 + "<br>");
} else if (opearation === "/") {
    document.write(number1 / number2 + "<br>");
} else if (opearation === "%") {
    document.write(number1 % number2 + "<br>");
} else {
    document.write("Please enter one of them +,-,*,/,% <br>");
}
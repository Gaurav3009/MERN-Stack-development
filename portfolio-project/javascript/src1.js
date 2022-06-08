var day = 6;
var hrs = new Date.getHours();
if(day == 0 || day == 6){
    if(hrs < 12){
        console.log("weekend noon");
    }else{
        console.log("weekend evening")
    }
}else{
    if(hrs < 12){
    console.log("weekday noon");
}else{
    console.log("weekday evening");
}
}

switch(day){
    case 0:
        console.log("weekend");
        break;
    case 6:
        console.log("weekend");
        break;
    default:
        console.log("weekend");
}
console.log(true + true);
console.log(true + false);
console.log(10 + 20);
console.log(10 + "20");
console.log(9 - "4");
console.log("hello" + "hi");

var age = 20;
if(age >= 18){
    console.log("Eligible to vote.");
}else{
    console.log("Not eligible to vote.");
}

var marks = 90;
if(marks >= 90){
    console.log("A");
}else if(marks >= 80){
    console.log("B");
}else{
    console.log("F");
}

let age = 18;
console.log((age >= 18)?"Eligible to vote" : "Not eligible to vote.");

var i = 1;
while(i <= 6){
    if(i != 5){
        console.log(i);
    }
    i++;
}

for(var i = 2; i <= 8; i = i + 2){
    console.log(i);
}
let age = 18;

// Template literal 
console.log(`Hello the age is ${age}`);

// Default Parameter
const add = (a, b = 2) => {
    console.log(`${a + b} is the answer.`);
};

add(5); // ans is 7

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


var arr = [1, undefined, "string"];
arr.forEach((element, index, array) => {
    console.log(element);
});

// to find the index of a string 
var str = "BagadBilla";
console.log(str.indexOf("Billa"));
// Syntax 
// arr.indexOf(value, startingIndex);
str.includes("B"); // Returns a boolean value

// Browser web API 
// 1> Geolocation API 
// 2> Camera API 
// 3> Console API 
// 4> DOM manipulation API


// document is inside window 
// window.document
// window is a global object 

// DOM in JavaScript
// *********SELECTORS IN JAVSCRIPT**********
// 1> Class : document.getEelmentByClassName('class_name');
// 2> Id : document.getElementById('Id_name');
// 3> Tag : document.getElementByTagName('tag_name');
// All three returns the HTML collection 
// 4> Query : document.querySelector(".class_name/tag_name/#id");


// document.getElementsByClassName('class_name')[index]

document.querySelector('.box');
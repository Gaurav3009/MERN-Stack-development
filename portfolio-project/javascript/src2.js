var arr = [1, 2, 3, 4, 5];
const b = arr.find((ele, index, array) => {
    return ele > 3; // value retured will be 4
});

// value of b at last will be 4

let brr = [1, 2, 3, 4, 5];

const val = arr.filter((ele, index, array) => ele>3);
// return array [4, 5]


const drr = ["one", "two", "three", "four"];
drr.sort(); // output ["four", "one", "three", "two"]
// lexographical sort  

// CRUD : cREATE READ UPDATE DELETE 
// 1. PUSH 
let array = ["burger", "pizza", "gulabjamun"];
const b1 = array.push("maggie");
// It will push the "maggies" at the end of the array and will return the new length of the array 
// 2> unshift 

const food = array.unshift("rice");
// It will add the element to the start and return the new length of the array
// We can add multiple items at a  time  in the same sequence
// 3> pop

array.pop(); // removes the element from the back of the array and returns the popped element 

// 4> shift  manipulation
array.shift() // removes the elemnt from the front of the array and returns it 

// 5> splice 
array.splice(1, 1, "coke"); //
// splice(starting index, number of elements want to delete, elements to be added)
// insertions takes place from the staring index 
// explore splice function and difference between compiler and interpreter 

// 6> map 
let num = [1, 2, 3, 4, 5];
const newNum = num.map((ele)=> ele*2); // used to perform a particular operation of the elements of the array that
// Returns the modified array, It will not modify the original array.

num.map((ele) => ele * 2).filter((ele) => ele>5);

// 7> reduce 
const sum = num.reduce((accumulator, ele) => accumulator += ele, 0);
// returns teh sum of the array and the sum is inside stored in accumulator function and  starting value of the 0
const maximumValue = num.reduce((max, ele)=> max = (max > ele)?max:ele, -1);

// 8> toUpperCase | toLowerCase | trim 
// It returns the new modified string and the original string remains unmodified 

// 9> slice 
var def = "hey man how are you?";
var newString = def.slice(4, 7); // "man" will be the output 
// windows  + semicolon : emojis and gif's 

// 10> substring 
def.substring(2, -1); // "he" 

// 11> substr 
def.substr(4, 3); // substr(starting index, length);

// 12> replace 
def.replace("man", "woman"); // does not modify original string

// 13> charAt 
defcharAt(2); // y is the output

// 14> split 
def.split(" "); // returns an array of the values 


// Date time 
const date = new Date();
const localDate = date.toLocaleString(); // '6/9/2022, 3:53:36PM'
let dateAndTime = dateString.split(", ");
date.getHours();
date.getMinutes();
date.getSeconds();
datedate.milliseconds();

// Math module 
Math.PI;
Math.cos(90);
Math.abs(-20);
Math.truc(5.9);

// event listener 
const boxD = document.getElementById("box");
boxD.addEventListener("click", ()=>{
    alert("Miracle Miracle"); // box.innerText = "Hemllo";
});
// Mouse events 
// click mouseenter mouseleave mouseup mousedown 
// Keyboard events 
// keypress keyup keydown 
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

brr.sort(function(a, b){
    return a-b;
});

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
// returns the sum of the array and the sum is inside stored in accumulator function and  starting value of the 0
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


// Objects 
// Objects are the collection of properties in the javascript where each property is associated with a key value pair 

// Prototype 
// It is a mechanism by which javascript attaches properties of one object to another 
// arr.prototype == array prototype 
// arr.prototype.prototype == object prototype
// arr.prototype.prototype.prototype == null

console.log(arr._proto_);

function (a){
    
}


// funcCall(1)(2)(3)....();

// shallow copy is copy by reference 
// deep copy is storing the values ate different memory location. It can be done using spread operator

// new way of deep copy in case of nested objects
let obj = JSON.parse(JSON.stringify(obj1)); // But we cannot copy function with this method
// can be resolved using .deepCopy().

// this --> points to an object which is executingcurrent piece of code

// function abc(){
//     this-> points to window object
// }


function display(){
    console.log(this===window);
}

let obj1 = {
    name : "abs",
    age : 33
};

let obj2 = {
    name : "abas",
    age : 35
};

function displayName(city){
    console.log(this.name, city);
}

displayName.call(obj);
displayName.apply(obj2, ["Jalandhar"]);

var out = displayName.bind(obj2, "Jalandhar");
console.log(out, out());

// Polyfill -> my own code if JS inbuilt function is not supported

// map, filter, forEach, reduce

// filter
let zrr = [4, 2, 6, 5, 9, 7, 1, 2, 6, 4];

Array.prototype.myFilter = function(callback) {
    let result = [];
    for(var i = 0; i < this.lenth; i++){
        if(callback(this[i], i)){
            result.push(this[i]);
        }
    }
    return result;
}

let out = zrr.myFilter((element)=> {return elememnt > 4;});

// IIFE --> Immediately Invoked Function Expression 
// It provides some type of security as it is anonymous and we cannot call it from outside 
(function(){
    let a = 5;
    var b = 6;
    console.log(a+b);
})();

// Asynchronous behaviour in javascript 

// Javascript is called as single threaded causes it doesn't have native API. we cannot create a new thread using some api
// Web API is the API's provided by the browser

console.log("start");
setTimeout(()=>{
    console.log("Hello");
}, 0);
console.log("end");
// o/p : start end hello
// Arrow function doesn;t have this  
let obj3 = {
    name : "abs",
    age : 33,
    display : ()=>{
        console.log(this.name, this.age);
    }
};

obj3.display(); // undefined undefined

let p = new Promise((resolve, reject) =>{
    if(true){
        resolve("Hi");
    }else{
        reject("sorry");
    }
});

p.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error);
})

// In destructuring we use spread operator 

// defer will download the script tag parallal to the rendering of the HTML page but maintain the order of execution
// async will download the script and then execute at the same time
//1> setTimeout(function) It is used to pause the statement it returns a unique id
const b = setTimeout(() => {
    console.log("late");
}, 5000); 
console.log("b");
clearTimeout(b);

let i = 0;
const id = setInterval(() => console.log(i++), 1000);

var box1 = document.getElementsByClassName('box');
box1.addEventListener('click'() => {
    clearInterval(id);
});

const date = new Date();


// objects 
let students = {
    name : "Gaurav",
    age : 22,
    present : true,
    getData(){
        console.log(`${name} ${age} ${present}`);
    }
};

conslo.log(student.getData());
console.log(this); 
// this is a global object 
// We don't use this keyword in arrow function 
// When we use the this keyword in arrow function it return the global object 
// But when we use the this keyword in a normal function that uses "function" keyword returns the actual object if declared inside the object 

// destructuring 
// for arrays 
let arr = ["1", "2", "3", "4", "5"];
let [v1, v2, v3, v4, v5] = arr;
console.log(`${v1} ${v2} ${v3} ${v4} ${v5}`);
// for objects 
const {name, age, present, getDate} = students;
console.log(`${name} ${age} ${present} ${getDate}`);

// Dynamic Properties 

let fName = "Gaurav";
var late = "late2";
const bio = {
    [fName] : "Ayush", // Whenever we want to add dynamic data we use this method
    [10 + 20] : "30",
    late // or simply write late : late
};

console.log(bio);
// Rest Operator 
function add(num1, num2, ...numbers){
    console.log(`${num1} ${num2} ${numbers}`);
}
const res = add(4, 5, 6, 7, 8, 9, 10);

let array = [2, 5, 7, 9];
function add2(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4;
}

const res2 = add2(...array); // Spread operators
// use of rest operator 
let student1 = {
    name : "some",
    age : 22,
    classes : ["eng", "hindi", "C++"] 
};

const {...rest} = student1;

const newStudent = {
    ...students
};

const student2 = {
    ...students,
    age : 21, // It overrites the copied value from
    feild : "value"
};


const ele = {
    name : "n3",
    age : 21
};

function getDatas(){
    setTimeout(() =>{
        console.log("Print");
    }, 1000);
}

function createData(nelem, callback){
    setTimeout(() =>{
        data.push(nelem);
        callback();
    }, 2000);
}

createData(ele, getDatas);
// getDatas();

// Asynchronous  Behaviour
// We can correct this behaviour using call back or promises 
var I = 0;function name(){
    setTimeout(() =>{console.log(I);}, 3000);
}

console.log("hello");
// synchronous single threaded ...
// setTimeout(() =>{}) is not the part of the javascript but is the part of web API | browser API 


// Promises 

function createData(nelem){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            data.push(nelem);
            let error = false;
            if(error) {
                resolve();
            }else{
                reject("error occured");
            }
        }, 2000);
    });
}

createData(elem).then(getDatas()).catch(() =>{console.log("error occured");});


function createData(nelem){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            data.push(nelem);
        }, 3000);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject("error occured");
        }
    });
}

createData(elem).then(getDatas()).catch("error occured");

// async keyword
// createData(elem).then(getDatas()).catch("error occured"); istead of this we can use async 
async function combine(){
    await createData(nelem);
    getDatas();
}

// Basic difference between async await and .then 


// document.getElementById("gameContainer").addEventListener("click", ()=>{
//     console.log("clicked");
// });

// document.getElementById("reset").addEventListener("click", ()=>{
//     console.log("clicked");
// });

// use stopPropogation() to stop the bubbling
// anchor tag refreshes the page 


// Block is the multiple javascripts statements group together 
// Scope is where a variable is accessible (let var and const)

var a = 5;
function a(){
    var a = 6;
    console.log(a);
} 
a();
console.log(a);

// currying in javascript 

function sum(a){
    return function(b){
        return function(c){
            console.log(a + b + c);
        }
    }
}

sum(2)(3)(5);
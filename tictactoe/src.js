console.log("Hello world!");

let player = "X";

const changePlayer = () => {
    return player == "X"?"O":"X";
};
let boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let b = document.querySelectorAll(".boxText");
        console.log(b);
        b.innerhtml = player;
    });
});


// document.getElementById("gameContainer").addEventListener("click", ()=>{
//     console.log("clicked");
// });

// document.getElementById("reset").addEventListener("click", ()=>{
//     console.log("clicked");
// });

// use stopPropogation() to stop the bubbling
// anchor tag refreshes the page 

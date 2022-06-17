console.log("Hello world!");
let player = "X";
let gameOver = false;
const changePlayer = () => {
    return player == "X"?"O":"X";
};

function wonOrnot(){
    let boxText = document.querySelectorAll(".boxText");
    let winPosition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winPosition.forEach((ele)=>{
        if(boxText[ele[0]].innerText == boxText[ele[1]].innerText 
            && 
            boxText[ele[2]].innerText == boxText[ele[1]].innerText
             && 
             boxText[ele[0]].innerText!=""){
                document.getElementById("result").innerText = `Player ${boxText[ele[0]].innerText} won.`;
                gameOver = true;
        }
    });
}

let boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

boxes.forEach((box) => {
    let boxText = box.querySelector(".boxText");
    box.addEventListener("click", ()=>{
        let chance = document.getElementById("player");
        if(boxText.innerText != "" && !gameOver){
            boxText.innerHTML = player;
            player = changePlayer();
            chance.innerText = player;
            wonOrnot();
        }
    })
});

let reset = document.getElementsByClassName("reset");
reset.addEventListener("click", ()=>{
    let boxTexts = Array.from(document.querySelector(".box"));
    boxTexts.forEach((boxText)=>{boxText == ""});
    

});
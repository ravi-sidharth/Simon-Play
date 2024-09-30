let gameSeq = [];
let userSeq = [];
let higherScore=0;
let level = 0;
let started = false;

let btns =["aqua", "purple", "blue", "green"];
let h3 = document.querySelector('h3');

document.addEventListener('keypress', function(){
    if (started == false){
        started = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add('gameFlash');
    setTimeout (function(){
        btn.classList.remove('gameFlash');
    },200);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout (function(){
        btn.classList.remove('userFlash');
    },200);
}

function levelUp() {
    level++;
    userSeq=[]; 
    h3.innerText = `Level ${level}`;

    let randInd= Math.floor(Math.random()*3);
    let randColor=btns[randInd];
    let randbtn= document.querySelector(`.${randColor}`);
    // console.log(randInd)
    // console.log(randColor)
    // console.log(randbtn)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkBtn(ind) {
    if(userSeq[ind]==gameSeq[ind]){
        if (userSeq.length== gameSeq.length) {
            setTimeout(levelUp,1000);
        }
    } else {
        if (higherScore < level){
            higherScore=level;
        }
        h3.innerHTML=`Game Over! Your score is <b>${level}</b> <br> Press any key to start.
        <br> HIGHER SCORE: ${higherScore}`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },500);
        reset();
    }
}

function btnPress() {
    let btn = this;
    gameFlash(btn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkBtn(userSeq.length -1);
    console.log(userSeq.length-1)
}

let allBtns = document.querySelectorAll(' .btn')
for (btn of allBtns){
    btn.addEventListener('click',btnPress);
}
 
function reset() {
    started= false;
    level=0;
    gameSeq = [];

}
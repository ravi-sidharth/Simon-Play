let gameSeq = []
let userSeq = []

let level = 0 
let started = false

let btns =["box1", "box2", "box3", "box4"]
let h3 = document.querySelector('h3')

document.addEventListener('keypress', function(){
    if (started == false){
        started = true
        levelUp()
    }
})

function btnFlash(btn) {
    btn.classList.add('flash')
    setTimeout (function(){
        btn.classList.remove('flash')
    },200);
}

function levelUp() {
    level++
    h3.innerText = `Level ${level}`

    let randInd= Math.floor(Math.random()*3)
    let randColor=btns[randInd]
    let randbtn= document.querySelector(`.${randColor}`)
    console.log(randInd)
    console.log(randColor)
    console.log(randbtn)
    btnFlash(randbtn)


}

function btnPress() {
    let btn = this;
    btnFlash(btn)
}

let allBtns = document.querySelectorAll(' .btn')

for (btn of allBtns){
    btn.addEventListener('click',btnPress)
}
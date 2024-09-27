var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 30);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(i=1; i<=180; i++){
    var rn = Math.floor(Math.random()*30)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter 
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    } else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
    }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function(pick){
    var clikednum = (Number(pick.target.textContent));
    if(clikednum === hitrn){
        increaseScore();
        makeBubble();        
        getNewHit();        
    }
})


runTimer();
makeBubble();
getNewHit();

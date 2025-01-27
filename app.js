
let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".rbtn");
let newgame = document.querySelector(".newgame");


let turnO = true;
let msg=document.querySelector(".winmsg");
let wmsg=msg.firstChild;
// let turnX = 0;
let winpattern = 
[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8]
];
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turnO==true){
        box.innerHTML="O"
        turnO=false;
        }
        else{
            box.innerHTML="X"
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
function showinner(val){
    msg.classList.remove("hide");
    newgame.classList.remove("hide");
    wmsg.innerText=`the winner of this game is ${val}`;
    disablebutts();
    
}
const resetgame=()=>{
    turnO=true;
    enablebutts();
    for(box of boxes){
        box.innerText="";
    }
    msg.classList.add("hide");
    newgame.classList.add("hide");


}
const disablebutts=()=>{
for(box of boxes){
    box.disabled=true;
    box.innerText="";
    // msg.classList.add("hide");
}}
const enablebutts=()=>{
for(box of boxes){
    box.disabled=false;
}

}

if(count>9){
    resetgame();
    
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner is here");
                 showinner(pos1);
                 disablebutts();
                alert(`winner is ${pos1}`);
                count=0;
               
            }
        }
        
    }
}
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);


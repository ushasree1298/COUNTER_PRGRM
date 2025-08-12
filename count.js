 const decbutton = document.getElementById("decbutton");
const incbutton = document.getElementById("incbutton");
const rstbutton = document.getElementById("rstbutton");
const countlabel =document.getElementById("countlabel");

let count=0;

decbutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}
rstbutton.onclick = function(){
    count=0;
    countlabel.textContent = count;
}
incbutton.onclick = function(){
    count++;
    countlabel.textContent = count;
}


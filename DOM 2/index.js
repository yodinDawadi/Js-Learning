let boxes = document.querySelectorAll(".box");
let i=0;
let colors=["red","green","yellow","purple","orange"]
for(i=0; i<=9; i++){
    boxes[i].innerText=`i'm div ${i+1}`
}

let btn = document.createElement("button");
btn.innerText="clickMe!!"
btn.style.backgroundColor="red  ";
btn.style.color="white";
document.body.prepend(btn);
let btn = document.querySelector("#btn1");
let body= document.querySelector("body");
let mode= "light";
btn.addEventListener("click",changeMode);
function changeMode(){
    if(mode == "light"){
        mode="dark";
        body.style.backgroundColor ="black";
        body.style.color="white";
    }else{
        mode="light";
        body.style.backgroundColor ="white";
        body.style.color="black";
    }
}
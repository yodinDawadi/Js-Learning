// document.getElementById("box").style.backgroundColor = 'blue';
// document.getElementById("box").style.width= '100%';
// document.getElementById("text").innerText ='hello world ';
// document.querySelector("#box").style.height = "100vh";
// let btn= document.querySelector("#btn1")
// let divChange =document.querySelector("#box");
// btnn.onclick =(e)=>{
//     divChange.style.backgroundColor = 'blue';
//     console.log(e);
// }
// const change =()=>{
//     divChange.style.backgroundColor = 'blue';
// }  
// btn.addEventListener("click",change)
// let btn=document.querySelector("#btn1");
// let background=document.querySelector("body");
// const change =()=>{
//     let color = document.querySelector("body").style.backgroundColor;
//     if(color==white)
//     {
//         background.style.backgroundcolor ="black";
//     }
//     else{
//         background.style.backgroundcolor ="white";
//     }
// }
// btn.addEventListener("click",change);

//promises

let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Done");
    },2000);
});


const url = 'https://cat-fact.herokuapp.com/facts';
let para = document.querySelector("#catFacts");
let btn1= document.querySelector("#btn");



const getFacts =async ()=>{
     let response = await fetch(url);
     let data = await response.json();
    para.innerHTML=data[0].text;
}

btn1.addEventListener("click", getFacts);

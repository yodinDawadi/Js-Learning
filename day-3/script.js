// const product ={
// productName: "Parker Jotter Standard CT Ball Pen",
// productRating: 4,
// productPrice: 270,
// productOffer: "5% discount"
// };

// console.log(product.productName);
// console.log(product.productRating);
// console.log(product.productPrice);
// console.log(product.productOffer);
// let a=1;
// let b=2;
// if(a==b)
// {
//     console.log("Both are Equal.")
// }
// else{
//     console.log("a is not Equal to b.")
// }

// let a=prompt("Enter a number")
// if(a%5==0){
//     console.log("The entered number is the multiple of 5.")
// }
// else{
//     console.log("The entred number is not a multiple of 5.")
// }

// for(let i=1; i<=100; i++)
// {
//     console.log(i+"\n");
// }

// let a="Yodin";
// console.log(str.length(a));

// let a= 2;
// let b=3;
// console.log("The value of a is:",a)

// console.log(`${product.productName}`)
// let name= "Yodin Dawadi"
// let age =18
// let gpa= 3.32
// console.log(`my name is ${name}, My age is ${age} and my gpa is ${gpa} `)

// function myFirstFunction(){
//     console.log("My first function")
// }

//function

// let a=4;
// let b=10;
// let result = sum(a,b);
// console.log("The sum of two number is:",result)



// function sum(a,b){
//   let s =  a+b;
//   return s;
// }

//forEach loop in array
// const arr =[1,2,3,4,5];
// arr.forEach((item,index,arr) => {
//        console.log(item,index,arr);
// })

const arr = [4,8,12,16,20,24,28,32,36,40];

const newArr = arr.map((item,index,arr)=>{
    return item/4;
});
console.log(newArr);





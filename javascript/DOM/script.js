// let heading = document.querySelector("h2")
// console.dir(heading)
// heading.innerText = heading.innerText + " " + "apna college" 


    // let divs = document.querySelectorAll(".box");
    // divs[0].innerText = "apna college"; 
    // divs[1].innerText = "uniquw text";

// let para = document.getElementById("paraid")
// console.log(para.firstChild.nodeType)


// let main = document.getElementById("main").children;

// console.log(main)


// let btn = document.createElement("button")

// btn.innerText = "click me";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";

// document.querySelector("body").prepend(btn);


// let para = document.querySelector("p");
// para.getAttribute("class")
// para.setAttribute("class","newClass");


// Practice Questions

// let divs = document.querySelector(".Box");

// function Changed() {
//     let paras = document.querySelectorAll(".box");

//     for (let div of paras) {
//         div.style.backgroundColor = "purple";
//     }
// }

// Changed();


// function Changing(){

//     let div = document.querySelector(".box");
// div.style.backgroundColor = "red";
// div.style.width = "200px";
 
// }
// Changing()

// function myFunc(){

//     for (let i = 1; i <=10; i++){

//         console.log(i)
//     }
// }
// myFunc()


// function myFunc(){
//     let n = prompt("Enter a number");
//     if(n % 2 === 0){
//         console.log("Even")
//     } else{
//         console.log("odd")
//     }
// }
// myFunc()

// let para = document.querySelectorAll(".text");
// para[0].innerHTML = "hi";
// para[1].innerHTML = "bye";

// function myFunc(){

//     let paras = document.querySelectorAll(".num");

//     for(let i=0; i <     paras.length; i++ ){

//         let num = Number(paras[i].innerText);
//         paras[i].innerText = num * num;

//     }
//   }
//     myFunc();


// function sum() {

//     let nums = document.querySelectorAll(".num");
//     let total = 0;

//     for (let i = 0; i < nums.length; i++) {

//         let value = Number(nums[i].innerText);
//         total = total + value;

//     }

//     console.log(total);
// }

// sum();




// function sum(){

//     let nums = document.querySelectorAll(".num")
//     let total = 0;
//     for(let i = 0; i < nums.length; i++ ){

//         let value = Number(nums[i].innerHTML);

//         if(value % 2 != 0){

//             total += value;
//         }
//     } 

//     console.log(total);
// }

// sum()


// function sum(){

//     let nums = document.querySelectorAll(".num")
//     for(let i = 0; i < nums.length; i++ ){

//         nums[i].innerText = Number(nums[i].innerText);

//         if(nums[i0] % 2 === 0){

//          nums[i].innerText = nums[i].innerText * 2;
     
     
//         }
//     } 

    
// }

// sum()


// function greaterNumber() {

//     let nums = document.querySelectorAll(".num");

//     for (let value of nums) {

//         let num = Number(value.innerText);

//         if (num > 10) {
//             value.innerText = "Big";
//         } else {
//             value.innerText = "Small";
//         }
//     }
// }

// greaterNumber();

// function sum(){

//     let nums = document.querySelectorAll(".num")

//     for (let i = 0; i < nums.length; i++ ){

//         let value = Number(nums[i].innerText);

//          let main = nums[i].innerText = value +1;
//          nums[i].innerText = main * main;



//     }
// }
// sum()



// function evenOdd(){

//     let nums = document.querySelectorAll(".num");

//     for( let i = 0; i < nums.length; i++){

//         let value = Number(nums[i].innerText);

        
//         if (value % 2 === 0 ){ 

//             nums[i].innerText = value + 2;
    
    
//     } else {
//         nums[i].innerText = value * value;
//     }
     

// }
    

// }
// evenOdd()





function checkNumbers() {

    let nums = document.querySelectorAll(".num");

    for (let i = 0; i < nums.length; i++) {

        let value = Number(nums[i].innerText);

        if (value > 10) {
            nums[i].innerText = "high";
        } 
        else if (value > 5 && value < 10)  {
            nums[i].innerText = "Mid";
        } 
        else{ 
            nums[i].innerText = "low";
        }
    }
}

checkNumbers();
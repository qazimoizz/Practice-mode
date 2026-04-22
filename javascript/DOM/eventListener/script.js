// let btns = document.querySelectorAll(".btn");
// let body = document.querySelector("body");

// btns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         body.style.backgroundColor = btn.innerText;
//     });
// });



// let box = document.querySelector("#box");

// box.addEventListener("click", () => {
//   let x = Math.random() * (window.innerWidth - 100);
//   let y = Math.random() * (window.innerHeight - 100);

//   box.style.left = x + "px";
//   box.style.top = y + "px";
//     box.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

// });



// let btns = document.querySelectorAll(".a, .b, .c");
// let para = document.querySelector("p")

// btns.forEach(btn =>{

//     btn.addEventListener("click", ()=>{

//         para.textContent = btn.textContent ="button was clicked";
//     })
// })


// let btns = document.querySelectorAll(".a, .b, .c");
// let para = document.querySelector("p");

// btns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         para.textContent = "You clicked " + btn.textContentt;
//     });
// });


let on = document.querySelector(".on");

const onBtn =  ()=>{
    on.textContent = "OFF";
    // on.textContent = "ON";

}
// removeEventListener

on.addEventListener("click",onBtn)

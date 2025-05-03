"use strict"

let currentValue = 0
let inputValue = 0
const btn = document.querySelector(".btn"),
    valueO = document.querySelector("#counter"),
    Rbtn = document.querySelector(".Rbtn"),
    input = document.querySelector(".inp"),
    btnInp = document.querySelector(".btninp"),
    btnY = document.querySelector(".btnY"),
    btnN = document.querySelector(".btnN"),
    bgmodal = document.querySelector(".bgmodal"),
    modal = document.querySelector(".modal"),
    counter = document.querySelector("#counter")



const saved = localStorage.getItem('counter');
function loadValue() {
    const saved = localStorage.getItem('counter');
    currentValue = saved ? parseInt(saved) : 0;
    counter.innerText = currentValue
}


btn.addEventListener("click", () => {
    currentValue += 1;
    valueO.innerText = currentValue;
    localStorage.setItem('counter', currentValue);
})

btnInp.addEventListener("click", () => {
    inputValue = +input.value + currentValue;
    valueO.innerText = inputValue;
    localStorage.setItem('counter', inputValue);
    currentValue = inputValue
})

Rbtn.addEventListener("click", () => {
    bgmodal.classList.toggle("on");
    modal.classList.add("active")

})
btnN.addEventListener("click", () => {
    bgmodal.classList.toggle("on")
    modal.classList.remove("active")
})
btnY.addEventListener("click", () => {
    bgmodal.classList.toggle("on")
    modal.classList.remove("active")
    currentValue = 0
    valueO.innerText = currentValue;
    localStorage.setItem('counter', currentValue);
})

loadValue()
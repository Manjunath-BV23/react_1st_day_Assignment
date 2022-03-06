import {add, print} from "./calc"

import "./index.css"

import logo from "./images/logo.png"

const img = document.createElement("img");
img.src = logo
document.getElementById("root").appendChild(img)

const input = document.createElement("input");
input.setAttribute("id", "input_box");

const br = document.createElement("br");
const br1 = document.createElement("br");


const btn = document.createElement("button")
btn.setAttribute("id", "btn");

btn.textContent = "Display"

const disc = document.createElement("div");
disc.setAttribute("id", "disc")

btn.addEventListener("click", ( (e) =>{
    console.log('hello')
    disc.textContent = input.value;
    document.getElementById("root").append(disc)

}));


document.getElementById("root").append(br,input,br1,btn)





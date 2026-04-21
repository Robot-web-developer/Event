const main = document.createElement("main");

main.style.height = "100vh";
// Fix 1: Corrected the variable name typo
// Fix 2: Changed 'backgroundcolor' to camelCase 'backgroundColor'
main.style.backgroundColor = "red"; 
document.body.appendChild(main);

const box = document.createElement("div");
box.style.height="400px";
box.style.width="400px";
box.style.background ="white";
box.style.borderRadius ="10px";
box.style.display= "flex";
box.style.alignItems = "center";
box.style.justifyContent ="center";
main.appendChild(box);

const  inputbox =document.createElement('div');
const input = document.createElement('input');
const addbutton = document.createElement('button')

box.appendChild('inputbox');
inputbox.appendChild('input');
inputbox.appendChild('addbutton');

addbutton.addEventListener (click, function();
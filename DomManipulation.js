
console.log("dom manipulation")

var dvMbs=document.getElementById("dvMbs");

for(let x=0; x<10; x++){
let nvInput=document.createElement("input");
nvInput.type="text";


nvInput.onmouseenter = function(){
    nvInput.style.background = magiccolor()
}
dvMbs.appendChild(nvInput);
}
function magiccolor()
{
    let r= Math.random()* 256;
    let g= Math.random()* 256;
    let b= Math.random()* 256;
    return `rgb(${r}, ${g} , ${b}`
}
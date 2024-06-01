
document.querySelector("button").addEventListener("click",function(){
    let newColor=randomColor();
    document.querySelector("div").style.backgroundColor=newColor;
    document.querySelector("h1").innerText=newColor;
    document.querySelector("h1").style.color=newColor;
    document.querySelector("button").style.backgroundColor=newColor;  
    });



function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}





document.querySelector("button").addEventListener("click",function(){
    let newColor=randomColor();
    
    document.querySelector("div").style.backgroundColor=newColor;
    document.querySelector("div").innerText="Here is the result";
    document.querySelector("h1").innerText=newColor;
    document.querySelector("h1").style.color=newColor;
    document.querySelector("button").style.backgroundColor=newColor;
    document.querySelector("body").style.backgroundImage = `linear-gradient(45deg, ${randomColor()}, ${randomColor()}, ${randomColor()}, ${randomColor()})`;
    
    });
    
    


    

function randomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

// function async multipleColor(){

//     let c1= await randomColor();
//     let c2= await randomColor();
//     let c3= await randomColor();
//     let c4= await randomColor();
// }





let randomno1=Math.floor(Math.random()*6)+1;

let randomimage= "dice"+randomno1+".png";

let randomimagesource="images/"+randomimage;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);
 

let randomno2=Math.floor(Math.random()*6)+1;

let randomimagesource2="images/dice"+randomno2+".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomimagesource2);

if (randomno1>randomno2 ){
    document.querySelector("h1").innerHTML="Player 1 win";
}
else if(randomno1<randomno2){
    document.querySelector("h1").innerHTML="Player 2 win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
var name1 = "Player1";
var name2 = "Player2";

function editName(){
 name1 = prompt("Your Name Please!");
 name2 = prompt("Your Name Please!");

  document.querySelector("p.Player1").innerHTML=name1;
  document.querySelector("p.Player2").innerHTML=name2;
}


function rollDice(){
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png" );
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png" );

if (randomNumber1>randomNumber2){
  document.querySelector("h1").textContent=name1+" 🔥!";
} else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").textContent=name2+" 🔥!";
} else {
  document.querySelector("h1").textContent="Draw 🤷!";
}
}

let p1 = Math.floor(Math.random() * 6+1);
let p2 = Math.floor(Math.random() * 6+1);
console.log(p1,p2);

heade = document.getElementById("refresh")
if (p1===1){
    document.getElementById("img1").src = "/images/dice1.png";
}if (p1===2){
    document.getElementById("img1").src = "/images/dice2.png";
}if (p1===3){
    document.getElementById("img1").src = "/images/dice3.png";
}if (p1===4){
    document.getElementById("img1").src = "/images/dice4.png";
}if (p1===5){
    document.getElementById("img1").src = "/images/dice5.png";
}if (p1===6){
    document.getElementById("img1").src = "/images/dice6.png";
}

if (p2===1){
    document.getElementById("img2").src = "/images/dice1.png";
}if (p2===2){
    document.getElementById("img2").src = "/images/dice2.png";
}if (p2===3){
    document.getElementById("img2").src = "/images/dice3.png";
}if (p2===4){
    document.getElementById("img2").src = "/images/dice4.png";
}if (p2===5){
    document.getElementById("img2").src = "/images/dice5.png";
}if (p2===6){
    document.getElementById("img2").src = "/images/dice6.png";
}


if (p1>p2){
    document.getElementById("refresh").innerHTML = "Player 1 Wins";
}
else if (p1<p2){
    document.getElementById("refresh").innerHTML = "Player 2 Wins";
}
else if (p1===p2){
    if (p1>p2){
    document.getElementById("refresh").innerHTML = "It's a Draw";
}
}
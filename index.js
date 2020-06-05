var rand1 = Math.floor(Math.random() * 6 + 1);
var rand2 = Math.floor(Math.random() * 6 + 1);

img1 = document.querySelector("img.img1");
img2 = document.querySelector("img.img2");

img1.setAttribute("src", "images/dice" + rand1 + ".png");
img2.setAttribute("src", "images/dice" + rand2 + ".png");

h1 = document.querySelector("h1");

if (rand1 > rand2) {
  h1.textContent = "Player 1 Wins!";
} else if (rand2 > rand1) {
  h1.textContent = "Player 2 Wins!";
} else {
  h1.textContent = "It's a Tie!";
}

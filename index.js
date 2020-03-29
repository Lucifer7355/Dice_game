var random_number_one = Math.floor((Math.random()*6))+1;
var image_1_name = "images/dice" + random_number_one + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image_1_name);


var random_number_two = Math.floor(Math.random()*6)+1;
var image_2_name = "images/dice" + random_number_two  + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image_2_name);


if(random_number_one>random_number_two)
{
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (random_number_two>random_number_one) {
  document.querySelector("h1").innerHTML="Player2 wins";
}
else {
  document.querySelector("h1").innerHTML="There is a draw!!";
}

const bulb = document.getElementById("bulb-off");
const button = document.getElementById("buttonOn");
const icon = document.getAnimations("icon");
var isBulbOn = false;
function turnon() {
  isBulbOn = !isBulbOn; //true
  console.log(isBulbOn);
  if (isBulbOn) {
    bulb.style.backgroundColor = "blanchedalmond";
    bulb.style.boxShadow =
      "0px 0px 10px #daa505, 0px 10px 60px #daa505, 0px 10px 80px #daa505, 0px 10px 100px #daa505, inset 10px 0px 40px #f6c513, inset 20px 0px 60px #daad0a";
    button.style.color = "yellow";
  } else {
    bulb.style.backgroundColor = "gray";
    bulb.style.boxShadow =
      "inset 10px 0px 20px #4c4949, inset 10px 0px 40px #000, inset 20px 0px 60px #000";
    button.style.color = "black";
  }
}

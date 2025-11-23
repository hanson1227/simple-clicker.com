const button = document.getElementById("button");
const shopB = document.getElementById("shopB");
const upgrade_button = document.getElementById("upgrade1");
let score = 0;
let spc = 1;
let shop = false;

document.getElementById("score").textContent = 0

function oshop(){
 if (shop === false) {
  document.getElementById("pannel").animate(
   [
    { transform: "translate(55em, -38.5em)" }
   ],
   {
    duration: 300,
    fill: "forwards",
    easing: "ease-in"
   }
  );
   const UB = upgrade_button.animate(
   [
    { transform: "translate(60em, -35.5em)" }
   ],
   {
    duration: 300,
    easing: "ease-in"
   }
  );
  UB.onfinish = function(){
   upgrade_button.style.transform = "translate(60em, -35.5em)"
   shop = true
  }
 } else {
  document.getElementById("pannel").animate(
   [
    { transform: "translate(80em, -38.5em)" }
   ],
   {
    duration: 300,
    fill: "forwards",
    easing: "ease-out"
   }
  );
  const UB2 = upgrade_button.animate(
   [
    { transform: "translate(90em, -35.5em)" }
   ],
   {
    duration: 300,
    easing: "ease-out"
   }
  );
  UB2.onfinish = function(){
   upgrade_button.style.transform = "translate(90em, -35.5em)"
   shop = false
  }
 }
};

 button.onclick = function(){
 score += spc;
 document.getElementById("score").textContent = score;
};

shopB.onclick = function(){
 oshop();
};

upgrade_button.onclick = function(){
 if (score >= 50){
  score -= 50
  spc += 1
  document.getElementById("score").textContent = score
  document.getElementById("spc").textContent = `score per click: ${spc}`
 }
};

document.addEventListener("keypress", function(pressed){
 if (pressed.key === "e" || pressed.key === "E") {
  oshop();
 }
});
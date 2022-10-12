let c_red = "red";
let c_white = "white";
let center = "center";
let box_h_w = "400px";
let px_50 = "50px";
let shadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
// RESET 
document.querySelector("body").style.textAlign = center
document.querySelector("body").style.boxSizing = "border-box"
document.querySelector("body").style.fontFamily = "sans-serif"
document.querySelector("body").style.padding = "0"
document.querySelector("body").style.margin = "0"
// HEADER 
document.querySelector("header").style.background = c_red
document.querySelector("header").style.padding = "10px 0px"
document.querySelector("header").style.textAlign = center
// ADD CLASS 
document.querySelector("header h1").className = "Header_text"
document.querySelector("header").className = "Header_blue"
// BLUE header 
// document.querySelector("header").style.background = "blue";
document.querySelector("header .Header_text").style.color = c_white
document.querySelector("header .Header_text").style.fontSize = px_50
// BOX
let box = document.querySelector(".box")
let box_number = document.querySelector(".box-number")
let rnd = document.querySelector(".rnd")
box.style.width = box_h_w
box.style.height = box_h_w
box.style.background = c_red
box.style.margin = "auto"
box.style.marginTop = px_50
box.style.borderRadius = "20px"
box.style.boxShadow = shadow
// BOX TEXT 
box_number.style.fontSize = "100px"
box_number.style.color = c_white
box_number.style.textShadow = "4px -1px 10px #954040"
box_number.className = "flex-center h-100"
// BOX BTN 
rnd.style.color = c_white
rnd.style.background = c_red
rnd.style.border = "none"
rnd.style.padding = "18px 100px"
rnd.style.fontSize = "25px"
rnd.style.fontWeight = "500"
rnd.style.borderRadius = "10px"
rnd.style.boxShadow = shadow
rnd.style.margin = "45px auto"
rnd.style.cursor = "pointer"
// RANDOM NUMBER  BTN LIMITED
function randomNumber() {
    document.getElementById('randomNumber').innerHTML = getRndInteger(0,100)
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const canvs = document.getElementById("sono");
const ctx = canvs.getContext("2d");
const info = document.getElementById("sono");

const HEIGHT = canvs.height;
const WIDTH = canvs.width;

const game = {
  over : false,
  score : 0 
};

let obh = Math.random()*3


function clamp (value, min, max){
  return Math.max(min, Math.min(value, max));
}


const player = {
  x: 20,
  y: 280,
  width: 20,
  height: 20,
};

const obstacles = [];

function spobs(){
  if (game.over) return;
  
  obstacles.push(
    x= 670,
    y= 300 - obh,
    width= 30,
    height= obh
  );
};

//입력 처리
window.addEventListner("keydown",e => {
  if(e.code === 'Space'){
    


function update(){
  


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
let jump = false;
let jt = 0;
let lt = 0;


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
window.addEventListener("keydown",e => {
  if(e.code === 'Space'){
    jump = true;
    jt += dt;
  }
  })
window.addEventListener("keyup",() => {jump = false;})
    

//실제 작동
function update(){
  //플레이어 움직임
  if(jump){
    player.y += player.speed * dt * 0.1
    if(jt >= 300)
      player.y -= player.speed * dt * 0.1;
      player.y = clamp(player.y, 0, 300);
      jt=0;
  }

//렌더링
function ren(){
  ctx.fillStyle = "blue"
  ctx.fillRect
  

  
//루프
function loop(time){
  const dt = time - lt;
  lt = time;

  update(dt);
  ren();
  requestAnimationFrame(loop);
}

  //시작
  requestAnimationFrame(loop);

  
    
  


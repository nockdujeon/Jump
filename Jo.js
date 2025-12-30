const canvs = document.getElementById("sono");
const ctx = canvs.getContext("2d");
const info = document.getElementById("sono");

const HEIGHT = canvs.height;
const WIDTH = canvs.width;

const game = {
  over : false,
  score : 0 
};

let obh = Math.round(Math.random()*40)
let jump = false;
let jt = 0;
let lt = 0;
let st = 0;

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
  
  obstacles.push({
    x: 670,
    y: 300,
    width: 40,
    height: 0,
    speed: 5
  });
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
function update(dt){
  if(game.over) return;
  //플레이어 움직임
  if(jump){
    player.y += player.speed * dt * 0.1
    if(jt >= 300)
      player.y -= player.speed * dt * 0.1;
      player.y = clamp(player.y, 0, 300);
      jt=0;
  }

  st += dt
  if(st >= 700){
    spobs();
    obh = clamp(obh, 0, 30);
  
    for ( let i = obstacles.length-1; i>=0; i-- ) {
        const o = obstacles[i];
        //const b = obstacles[i-1];
        //const uou = o.y - b.y ;
  
        o.x -= o.speed * dt * 0.1;
        //o.height = clamp(o.height, 0, 30);
        //uou = clamp(uou, -20 ,10);
  
       if(player.x + player.width >= o.x && player.y + player.height >= o.y){
         game.over = true;
       }
       if(o.x <= WIDTH - o.width){
         spobs();}
       if(o.x + o.width <= 0){
         obstacles.splice(i,1);}
    }

    st = 0;
  }
}
          

//렌더링

//플레이어
function ren(){

  //플레이어
  ctx.fillStyle = "blue"
  ctx.fillRect(player.x, player.y, player.width, player.height)

  //장애물
  ctx.fillStyle = "white"
  for ( let o of obstacles ){
    ctx.fillRect(o.x, 300-obh, o.width, obh)
  }

  //게임 오버
  ctx.fillStyle = "black"
  if(game.over){
    ctx.fillText("Game Over", 300, 100)
  }
}
  
  

  
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

const canvas=document.getElementById("c");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let running=false;

function initGame(){
  running=true;
  spawnEnemy(600,400);
  spawnEnemy(800,600);
  loop();
}

function update(){
  updatePlayer();
  updateEnemies();
  updateHUD();

  if(player.hp<=0){
    running=false;
    showGameOver();
  }
}

function draw(){
  drawWorld(ctx,canvas);
  drawEnemies(ctx,player.x,player.y,canvas);
  drawPlayer(ctx,canvas);
}

function loop(){
  if(!running) return;
  update();
  draw();
  requestAnimationFrame(loop);
}

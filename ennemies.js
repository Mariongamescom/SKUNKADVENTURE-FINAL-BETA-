const enemies=[];

function spawnEnemy(x,y){
  enemies.push({x,y,hp:3});
}

function updateEnemies(){
  enemies.forEach(e=>{
    const dx=player.x-e.x,dy=player.y-e.y,d=Math.hypot(dx,dy);
    if(d>0){e.x+=dx/d*0.5;e.y+=dy/d*0.5;}
    if(d<24) player.hp-=0.2;
  });
}

function drawEnemies(ctx,camX,camY,canvas){
  enemies.forEach(e=>{
    const x=e.x-camX+canvas.width/2;
    const y=e.y-camY+canvas.height/2;
    ctx.fillStyle="#4a148c";
    ctx.beginPath();
    ctx.arc(x,y,16,0,Math.PI*2);
    ctx.fill();
  });
}

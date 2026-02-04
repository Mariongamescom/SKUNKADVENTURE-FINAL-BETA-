const menu=document.getElementById("menu");
const canvas=document.getElementById("c");
const hud=document.getElementById("hud");
const hpBar=document.getElementById("hp");
const gameOverPanel=document.getElementById("gameOver");

document.getElementById("playBtn").onclick=startGame;

function startGame(){
  menu.style.display="none";
  canvas.style.display="block";
  hud.style.display="flex";
  initGame();
}

function updateHUD(){
  hpBar.style.width=Math.max(player.hp,0)+"%";
}

function showGameOver(){
  gameOverPanel.classList.remove("hidden");
}

function restartGame(){
  location.reload();
}

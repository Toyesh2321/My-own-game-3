var canvas,backgroundImg

var gameState = 0;
var playerCount; 
var allPlayers;
var database;

var form, player, game;

var player1 , player2
var alien

function preload(){
    player1_Img = loadImage("js/images/hero.png")
    player2_Img = loadImage("js/images/hero.png")
    alien_Img = loadImage("js/images/alien.png")
    space = loadImage("js/images/space.jpg")
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }

  function draw(){
    if(playerCount === 2){
        game.update(1);
      }

      function spawnAliens(){
        if(frameCount % 50 === 0){
          var alien = createSprite(700,200,40,20)
          alien.addImage(alien);
          alien.y = Math.round(random(280,320))
          alien.scale = 0.6
          alien.velocityY = -3
        }
      }
  }
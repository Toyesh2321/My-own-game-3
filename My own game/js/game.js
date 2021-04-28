class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        player1 = createSprite(100,200);
        player1.addImage("hero",player1_Img);
        player2 = createSprite(700,200);
        player2.addImage("hero",player2_Img);

        alien = createSprite(-300,-300)
        alien.addImage("alien",alien_Img);

        
    }
    play(){
        form.hide()

        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

            var index = 0;

            var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 

        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
        }
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
   }
  }
}
}
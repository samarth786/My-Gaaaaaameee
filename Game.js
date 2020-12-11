class Game {
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
      form = new Form();
      form.display();
    }

     
  PL1 =  createSprite(100, 100, 50, 50);
  PL1.addImage(Pl1Image);
  PL2 =  createSprite(100, 200, 50, 50);
PL2.addImage(Pl2Image);
PL1.scale = 0.3;
PL2.scale = 0.2
  cars = [PL1, PL2];
 

  }

  play(){
    form.hide();

    Player.getPlayerInfo();
  player.getY();
   
    if(allPlayers !== undefined){

     
      //var display_position = 100;
      var x
      var y 
      //index of the array
      var index = 0; 

      for(var plr in allPlayers){
        //add 1 to the index for every loop 
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = 200
 
players[index-1].y = y



console.log(player.index);
        if (index === player.index){
          cars[index - 1].shapeColor = "red";
         
          fill("green");
          stroke("red");
        
          player.getName(index);
          textSize(20);
          fill("white");
          text(n, x - 30, y+100);

        
          
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyDown("w") && player.index !== null){
    player.y = player.y - 7

      player.update();

    }

    if(keyDown("s") && player.index !== null){
      player.y = player.y + 7;
     
    
      player.update();
   
    }

    
    drawSprites();

 
  }

  end(){
   // console.log("Game Ended!!!");
  }
}

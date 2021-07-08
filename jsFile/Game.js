/*this class contains all the function for different game states like start play etc telling how 
the game state will be changing and ahow eacj level should appear in the game (according to the level and gamestate)*/

class Game{
    constructor(){
     // this.homeScreenImg = loadImage('homeScreen.jpg');
     this.playButton = createButton(" PLAY ");
     this.play = createButton(' NEXT LEVEL');
     this.restartLevel = createButton('RESTART');
    }

 start(){
     
   //background(this.homescreenImg);
   textSize(25);
   fill('black');
   text('HOW TO PLAY : ',displayWidth/2 - 700, displayHeight/2 - 250 );
   text('USE ARROW KEYS TO MOVE UP , RIGHT AND LEFT ',displayWidth/2 - 700, displayHeight/2 - 200 );
   text('YOU HAVE TO COLLECT THE GARBAGE AND SEGREGATE THEM TO THE CATEGORY OF BIO , NON BIO  , AND E WASTE: ',displayWidth/2 - 700, displayHeight/2 - 150 );
   text('TO COLLECT GARBAGE TOUCH, AND PRESS B IF YOU THINK IT IS  BIO - DEGRADABLE WASTE' ,displayWidth/2 - 700 , displayHeight/2 - 100 );
   text('PRESS N FOR NON BIO WASTE AND V FOR E WASTE' ,displayWidth/2 - 700 , displayHeight/2 - 50 );
   text('(if you will press wrong key one life will be reduced out of the three lives and if all three lives are gone you will loose the game )' ,displayWidth/2 - 700 , displayHeight/2 );

   // var playButton = createButton(" PLAY ");
   this.playButton.position(displayWidth/2 , displayHeight/2 + 100);
   this.playButton.style('color : grey');
   this.playButton.style('width', '100px');
   this.playButton.style('height', '50px')

   this.playButton.mousePressed(()=>{
    gameState = 1;
    this.playButton.hide();
       
   })
      

 }
 Play(){
 
    if(gameState === 0 && LEVEL === 2 || LEVEL === 3){
   // var play = createButton(' NEXT LEVEL');
      this.play.position(diplayWidth/2  + 200 , displayHeight/2 + 200);
     this.play.style('color : green');
     this.play.style('width', '280px');
     this.play.style('height', '100px')
   }
   
  
   
   //if level and gamestate is one then create village scene
   if(LEVEL === 1 && gameState === 1){
     
     fill('green');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 200, runner.y - 250);
     fill('red');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 200 ,  runner.y  - 200);
     fill('blue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 200 ,  runner.y  - 150);

     createVillageScene();
     console.log(runner.y + ' the speed of the runner')
   }
     if(LEVEL === 2 && gameState === 0){
       showMessage();
       this.play.mousePressed(()=>{
         gamestate = 1;
         runner.y  = 40;
         bioScore = 0;
         nonBioScore = 0;
         eWasteScore = 0;  
       })
     }
   
   //if level is 2 and gamestate is one then create city scene
   if(LEVEL === 2 && gameState === 1){
     

      text('Bio Waste Collected  : ' + bioScore , displayWidth/2 - 200 ,displayHeight/2 - 250);
     text('Non Bio Waste Collected  : ' + nonBioScore , displayWidth - 250 ,displayHeight/2 - 200);
     text('E Waste Collected  : ' + eWasteScore , displayWidth - 200 ,displayHeight/2 - 150);
     
     createCityScene();

      if(LEVEL === 3 && gameState === 0){
       showMessage(2);
       
       this.play.mousePressed(()=>{
        gamestate = 1;
        runner.y  = 40;
        bioScore = 0;
        nonBioScore = 0;
        eWasteScore = 0;  
      })
     }
    }

   //if level is 3 and gamestate is one then create industrial area scene
   if(LEVEL === 3 && gameState === 1){
     

      text('Bio Waste Collected  : ' + bioScore , displayWidth/2- 200 ,displayHeight/2 - 75);
     text('Non Bio Waste Collected  : ' + nonBioScore , displayWidth/2 - 250 ,displayHeight/2 - 150);
     text('E Waste Collected  : ' + eWasteScore , displayWidth/2 - 200 ,displayHeight/2 - 215);

     createInsdrialArea();
     
   }
  }

 end(){
  //background(this.homescreenImg);
   fill('green')
   textSize(30);
  text('YOU DID IT!! YOU HAVE LEARNT HOW TO RECYCLE ', displayWidth/2 - 350 , displayHeight/2 - 200);
  text( 'YOU HAVE TURNED THE WASTE TO RESOURSEFULL AND CREATIVE THINGS ', displayWidth/2 - 350 , displayHeight/2 - 100);
  text('NOW TELL YOUR FIENDS ABOUT WHAT YOU HAVE LEARNT ', displayWidth/2 - 350 , displayHeight/2 );
  text('RECYCLE AND HELP TO SAVE THE PLANET!!', displayWidth/2 - 350 , displayHeight/2 + 100);
 }

 restartGame(){
  //background(this.homescreenImg);

  textSize(30);
  fill('red');
  text( ' YOU LOST , TRY AGAIN' , displayWidth/2 , displayHeight/2);

  this.restartLevel.position(displayWidth/2 , displayHeight/2 + 200)
  this.restartLevel.position(displayWidth/2 + 30 , displayHeight/2 + 30);

  this.restartLevel.mousePressed(()=>{
    runner.y = displayHeight - 100;
    gameState = 1;
    LEVEL = 1;
    lives =3;
    warning = 2;
    bioScore = 0;
    nonBioScore = 0;
    eWasteScore = 0;
    
  })
 }

 showMessage(){

  switch(LEVEL){
     case 2: text('YAY you did it you have completed level one ', displayWidth/2 - 350 , displayHeight/2 - 200 );
             text( 'THERE IS MORE TO LEARN ', displayWidth/2 - 250 , displayHeight/2 - 100);
             text('Recycling is the way to be resourcefull', displayWidth/2 - 300 , displayHeight/2 );
             break;
    case 3: text(' You are doing an amazing job way to the second level is open', displayWidth/2 - 350 , displayHeight/2 - 200);
            text( 'GO AND RECYCLE ', displayWidth/2 - 100 , displayHeight/2 - 100);
            text('Recycling turns things into other things. Which is like MAGIC', displayWidth/2 - 350 , displayHeight/2 );
             break;
          
  }
 

 }

}



















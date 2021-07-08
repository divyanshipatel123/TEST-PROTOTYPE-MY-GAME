 /*   THIS CLASS CONTAINS ALL THE FUNCTIONS TO SPAWN THE OBSTALES AND THE GARBARGES OF DIFFERENT KINDS                                        */
 
 
 function spawnBioWaste(frequency){ 
    if(frameCount % frequency === 0){
        bioW = createSprite(Math.random(50 , displayWidth - 100) ,displayHeight / 2 - 250, 100, 100);
        bioW.scale = 0.22;
                     switch(rand){
                         case 1: bioW.addImage('bioWaste',bio1Img);
                         break;
                         case 2: bioW.addImage('bioWaste', bio2Img);
                         break;
                         case 3: bioW.addImage('bioWaste', bio3Img);
                         break;
                         case 4: bioW.addImage('bioWaste', bio4Img);
                         break;
                         case 5: bioW.addImage('bioWaste', bio5Img);
                         break;
                         case 6: bioW.addImage('bioWaste', bio6Img);
                         break;
                         
                     }
                     console.log('CHEKING WHETHER GARBAGE SPAWNING WORKS OR NOT AFTER THE GIVEN FREQUENCY' + bioW.x);
         if(bioW.y > displayHeight){
             bioW.lifetime = 0;
         }
         bioWasteGroup.add(bioW);           
    }
    
 }

    // this is the function to spawn the non bio waste
    function spawnNonBioWaste(frequency2){
        if(frameCount % frequency2 === 0){
            nonBioW = createSprite(Math.random(50 , displayWidth - 100), displayHeight / 2 - 250, 100, 100);
                         nonBioW.scale = 0.12;
                         switch(rand){
                             case 1: nonBioW.addImage('non bio waste',non1Img);
                             break;
                             case 2: nonBioW.addImage('non bio waste', non2Img);
                             break;
                             case 3: nonBioW.addImage('non bio waste',non3Img);
                             break;
                             case 4: nonBioW.addImage('non bio waste', non4Img);
                             break;
                             case 5: nonBioW.addImage('non bio waste',non5Img);
                             break;
                             case 6: nonBioW.addImage('non bio waste', non6Img);
                             break;
                            
                         }
            if(nonBioW.y > displayHeight){
              nonBioW.lifetime = 0;
            }
            nonBioWasteGroup.add(nonBioW);
        }
        
    }

       // this is the function to spawn the e-waste
        function spawnEWaste(frequency3){
            if(frameCount % frequency3 === 0){
                eW = createSprite(Math.random(50 , displayWidth - 100), displayHeight / 2 - 250, 100, 100);
                             eW.scale = 0.2;
                             switch(rand){
                                 case 1: eW.addImage('e waste',eWImg1);
                                 break;
                                 case 2: eW.addImage('e waste', eWImg2);
                                 break;
                                 case 3: eW.addImage('e waste', eWImg3);
                                 break;
                                 case 4: eW.addImage('e waste', eWImg4);
                                 break;
                                 case 5: eW.addImage('e waste', eWImg5);
                                 break;
                                 case 6: eW.addImage('e waste', eWImg6);
                                 break;
                                 
                             }
                if(eW.y > displayHeight){
                    eW.lifetime = 0;
                } 
                eWasteGroup.add(eW)              
            }
           
        }

 
//----XX------ THE SPAWNING OG THE GARBAGE ENDS HERE NOW WE WILL WRITE THE FUNCTION FOR OBSTACLE ------XX------//
// ============================XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX==============================================//


function spawnvillageObs(frequency4){
    if(frameCount % frequency4 === 0){
        villageObs = createSprite(Math.random(50 , displayWidth - 100), displayHeight / 2 - 250, 100, 100);
                    villageObs.scale = 0.13;
                     
                     switch(rand){
                         case 1: villageObs.addImage('village obstacles',villageObs1);
                         break;
                         case 2: villageObs.addImage('village obstacles', villageObs2);
                         break;
                         case 3: villageObs.addImage('village obstacles', villageObs3);
                         break;
                         case 4: villageObs.addImage('village obstacles', villageObs4);
                         break;
                         case 5: villageObs.addImage('village obstacles', villageObs5);
                         break;
                         case 6: villageObs.addImage('village obstacles', villageObs6);
                         break;
                        }

        if(villageObs.y > displayHeight){
            villageObs.lifetime = 0;
        }
        obstacleGrp.add(villageObs);               
    }
   // obstacleGrp.add(villageObs);
}




 function spawncityObs(frequency5){
    if(frameCount % frequency5 === 0){
        cityObs = createSprite(Math.random(50 , displayWidth - 100), displayHeight / 2 - 250, 100, 100);
                     cityObs.scale = 0.23;
                     var rand = Math.random(1,5);
                     switch(rand){
                         case 1: cityObs.addImage('city obstacle',cityObs1);
                         break;
                         case 2: cityObs.addImage('city obstacle', cityObs2);
                         break;
                         case 3: cityObs.addImage('city obstacle', cityObs3);
                         break;
                         case 4: cityObs.addImage('city obstacle', cityObs4);
                         break;
                         case 5: cityObs.addImage('city obstacle', cityObs5);
                         break;
                        // case 6: cityObs.addImage('city obstacle', cityObs6);
                        // break;
                         
                     }
        if(cityObs.y > displayHeight){
            cityObs.lifetime = 0;
         }
         obstacleGrp.add(cityObs)             
    }
   
}



/**
 * View of the paddle
 */
class View {

      
      /**
      *The left distance of from an element            
      */
      sceneLeft(){
            return  $("#cadre").offset().left;
      }
      /**
       * add a new sprite paddle of ball
       * @param {*} sprite 
       */
      add(sprite){
            
            $("#cadre").append("<span id=" + sprite.id + " class=" + sprite.id + "></span>");
            $("#" + sprite.id).css("width", sprite.dimension.width);
            $("#" + sprite.id).css("height", sprite.dimension.height)
      }
      /**
       * update the position of the sprite 
       * @param {*} sprite the sprite in question 
       */
      update(sprite){
             
             if(sprite.id=="ball"){
                  $("#"+sprite.id).css("left", sprite.topLeft.Xpos);
                  $("#"+sprite.id).css("top", sprite.topLeft.Ypos);
             }
            
             else if(sprite.id=="paddle"){                   
                 $("#"+sprite.id).css("left", sprite.left);
             }
             
       
      }
      /**
       * add the wall to the scene 
       * @param {*} sprite 
       */
      addAll(sprite){ 
                                
            for(var i=0;i<sprite.length;i++){
                  $("#cadre").append("<span id=" + sprite[i].id + " class=" + sprite[i].type + "></span>");
                  $("#" + sprite[i].id).css("left", sprite[i].topLeft.Xpos);
                  $("#" + sprite[i].id).css("top", sprite[i].topLeft.Ypos)
                  $("#" + sprite[i].id).css("width", sprite[i].dimension.width);
                  $("#" + sprite[i].id).css("height", sprite[i].dimension.height);
            }
            
      }
      /**
       * add a new wall to the page 
       * @param {*} sprite 
       */
      newMur(sprite){
                    
            var parent=document.getElementById("cadre");
            for(var i=0;i<sprite.length;i++){   
                  var element= document.getElementById(sprite[i].id);        
                  parent.removeChild(element);
            }
      }
      /**
       * diplay the score 
       * @param {*} score 
       */
      addscore(score){
            var parent=document.getElementById("etat");
            var element= document.getElementById("score");        
            parent.removeChild(element);
            $("#etat").append("<span id=" + "score" + ">"+"votre score est de "+ score +"</span>");
      }
      /**
       * show a message 
       * @param {*} message 
       */
      showMessage(message){
            $("#start").show();
            $("#start").text(message);
        
      }
      /**
       * delete the id start
       */
      hideMessage(){
            $("#start").remove();
      }
      /**
       * show a message when it's win
       * @param {*} message 
       */
      gagne(message){
            $("#gagne").show();
            $("#gagne").text(message);

      }
      /**
       * show a message when it's lose 
       * @param {*} message 
       */
      perdu(message){
            $("#gagne").show();
            $("#gagne").text(message);
      }
      /**
       * diplay the number of life
       * @param {*} number 
       */
      lifes(number){
            if(number==1){
                  let message ="♥"
                  $("#vie").show();
                  $("#vie").text(message);
            }
            else if(number==2){
                  let message ="♥♥";
                  $("#vie").show();
                  $("#vie").text(message);
            }
            else if(number==3){
                  let message ="♥♥♥";
                  $("#vie").show();
                  $("#vie").text(message);
            
      }
}
      hideMess(){
            $("#gagne").hide();
      }
      
     
      
      
}

/**
 * create a moving ball 
 */
class Ball extends Sprite{
    constructor(id,type,position,dimension,movement){        
         super(id,type,position,dimension,movement);
         this._id="ball";
         this._type="ball";
         this._position=position;
         this._topLeft=position;
         this._dimension=dimension;          
         this._Movement=movement;
         
    }   
    /**
     * get the movement of the ball
     */
    get movement(){
        return this._movement;
    }
    /**
     * get the id of ball
     */
    get id(){
        return this._id;
    }
    /**
     * change the movmeent of the ball
     */
    collisionVertical(){
        var position =this._topLeft;
        if(position.Ypos<0){
            this._Movement.reverseY();
        }
        else if(position.Ypos>hauteurScene-largeurBalle){
            this._Movement.reverseY();
        }
    }
    /**
     * change the movmeent of the ball
     */
    collisionHorizontale(){
        var position=this._topLeft;
         if(position.Xpos<0){
           this._Movement.reverseX();              
        }     
        else if(position.Xpos>largeurScene-largeurBalle){
            this._Movement.reverseX();
        }
    }
    collisionBrick(){
    var position =this._topLeft;
        var brikToRemove=[];
        let brick=game.wall; 
    if(position.Ypos<tailleMur*hauteurbrique){            
            for(let i=0;i<brick.length;i++){                               
                if(position.Xpos+(coteBalle/2)>=brick[i].position.Xpos && position.Xpos+coteBalle/2<=brick[i].position.Xpos+64 && position.Ypos<=brick[i].position.Ypos+24 &&position.Ypos>=brick[i].position.Ypos){
                     brikToRemove.push(brick[i]);                    
                     brick.splice(i,1);

                     game.player.addToScore(10);
                     
                     this._Movement.reverseY();                              
                    break;
                }
            }

        }
        return brikToRemove; 
    }
    gameOver(){
        if(this.topLeft.Ypos>=597-coteBalle){
            game.player.loseLives();
            gameCtrl.stop();

        }else if(game.wall.length==0){
            gameCtrl.stop();
        } 
            
        
    }
    /**
     * move the ball in fonction of the obstacles 
     */ 
    move(){
        var position =this._topLeft;        
        var paddle= game._paddle;
        
                 
        this.collisionVertical();
        this.collisionHorizontale();       
        this.collisionBrick();
        this.gameOver();
            
        if(position.Ypos+coteBalle>(hauteurScene-hauteurRaquette) && hauteurScene>position.Ypos+coteBalle){
            if(paddle.left<position.Xpos+coteBalle/2 && paddle.left+largeurRaquette>position.Xpos){
                this._Movement.reverseY();
                this._topLeft =new Position(position.Xpos,hauteurScene-hauteurRaquette-coteBalle-1);              
                
            }    
        
        }
        
        position.horizontal=position.Xpos+this._Movement.deltaX;
        position.vertical=position.Ypos+this._Movement.deltaY;
        
        
    } 
    updateBall(){
        this._topLeft=new Position(entierAleatoire(1,largeurScene-1),hauteurScene-35); 
        this._Movement.reverseY(); 
    }


    
}
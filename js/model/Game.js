/**
 * class wich lanch the game 
 */
class Game{
    constructor(){
        this._paddle=new Paddle(Paddle.id,"paddle",new Position(450),new Dimension(96,16));
        this._ball= new Ball( Ball.id,"ball",new Position(entierAleatoire(1,largeurScene-1),hauteurScene-35),new Dimension(24,24),new Movement(entierAleatoire(3,5),entierAleatoire(-5,-3)));
        this._wall= this.newWall();
        this._player= new Player();

    }
    get player(){
        return this._player;
    }
    /**
     * get the wall 
     */
    get wall(){
        return this._wall;
    }
    /**
     * simple getteur of paddle
     */
    get paddle(){        
        return this._paddle;
    }
    /**
     * simple getteur of brick 
     */
    get brick(){
        return this._brick
    }
    
    /**
     * simple getteur of ball
     */ 
    get  ball(){
        return this._ball;
    }
    /**
     * move the paddle in function mouse
     * @param {*} centerX the position 
     */
    paddleMove(val){        
       this._paddle.move(val);
    }
    /**
     * move the ball en fonction of the movement and change de direction when there is an obstacle 
     */
    ballMove(){
      this._ball.move();
    }
    newWall(){
        var wall = [];
        var positionx = 0;
        var positiony = 0;
        for(let i=1;i<(tailleMur*15)+1;i++){
            wall.push(new Brick(i,"brick",new Position(positionx,positiony),new Dimension(64,24))); 
            positionx = positionx+64;
            if(i%15==0){
                positionx=0;
                positiony=positiony+24;
            }
        }
        return wall;
    }
    gameOver(){
        if(this._ball.topLeft.Ypos==0){
            gameCtrl.stop();
        }
    }
     
    }

    

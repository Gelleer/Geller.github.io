/**
 * class controlleur to launch the game 
 */
class GameCtrl{
    constructor(game,view){
        this._game=game._game;
        this._view=view._view;
        this._paddleCtrl=new PaddleCtrl(game,view);
        this._ballCtrl=new BallCtrl(game,view);
    }
    /**
     * play to move the ball
     */
    play(){     
        this.ballStartWait();        
                          
    }
    
    ballStartWait() {
        view.showMessage("Click to start");
        $(document).mouseup(() => this.ballStart());
     }
     /**
      * create the game 
      */
     ballStart(){         
        view.hideMessage();
        view.add(game.ball);
        view.add(game.paddle); 
        view.addAll(game.wall);
        view.lifes(game.player.lives);
    
        this._ballCtrl.start();
         

     }
     
    /**
     * stop the ball
     */
    stop(){
        if(game.wall.length==0){
            view.gagne("c'est gagné !");
            this._ballCtrl.stop();
        }
        else{
            view.gagne("perdu");            
            view.lifes(game.player.lives)
            this._ballCtrl.stop();
            game.ball.updateBall();
            
            
        }
        if(game.player.lives==0){
            view.gagne("Game Over");
            this._ballCtrl.stop();
        }
        
        
    }
}
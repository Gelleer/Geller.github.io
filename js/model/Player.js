
class Player {

    constructor(){
        this._score=0;
        this._lives=nombredevie;
    }
    /**
     * get the score of the player
     */
    get score(){
        return this._score;
    }
    /**
     * get the number of live of the player
     */
    get lives(){
        return this._lives;
    }
    /**
     * check if the player is in live 
     */
    inLive(){
        if(this._lives==0){
            return false;
        }
        return true;
    }
    /**
     * do lose on life to the player
     */
    loseLives(){
        this._lives=this._lives-1;        
    }
    /**
     * add points to the player
     * @param {} points 
     */
    addToScore(points){
     this._score= this._score +points;
     return this._score;
    }
}
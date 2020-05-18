/**
 * create the movement of the ball 
 * 
 */
class Movement{
    constructor(deltaX,deltaY){
         this._deltaX=deltaX;
         this._deltaY=deltaY;
    }
    /**
     * getteur of the movement X
     */
    get deltaX(){
        return this._deltaX;
    }
    /**
     * getteur of the movement Y
     */
    get deltaY(){
        return this._deltaY;
    }
    /**
     * reverse de position X
     */
    reverseX(){
        var rev=-this._deltaX;
        this._deltaX= rev;
    }
    /**
     * reverse the position Y
     */
    reverseY(){
        var reve=-this._deltaY;
        this._deltaY= reve;
    }
}
/**
 * create the position with y and x
 */
class Position {

    /**
     * constrcutor of the object position 
     * @param {*} x the left to the right 
     * @param {*} y the top to the bottom
     */
    constructor (x,y){
         this._x=x;
             this._y=y;
    }
    /**
     * simple getteur of Xpos
     */
    get Xpos(){
        return this._x;
    }
    /**
     * simple getteur of Ypos
     */
    get Ypos(){
        return this._y;
    }
    /**
     * simple setteur of x
     */
    set horizontal(valeur){
        this._x=valeur;
    }
    /**
     * simple setteur of y
     */
    set vertical(valeur){
        this._y=valeur;
    }
}
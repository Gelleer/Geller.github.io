class Sprite{
    /**
     * constructor of Sprite 
     * @param {*} topLeft the position 
     * @param {*} dimension the dimension 
     */
    constructor(id,type,topLeft,dimension){
        this._id=id;
        this._type=type;
        this._topLeft=topLeft;
        this._dimension=dimension;
        
        
    }
    /**
     * get the id of the sprite 
     */
    get id(){        
        return this._id;
    }
    /**
     * get the type of the sprite 
     */
    get type(){
        return this._type;
    } 
    /**
     * simple getteur of topLeft
     */
    get topLeft(){
        return this._topLeft;
    }
    /**
     * simple getteur of dimension
     */
    get dimension(){
        return this._dimension;
    } 
  
    basObj(){
        return 
    }
}
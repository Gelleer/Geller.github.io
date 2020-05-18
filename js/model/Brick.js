/**
 * create brick
 */
class Brick extends Sprite{
    /**
     * constructor of
     * @param {*} id 
     * @param {*} type 
     * @param {*} position 
     * @param {*} dimensions 
     */
    constructor(id,type,position,dimensions){
        super(id,type,position,dimensions)
        this._id=id;
        this._type="brick";
        this._topLeft=position;
        this._dimension=dimensions;
    }
    /**
     * get the id
     */
    get id(){
        return this._id;
    }
    /**
     * geet the type 
     */
    get type(){
        return this._type;
    }
    /**
     * get the position
     */
    get position(){
        return this._topLeft;
    }
    /**
     * get the dimension
     */
    get dimension(){
        return this._dimension;
    }
   

}
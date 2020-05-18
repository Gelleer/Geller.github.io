
class Dimension{
    /**
     * constructor of Dimension
     * @param {} width the width in integers
     * @param {*} height the height in integers
     */
    constructor(width,height){
        this._width= width;
        this._height=height;
    }
    /**
     * simple getteur of width
     */
    get width(){        
        return this._width;
    }
    /**
     * simple getteur of height
     */
    get height(){
        return this._height;
    }
}
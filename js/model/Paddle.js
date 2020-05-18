/**
 * model for the paddle . Constructor of the paddle
 */
class Paddle extends Sprite{

   /**
   * constructor of paddle with an atrribut paddle
   * @param {*} left the left distance
   */
   constructor(id,type,topLeft,dimension,position){
      super(id,type,topLeft,dimension,position);
      this._id="paddle";
      this._type="paddle";
      this._topLeft=position;
      this._position=position;
      this._dimension=dimension;

      
     
   } 
   /**
    * get the id of the paddle
    */
   get id(){      
      return this._id;
   }
   /**
    * get the left of the paddle
    */
   get left(){
      return this._topLeft;
   }
   /**
    * set the left of the paddle
    */
   set theLeft(left){
      this._topLeft=left;
  }
  
   /**
    * get the number of pixel to the right of the paddle 
    */
   coteDroit(){
     return this._left+largeurRaquette;
   }
   milieu(){
      return this._left+(largeurRaquette/2);
   }

   /**
    * move the paddle in function of the mouse 
    * @param {} val 
    */
   move(val){      
      if(val<0){
         this._topLeft=0;         
      }  
      else if(val>largeurScene-largeurRaquette){
         this._topLeft=largeurScene-largeurRaquette;
      }
      else{
         this._topLeft=val;      
      }   
   }  
}
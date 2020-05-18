/** 
 ∗ Contrôleur de la balle.
 ∗ Propose des méthodes pour démarrer/arrêter la balle et la faire bouger.
 */
 class BallCtrl {

 /** 
 ∗ @param {Ball} ball - la balle à contrôler
 ∗ @param {View} view - la vue
 */
 constructor(game,view) {
 this._ball = game._ball;
 this._view = view;
 view.update(game._ball);
 
 }

 /**  Démarre la balle. */
 start() {
     
 this._moveListener = setInterval(()=>this.move(), 10);
 }

 /** Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue. */ 
 move() {
 game.ballMove();
 this._view.update(this._ball);
 this._view.newMur(this._ball.collisionBrick());
 
 this._view.addscore(game.player.score);

 }

 /** Arrête la balle. */ 
 stop() {
 clearInterval(this._moveListener);
 }
 }

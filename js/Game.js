class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gamestate");
    gameStateRef.on("value", function(data){
      gamestate = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();
    form = new Form();
    form.display();
  }
}

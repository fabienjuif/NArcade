let gravityForce = 0.02;

Sup.ArcadePhysics2D.setGravity(0, -gravityForce);
let levelManager = new LevelManager();


let ioConnection = io.connect("192.168.1.29:4000");

ioConnection.on("action",function(data){
  Sup.log(JSON.stringify(data));
  switch(data.action){
    case "destroy":
      Sup.getActor("Column2").destroy();
      break;
    case "up" :
      break;
    case "down" :
      break;
  }
});

//ioConnection.emit("score",{user:"yvonnick",score:"10"});

ioConnection.on("error",function(data){
  Sup.log("ERROR : ",JSON.stringify(data));
})

levelManager.start();


let gravityForce = 0.02;

Sup.ArcadePhysics2D.setGravity(0, -gravityForce);

let levelManager = new LevelManager();
let groupManager = new GroupsManager();

levelManager.start();


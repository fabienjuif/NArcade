// Constants configurations
let gravityForce = 0.02;
Sup.ArcadePhysics2D.setGravity(0, -gravityForce);

// Managers
let levelManager = new LevelManager();
let groupManager = new GroupsManager();
let messagesManager = new MessagesManager();
let playerManager = new PlayerManager();
let scoreManager = new ScoreManager();

// Start the game
levelManager.start();


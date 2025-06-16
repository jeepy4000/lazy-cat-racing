const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1e1e1e',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {
    preloadAssets(this);
}

function create() {
    cursors = this.input.keyboard.createCursorKeys();
    player = createPlayer(this, 400, 300);
}

function update() {
    updateControls(player, cursors);
}

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

function preload () {
    // Load image from web URL
    this.load.image('kart', 'https://i.imgur.com/OdL0XPt.png');
}

function create () {
    // Add the image to scene
    player = this.physics.add.image(400, 300, 'kart');
    player.setScale(0.5); // Resize if needed

    cursors = this.input.keyboard.createCursorKeys();
}

function update () {
    const speed = 200;
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-speed);
    }
    if (cursors.right.isDown) {
        player.setVelocityX(speed);
    }
    if (cursors.up.isDown) {
        player.setVelocityY(-speed);
    }
    if (cursors.down.isDown) {
        player.setVelocityY(speed);
    }
}

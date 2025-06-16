function createPlayer(scene, x, y) {
    const player = scene.physics.add.image(x, y, 'kart');
    player.setScale(0.5);
    player.setCollideWorldBounds(true);
    return player;
}

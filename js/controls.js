function updateControls(player, cursors) {
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

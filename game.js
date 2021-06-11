const config = {
    width: 1080,
    height: 720,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
const game = new Phaser.Game(config)

let dude;
let cursors;
let platforms;

function preload() {
    this.load.image('dude', './mario.png')
}

function create() {
    dude = this.physics.add.image(0, 0, 'dude')
    dude.body.collideWorldBounds = true

    cursors = this.input.keyboard.createCursorKeys()
}

function update() {
    dude.body.velocity.x = 0

    if (cursors.left.isDown) {
        dude.body.velocity.x = -150
    } else if (cursors.right.isDown) {
        dude.body.velocity.x = 150
    }

    if (cursors.up.isDown && dude.body.blocked.down) {
        dude.body.velocity.y = -200
    }
}

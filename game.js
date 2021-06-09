const config = {
    width: 500,
    height: 300,
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

let dude;
let cursors;
var game = new Phaser.Game(config)

function preload() {
    this.load.image('dude', 'mario.png')
}

function create() {
    dude = this.physics.add.image(100, 100, 'dude')
    dude.body.collideWorldBounds = true;

    cursors = this.input.keyboard.createCursorKeys()
}

function update() {
    dude.setVelocityX(0)
    if(cursors.up.isDown) {
        dude.setVelocity(0, -300)
        console.log('hehe')
    }
    if(cursors.right.isDown) {
        dude.setVelocity(300, 0)
        console.log('hehe')
    }
    if(cursors.left.isDown) {
        dude.setVelocity(-300, 0)
        console.log('hehe')
    }
}

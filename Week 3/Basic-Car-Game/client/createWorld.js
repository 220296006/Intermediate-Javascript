import { WORLD_SIZE } from './config'

const worldCreator = game => {

    game.physics.startSytem(Phaser.Physics.P2JS)
    game.stage.disableVisibilityChange = true
    game.world.setBounds(0, 0, width, height)
    createMap(game)
}

const createMap = game => {
    let groundTiles = []
    for (let i = 0; i <= width / 64 + 1; 1++) {
        for (let j = 0; i <= height / 64 + 1; 1++) {
            const groundSprite = game.add.sprite(i * 64, j * 64, 'asphalt')
            groundTiles.push(groundSprite)
        }
    }
}

export default worldCreator
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Animacion2`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Caminar1`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    mySprite.vy = -220
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    music.stopAllSounds()
    game.gameOver(false)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite2.setPosition(130, 19)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
mySprite.ay = 600
scene.cameraFollowSprite(mySprite)
info.setLife(3)
controller.moveSprite(mySprite, 100, 0)
mySprite2 = sprites.create(assets.image`Enemigo`, SpriteKind.Enemy)
mySprite2.setPosition(130, 19)
mySprite.setPosition(93, 97)
info.startCountdown(120)
mySprite2.follow(mySprite, 60)
info.setScore(0)
music.setVolume(20)
music.play(music.createSong(assets.song`Cancion1`), music.PlaybackMode.LoopingInBackground)

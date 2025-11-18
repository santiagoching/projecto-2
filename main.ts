controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . f f d d d d d d d d d d f f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d f f f f f f f f d d f . 
        . f d d f d d f f d d f d d f . 
        . f f f f d d f f d d f f f f . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . f f d d d d d d d d d d f f f 
        . f d d d d d d d d d d d d d f 
        . f d d d f d d d d d d f d f f 
        . f d f d f f d d f d d f d f f 
        . f d f d d f f f f d d d d d f 
        . f d f f f d d d d d d f f f . 
        . f d d d f f f f f d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        f f f d d d d d d d d d d f f . 
        f d d d d d d d d d d d d d f . 
        f f d f d d d d d d f d d d f . 
        f f d f d d f d d f f d f d f . 
        f d d d d d f f f f d d f d f . 
        . f f f d d d d d d f f f d f . 
        . . . f d d f f f f f d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f f f f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f f f f f d d f . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . . f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f f f f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f f f f . . . . 
        `],
    200,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f . . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f f f f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d f f f d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f 1 1 d d d d d d d f f . . 
        . f f 1 1 d d d d d f f f f . . 
        . f d f f f f f f f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f d d d d d d d d f . . 
        . f f d f d d d d d d d d f . . 
        . f d f f d d d d d d d f f . . 
        . f d d d d d d d d d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f f f f f d d f . . . . 
        `],
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f f f f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d f f f d f . . 
        . . f d d d d d d d d d d f . . 
        . . f f d d d d d d d 1 1 f . . 
        . . f f f f d d d d d 1 1 f f . 
        . . f d d d f f f f f f f d f . 
        . . f d d d d d d d d d d d f . 
        . . f d d d d d d d d f d d f . 
        . . f d d d d d d d d f d f f . 
        . . f f d d d d d d d f f d f . 
        . . . f d d d d d d d d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f f f f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
    if (tiempo > 500) {
        tiempo += -500
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d d d d d d d f . . 
        . f f d d d d d d d d d d f f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d d d d d d d d d d d f . 
        . f d d f d d d d d d f d d f . 
        . f d d f d d d d d d f d d f . 
        . f d d f f f f f f f f d d f . 
        . f f f f d d f f d d f f f f . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . f f d d d d d d d d d d f f f 
        . f d d d d d d d d d d d d d f 
        . f d d d f d d d d d d f d f f 
        . f d f d f f d d f d d f d f f 
        . f d f d d f f f f d d d d d f 
        . f d f f f d d d d d d f f f . 
        . f d d d f f f f f d d f . . . 
        . . f f f d d d d d d d f . . . 
        . . . . f d d f f d d f . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f d d d d f f . . . . 
        . . . f d d d d d d d d f . . . 
        . . f d d f f d d f f d d f . . 
        . . f d d d d d d d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        . . f d d d d 1 1 d d d d f . . 
        f f f d d d d d d d d d d f f . 
        f d d d d d d d d d d d d d f . 
        f f d f d d d d d d f d d d f . 
        f f d f d d f d d f f d f d f . 
        f d d d d d f f f f d d f d f . 
        . f f f d d d d d d f f f d f . 
        . . . f d d f f f f f d d d f . 
        . . . f d d d d d d d f f f . . 
        . . . . f d d f f d d f . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let clover: Sprite = null
let tiempo = 0
let hero: Sprite = null
scene.setBackgroundImage(assets.image`background`)
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f d d d f . . . . . . 
    . . . . f d f d f d f . . f f . 
    . f f . f d d d d d f . f d d f 
    f d d f f d d 1 d d f . f d d f 
    f d d f f f d d d f f f f d d f 
    f d d f d d d d d d d d d d d f 
    f d d d d d d d d d d d d d f . 
    . f d d d d d d d d d d d f . . 
    . f d d f d d d d d f d d f . . 
    f d d d f f f f f f f d d d f . 
    f d d d d d d d d d d d d d f . 
    f d d d f d d f d d f d d d f . 
    . f d d f f f f f f f d d f . . 
    . f d d d d d d d d d d d f . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
tiempo = 5000
hero.setStayInScreen(true)
forever(function () {
    pause(tiempo)
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . f 5 5 2 f . . . . . . 
        . . . . . f 2 5 5 f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 7 7 7 . . . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . 4 4 7 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(tiempo, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 2 f . . . . . . . 
        . . . . . f 5 5 2 f . . . . . . 
        . . . . . f 2 5 5 f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 7 . . . . . . 
        . . . . . . . . 7 7 7 . . . . . 
        . . . . . . . . 7 7 7 7 . . . . 
        . . . . . . . 4 4 7 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})

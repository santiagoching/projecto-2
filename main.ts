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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
    if (tiempo > 500) {
        tiempo += -500
    }
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.pewPew.play()
    info.changeLifeBy(-1)
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
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(tiempo, function () {
    clover = sprites.createProjectileFromSide(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})

namespace SpriteKind {
    export const object = SpriteKind.create()
}
function villain () {
    trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . f 
c f f f f f f f f f f f f f f c 
d c c c c c c c c c c c c c c d 
. d d d d d d d d d d d d d d . 
. . d f . . . . . . . . . d f . 
. . d f . . . . . . . . . d f . 
. d f . . . . . . . . . . f d f 
d f . . . . . . . . . . . . f d 
`, SpriteKind.object)
    trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . f 
c f f f f f f f f f f f f f f c 
d c c c c c c c c c c c c c c d 
. d d d d d d d d d d d d d d . 
. . d f . . . . . . . . . d f . 
. . d f . . . . . . . . . d f . 
. d f . . . . . . . . . . f d f 
d f . . . . . . . . . . . . f d 
`, SpriteKind.object)
    trampo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
f . . . . . . . . . . . . . . f 
c f f f f f f f f f f f f f f c 
d c c c c c c c c c c c c c c d 
. d d d d d d d d d d d d d d . 
. . d f . . . . . . . . . d f . 
. . d f . . . . . . . . . d f . 
. d f . . . . . . . . . . f d f 
d f . . . . . . . . . . . . f d 
`, SpriteKind.object)
}
function back_ground () {
    scene.setBackgroundColor(15)
    scene.cameraFollowSprite(wario)
}
function hero () {
    wario = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . 5 5 6 5 6 5 6 5 5 5 . . . 
. . 5 5 5 5 6 5 6 5 5 5 5 5 . . 
. 5 5 d d d d d d d d d d 5 5 . 
. . . d d d 3 3 b d d d d . . . 
. . d d f f 3 3 b f f f d d . . 
. d 5 d d d f f f d d d d 5 d . 
. d 5 5 5 5 5 d d 5 5 5 5 5 d . 
d d a 5 a 5 5 5 5 5 5 a 5 a d d 
d . b a a a a 5 5 a a a a b . d 
. . c b b b b b b b b b b c . . 
. a c c c c c c c c c c c c a . 
. a b c . . . . . . . . c b a . 
. a a a c . . . . . . c a a a . 
. . . a b . . . . . . b a . . . 
. 7 7 7 6 . . . . . . 6 7 7 7 . 
`, SpriteKind.Player)
    wario.ay = 999
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    wario.vy += -250
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-5, 5)
    trampo.y += Math.randomRange(-5, -6)
})
let wario: Sprite = null
let trampo: Sprite = null
back_ground()
hero()
villain()
game.onUpdate(function () {
    wario.x += controller.dx()
})

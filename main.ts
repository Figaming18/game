input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.AB, function () {
    Player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    let Shot: game.LedSprite = null
    Shot.change(LedSpriteProperty.X, 3)
})
let Player: game.LedSprite = null
Player = game.createSprite(0, 2)
let Opponent = game.createSprite(5, 2)
basic.forever(function () {
	
})
basic.forever(function () {
    basic.pause(2000)
    Opponent.move(-1)
})

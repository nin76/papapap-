input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C C5 B G C5 B G D ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
music.play(music.stringPlayable("C C5 B G C5 B G D ", 122), music.PlaybackMode.LoopingInBackground)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `)
basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.forever(function () {
	
})

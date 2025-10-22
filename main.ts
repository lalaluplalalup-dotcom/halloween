input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    record.startRecording(record.BlockingState.Blocking)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    record.playAudio(record.BlockingState.Blocking)
})
record.setMicGain(record.AudioLevels.Low)
basic.forever(function () {
    for (let Index = 0; Index <= 2; Index++) {
        led.plot(Index, 2)
        led.plot(Index + 2, 2)
        basic.pause(500)
        led.unplot(Index, 2)
        led.unplot(Index + 2, 2)
    }
    record.playAudio(record.BlockingState.Blocking)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
})

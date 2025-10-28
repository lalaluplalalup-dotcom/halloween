basic.forever(function () {
    for (let Index = 0; Index <= 2; Index++) {
        led.plot(Index, 2)
        led.plot(Index + 2, 2)
        basic.pause(500)
        led.unplot(Index, 2)
        led.unplot(Index + 2, 2)
    }
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

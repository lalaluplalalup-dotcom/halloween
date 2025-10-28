def on_forever():
    for Index in range(3):
        led.plot(Index, 2)
        led.plot(Index + 2, 2)
        basic.pause(500)
        led.unplot(Index, 2)
        led.unplot(Index + 2, 2)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        """)
basic.forever(on_forever)

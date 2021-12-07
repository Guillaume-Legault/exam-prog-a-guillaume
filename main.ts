let angle = 0
let intensite = 0
servos.P1.setRange(0, 80)
basic.forever(function () {
    intensite = pins.analogReadPin(AnalogPin.P0)
    servos.P1.setAngle(angle)
    angle = intensite / 10
})

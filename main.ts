input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(4)
    radio.sendString("number")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
/**
 */
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        bitbot.goms(BBDirection.Forward, 100, 5000)
    } else if (receivedString == "B") {
        bitbot.goms(BBDirection.Reverse, 51, 200)
    } else if (receivedString == "L") {
        bitbot.rotatems(BBRobotDirection.Left, 60, 200)
    } else if (receivedString == "R") {
        bitbot.rotatems(BBRobotDirection.Right, 60, 200)
    } else if (receivedString == "number") {
        basic.showNumber(4)
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Coast)
    } else {
        bitbot.stop(BBStopMode.Coast)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
basic.showNumber(4)
radio.setGroup(4)
basic.forever(function () {
	
})

input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
    basic.showArrow(ArrowNames.West)
})
function 左轉燈 () {
    bitbot.ledClear()
    數字 = 0
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0x00FF00)
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    bitbot.rotate(BBRobotDirection.Left, 30)
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
        bitbot.go(BBDirection.Forward, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0x0080FF)
    } else if (receivedString == "B") {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0x0080FF)
    } else if (receivedString == "L") {
        bitbot.rotate(BBRobotDirection.Left, 60)
        左轉燈()
        bitbot.setLedColor(0x8000FF)
    } else if (receivedString == "R") {
        bitbot.rotate(BBRobotDirection.Right, 60)
        右轉燈()
    } else if (receivedString == "number") {
        basic.showNumber(4)
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    } else {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("S")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
    basic.showArrow(ArrowNames.East)
})
function 右轉燈 () {
    bitbot.ledClear()
    數字 = 6
    for (let index = 0; index <= 5; index++) {
        bitbot.setPixelColor(數字 + index, 0x00FF00)
    }
}
let 數字 = 0
basic.showNumber(4)
radio.setGroup(4)
basic.forever(function () {
	
})

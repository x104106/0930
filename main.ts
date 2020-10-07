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
input.onButtonPressed(Button.A, function () {
    basic.showNumber(4)
    radio.sendString("number")
})
function 前進 () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 3) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.setLedColor(0xFF00FF)
        if (bitbot.sonar(BBPingUnit.Centimeters) <= 3) {
            bitbot.stop(BBStopMode.Coast)
            break;
        }
    }
    bitbot.stop(BBStopMode.Coast)
}
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("D")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        前進()
        bitbot.ledClear()
        bitbot.setLedColor(0xFF00FF)
    } else if (receivedString == "B") {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.ledClear()
        bitbot.setLedColor(0x0080FF)
    } else if (receivedString == "L") {
        bitbot.rotate(BBRobotDirection.Left, 20)
        左轉燈()
        bitbot.setLedColor(0x8000FF)
    } else if (receivedString == "R") {
        bitbot.rotate(BBRobotDirection.Right, 20)
        右轉燈()
    } else if (receivedString == "number") {
        basic.showNumber(4)
    } else if (receivedString == "S") {
        bitbot.stop(BBStopMode.Coast)
        bitbot.ledClear()
    } else if (receivedString == "D") {
        for (let index = 0; index < 100; index++) {
            bitbot.buzz(true)
            basic.pause(10)
            bitbot.buzz(false)
            basic.pause(10)
            bitbot.buzz(true)
            basic.pause(10)
            bitbot.buzz(false)
            basic.pause(10)
        }
        bitbot.buzz(false)
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

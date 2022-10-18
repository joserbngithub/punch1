let number_of_punches = 0
input.onGesture(Gesture.Shake, function () {
    number_of_punches += 1
    basic.showNumber(number_of_punches)
})
basic.forever(function () {
	
})

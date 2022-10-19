radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    mano_oponente = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = cuento + 1
    mi_mano = cuento % 1
    if (mi_mano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }
    if (mi_mano == 2) {
        basic.showIcon(IconNames.Square)
    }
    if (mi_mano == 0) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(1)
})
let escogido = false
let mano_oponente = 0
let recibido = false
let cuento = 0
let mi_mano = 0
radio.setGroup(1)
mi_mano = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        escogido = false
        recibido = false
        if (mi_mano == mano_oponente) {
            basic.showIcon(IconNames.Meh)
        } else {
            if (mi_mano == 2 && mano_oponente == 1) {
                basic.showIcon(IconNames.Happy)
            } else {
                if (mi_mano == 1 && mano_oponente == 0) {
                    basic.showIcon(IconNames.Asleep)
                } else {
                    if (mi_mano == 0 && mano_oponente == 2) {
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (mi_mano == 1 && mano_oponente == 0) {
                            basic.showIcon(IconNames.Yes)
                        } else {
                            if (true) {
                            	
                            } else {
                            	
                            }
                        }
                    }
                }
            }
        }
    }
})

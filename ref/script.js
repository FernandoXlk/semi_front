function calc() {
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    var operador = document.getElementById('op').value
    var resultado

    switch (operador) {
        case '+':
            resultado = n1 + n2
            break

        case '-':
            resultado = n1 - n2
            break

        case '*':
            resultado = n1 * n2
            break

        case '/':
            if (n2 !== 0) {
                resultado = (n1 / n2).toFixed(2)
            } else {
                resultado = "Não se divide por 0"
            }
            break

        default:
            resultado = "Operador inválido"
    }

    document.getElementById('res').textContent = resultado
}
var visor = document.getElementById('visor')

function eventoclique(event){
    const valor= event.target.textContent
    if (valor === "÷"){
        visor.value +='/'
    } else if (valor === "x"){
        visor.value += '*'
    } else {
        visor.value += valor
    }
    
}

function validarExpressao(expressao) {
    const sequenciasInvalidas = ['++', '--', '**', '//', '+-', '-+', '*-', '/-', '-*', '-/', '+*', '+/']
    
    for (let sequencia of sequenciasInvalidas) {
        if (expressao.includes(sequencia)) {
            return false 
        }
    }
    
    return true 
}

function calcularExpressao(expressao) {
    return Function('"use strict";return (' + expressao + ')')();
}

function calcular() {
    const expressao = visor.value

    if (!validarExpressao(expressao)) {
        visor.value = "Expressão inválida"
        return
    }

    if (expressao.includes("/0")){
        visor.value = "Erro"
    } else{
        const resultado = calcularExpressao(expressao)
        visor.value = resultado
    }
}

function limparVisor(){
    visor.value = ""
}

function apagarUltimoCaractere() {
    let expressao = visor.value
    visor.value = expressao.substring(0, expressao.length - 1)
}
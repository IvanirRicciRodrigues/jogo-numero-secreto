function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute /* transforma a string chute em um numero inteiro só por adicionar o "+" antes */

    if (chute == 'game over') {
        document.body.innerHTML = `
            <h2>Fim do jogo!</h2>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        document.body.style = 'background-color: red'

    }
    
    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Valor inválido</div>'
       return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') { /* e.target.id seleciona o item com id "jogar-novamente" */
        window.location.reload() /* Reinicia a tela para podermos jogar novamente. Em JavaScript, "window" representa a janela aberta no navegador. Já "location", nessa linguagem, contém informações sobre a URL atual. Por último, "reload()" é usado para recarregar a página.*/
    }
})

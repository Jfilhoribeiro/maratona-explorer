
const question = document.querySelector('#question-input')
const result = document.querySelector('#result')
const errorMessage = document.querySelector('#error-message')

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//Função que é executada após o click no botão
function revelarDestino() {
    //gerando um valor aleatório que vai ser o indice de uma das respostas dentro do array de resposta
    const randomAnswer = Math.floor(Math.random() * respostas.length)

    //verificando se o valor inserido no input esta vazio
    if( question.value.length == 0 || question.value == ' ' || Number(question.value) ) {
        errorMessage.textContent = 'Inválido! Digite uma pergunta.'
        question.value = ""
        setTimeout(() => {
            errorMessage.textContent = ""
        }, 1500)
    }else {
        //inserindo a pergunta e resposta na tela
        result.style.opacity = '1'
        result.innerHTML = `<div> ${question.value}</div> ${respostas[randomAnswer]}`
        question.value = ""
        question.focus()
    }

    clearResult()

}

//função para fazer a pergunta usando a tecla enter
question.addEventListener("keyup", function(event) {
    if(event.key == 'Enter') {
        event.preventDefault()
        btn.click()
    }
})

//função para esconder o texto depois de 3seg
function clearResult() {
    setTimeout(() => {
        result.style.opacity = '0'
    }, 3000)
}
  

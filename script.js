let conta = 0
let pessoas = 0
let porcentagem = 0

const containput=document.querySelector(".conta input")
containput.addEventListener("input")

function recebervalorconta(evento){
    conta=number(evento.target.value)
}

const pessoasinput=document.querySelector("#pessoas")
pessoasinput.addEventListener("input", receberquantpessoas)

function receberquantpessoas(evento){
    const paragrafoerro = document.querySelector(".pessoas #erro")
    const diverro=document.querySelector(".pessoas .input-box")
    
    if(evento.target.value === "0"){
        paragrafoerro.styles.display="none"
        diverro.setAttribute("id", "")
        pessoas=number(evento.target.value)
    }
}

const botoesgorjeta=document.querySelectorAll(".gorjeta input[type='button'] ")
botoesgorjeta.forEach(botao =>{
    botao.addEventListener("click", receberporcentagem)
})

function receberporcentagem(){
    porcentagem=number(evento.target.value) / 100
}
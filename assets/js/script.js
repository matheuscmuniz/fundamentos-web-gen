/* 
Case sensitive = reconhece letras maiusculas e minusculas

por Tag = getElementByTagName()
por Id = getElementById
por Nome = getElementsByName()
por Classe = getElementsByClassName()
por Seletor = querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#Assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome(){
    let txtNome = document.querySelector('#text-nome')
    if(nome.value.length  < 3){
        txtNome.innerHTML = 'Nome invalido'  
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML =' Nome valido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#text-email')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color='red'
    } else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color='green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#text-assunto')
    if(assunto.value.length >= 3){
        txtAssunto.innerHTML = 'Texto muito grande no maximo 300 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'

    }else {
        txtAssunto.style.display ='none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true ){
        alert ('Formulario preenchido com sucessso!!')
    } else {
        alert ('Preenchar corretamente o formulario antes de enviar...')
    }
}

 function mapazoom(){
    mapa.style.width = '900px'
    mapa.style.heigth = '600px'
 }
 function mapanormal(){
    mapa.style.width = '450px'
    mapa.style.heigth = '250px'
 }



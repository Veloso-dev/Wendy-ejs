var sair = document.querySelector('#u-sair')
var titulo = document.querySelector('#titulo')
var nomeUsuario = document.querySelector('#nomeUsuario')
var nomeUsuario2 = document.querySelector('#nomeUsuario2')
var funcaoUsuario = document.querySelector('#funcaoUsuario')

let photo = document.getElementById('imgPhoto')
let file = document.getElementById('flimage')


var usuarios = [{ nome: '', sobrenome:''}]

let userLogado = JSON.parse(localStorage.getItem('userLogado'))


//SAIR DA PAGINA SEM LOGIN
if(localStorage.getItem('token') == null){
    alert('Voce nao esta logado')
    localStorage.removeItem('token')
window.location.href='/'
}
//NOME DO USUARIO
nomeUsuario.innerHTML = userLogado.nome
nomeUsuario2.innerHTML = userLogado.nome
//FUNÇAO
if(funcaoUsuario == userLogado.funcao){
    funcaoUsuario.innerHTML=userLogado.funcao
} else{
    funcaoUsuario.innerHTML=''
}
//BOTAO SAIR
sair.addEventListener('click', () => {
    localStorage.removeItem('token')
window.location.href='/'
    localStorage.removeItem('userLogado')
window.location.href='/'
})
//







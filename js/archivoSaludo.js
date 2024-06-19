let recuperoStorage2 = localStorage.getItem ('email')
let recuperoStorage3 = localStorage.getItem ('contra')

if (recuperoStorage2 != null){
    let mensajeSaludo = `Bienvenido/a: ${recuperoStorage2}!`
    let mostrarMensaje2 = document.querySelector ('.mensajeSaludo')
    mostrarMensaje2.innerText = mensajeSaludo
    let logout = document.querySelector ('.header2')
    logout.innerHTML += '<a class="logout" href="#">Log Out</a>'
    let desaparece = document.querySelector ('.saludoli')
    let desaparece2 = document.querySelector ('.saludoli2')
    desaparece.style.display = 'none'
    desaparece2.style.display ='none'
    console.log(recuperoStorage2)
}


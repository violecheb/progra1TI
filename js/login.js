let formulario = document.querySelector ('form')
let campoEmail = document.querySelector('#email')
let campoContra = document.querySelector ('#password')


formulario.addEventListener ('submit', function(event){
    event.preventDefault ()
    let todosok = true
    if (campoEmail.value == ''){
        alert ('Por favor complete el campo email')
        todosok = false
    }
    if (campoContra.value == ''){
        alert ('Por favor complete el campo contraseña')
        todosok = false
    }else if (campoContra.value.length < 6){
        alert ('La contraseña debe tener al menos 6 caracteres')
        todosok = false

    }if (todosok == true){
        localStorage.setItem ('email',campoEmail.value)
        localStorage.setItem ('contra',campoContra.value)
        console.log (localStorage)
        this.submit()
        window.location.href = "index.html";
    } 
})

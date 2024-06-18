let recuperoStorage1 = localStorage.getItem ('itemsCarrito')
let checkout = document.querySelector(".botoncheckout");
let seccionCarrito = document.querySelector ('.seccionCarrito')
let elementos = ''

if (recuperoStorage1 == null){
    let mensaje = 'Tu carrito esta vacio'
    let mostrarMensaje = document.querySelector ('.mensaje')
    mostrarMensaje.innerText = mensaje

}else{
    carrito = []
    carrito = JSON.parse(recuperoStorage1)
    for (i=0;i<carrito.length; i++) {
        let id = carrito [i]
        let url = `https://fakestoreapi.com/products/${id}`
        fetch (url)
        .then (function (response){
            return response.json ()
        })
        .then (function (data){
            elementos += `<article class="carritosec">
                            <img class="imgcarrito" src = ${data.image}>
                            <h3 class="letratitulocarrito">${data.title}</h3>
                            <p class="letracarrito">${data.category}</p>
                            <p class="letracarrito">${data.description}</p>
                            <p class="preciocart">${data.price} USD</p>
                            </article>`
            seccionCarrito.innerHTML = elementos
        })
        .catch(function (e){
            console.log (e)
        })
    
    }

}

checkout.addEventListener('click', function(){
    localStorage.clear();
    alert("Gracias por tu compra!");
})
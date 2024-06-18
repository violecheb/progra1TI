let recuperoStorage = localStorage.getItem ('itemsCarrito')

let seccionCarrito = document.querySelector ('.seccionCarrito')
let elementos = ''

if (recuperoStorage == null){
    let mensaje = 'Tu carrito esta vacio'
    let mostrarMensaje = document.querySelector ('.mensaje')
    mostrarMensaje.innerText = mensaje
}else{
    carrito = []
    carrito = JSON.parse (recuperoStorage)
    for (i=0;i<carrito.length; i++) {
        let id = carrito [i]
        let url = `https://fakestoreapi.com/products/${id}`
        fetch (url)
        .then (function (response){
            return response.json ()
        })
        .then (function (data){
            elementos += `<article>
                            <img src = ${data.image}>
                            <h3>Nombre: ${data.title}</h3>
                            <p>Descripcion: ${data.description}</p>
                            <p>Categoria: ${data.category}</p>
                            <p>Price: ${data.price}</p>
                            </article>`
            seccionCarrito.innerHTML = elementos
        })
        .catch(function (e){
            console.log (e)
        })
    }

}

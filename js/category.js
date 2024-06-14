let querys = new URLSearchParams(location.search);
let category = querys.get("category");
fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let contenedorcat= document.querySelector("section.productoscategory");
        let productoscat = "";
        for (let i=0; i < data.length; i++){
            let productocat = data[i];
            productoscat += `<article class="productos">
                            <img class="imagenes" src="${productocat.image}"/>
                            <h2 class="titulo">${productocat.title}</h2>
                            <p class="descripcion">${productocat.description}</p>
                            <p class="precio">${productocat.price} USD</p>
                            <a class="boton2" href="producto.html?id=${productocat.id}">Ver más</a>
                        </article>`;
            }
        contenedorcat.innerHTML = productoscat;
    })
    .catch(function(error){
        console.log("El error es: "+ error);
    })
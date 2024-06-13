let categories = {
    "women's clothing": "productos-womens-clothing",
    "men's clothing": "productos-mens-clothing",
    "jewelery": "productos-jewelery"
};

for (let category in categories){
    let nombreContenedor = categories[category];
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                let contenedor = document.querySelector(`div.${nombreContenedor}`);
                let productos = "";
                for(let i=0; i < data.length; i++){
                    let producto = data[i];
                    productos += `<article class="articulo">
                                <img src=${producto.image}'/>
                                <h2>${producto.title}</h2>
                                <p>${producto.description}</p>
                                <p>${producto.price}</p>
                                <a href="detalle.html?id=${producto.id}">Ver más</a>
                            </article>`;
                }
                contenedor.innerHTML = productos;
            })
            .catch(function(error){
                console.log("El error es: " + error);
            })
}

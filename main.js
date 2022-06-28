//variables Goblales
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById ('fin-compra');

const contadorCompra = document.getElementById ('contadorCarrito');
const precioTotal = document.getElementById ('precioTotal');





//logica ecomerce
function mostrarProductos(array) {
    contenedorProductos.innerHTML = ""
    
    array.forEach(el => {
        
        let div = document.createElement('div')
        div.className = 'producto'

        div.innerHTML = `<div class="card">
                            <div class="card-image">
                            <img src="${el.img}">
                            <span class="card-title">${el.nombre}</span>
                            <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>Precio: $${el.precio}</p>
                            <button class="btn btn-success ${el.id}">Agregar al carrito</button>

                        </div>`

        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`boton${el.id}`)
        console.log(btnAgregar)
        btnAgregar.addEventListener ('click', () =>{
            agregarCarrito (el.id)

        })
    
    })

}

function agregarCarrito() {
    const btnAumentar = document.getElementById('btn btn-success')
    const btnEliminar = document.getElementById('btn btn-warning')
    const span = document.getElementById ('span')
    let contador = 0;

    btnAumentar.addEventListener('click', () => {
        contador ++
        span.textContent = contador
    })

    btnEliminar.addEventListener('click', () => {
        contador --
        span.textContent = contador
    })
}

/*
//funcion para agregar al carrito
function agregarCarrito (id) {
    let productoAgregar = stockProductos.find(item => item.id === id);
    console.log(productoAgregar);
    carritoCompras.push(productoAgregar);
    mostrarCarrito(productoAgregar)
    actualizarCarrito()

    localStorage.setItem('carrito',JSON.stringify(carritoDeCompras))
}*/




//funcion para mostrar el carrito
function mostrarCarrito (productoAgregar) {
    let div = document.createElement('div')
    div.classList.add('productoCarrito')
    div.innerHTML = `<p>${productoAgregar.nombre}</p>
                     <p>$${productoAgregar.precio}</p>
                     <button id="quitar"${productoAgregar.id}></button>`

                    contenedorCarrito.appendChild(div)
    
    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    .addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregar.id)
        actualizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    })

}


//funcion para actualizar los valores del carrito

function actualizarCarrito() {
    contenedorCarrito.innerHTML = carritoDeCompras.length
    precioTotal.innerHTML = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0)
}



//funcion para recuperar del localStorage

function recuperar(){
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if(recuperarLS){
       for (const elemento of recuperarLS) {
        mostrarCarrito(elemento)
        carritoDeCompras.push(elemento)
        actualizarCarrito()
       }
    }
}

recuperar()
mostrarProductos(stockProductos);
agregarCarrito()

































//eventos
//const resultado = document.getElementById("resultado");
//const container = document.querySelector(".container");

//let contador = 0;
/*
container.addEventListener("click", (e) =>{
    //console.log("click")
    //console.log(e.target)
    if(e.target.classlist.contains("comprar")){
        contador++;
        pintarContador();
    }
    if(e.target.classlist.contains("eliminar")){
        contador--;
        pintarContador();
    }
})


//funcion contador

const pintarContador = () => {
    resultado.textContent =  contador;
}
*/


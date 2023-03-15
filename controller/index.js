import { adminMode } from "./index-controllers/admin-mode.js";
import { buscador } from "./index-controllers/buscador.js";
import { editar, eliminar } from "./index-controllers/editar-eliminar.js";
import { filtrarZapatos, filtrarCarteras, noFiltrar, filtrarMochila, filtrarNeceser } from "./index-controllers/filtros.js";
import { nuevoRegistro } from "./index-controllers/nuevo-registro.js";



/* Creando los templates para HTML */
const crearProducto = (id, nombre, descripcion, link, tipo) => {
    const productos = document.createElement('div');
    productos.classList.add("col")
    const elemento = `<div class="card" style="width: 300px; height: 430px;">
                            <p id="id" style="display: none;">${id}</p>
                            <p id="tipo" style="display: none;">${tipo}</p>
                            <img src=${link} class="card-img-top" alt="imagen_producto">
                            <h1 class="titulo_card"> ${nombre} </h1>
                            <div class="card-body">
                                <p class="descripcion_card" id="descripcion"> ${descripcion}</p>
                                <div id="adicionales">
                                    <button class="btn btn-primary" type="button" id="editar">Editar</button>
                                    <button class="btn btn-outline-danger" type="button" id="eliminar">Eliminar</button>
                                </div>
                            </div>
                        </div>`;
    productos.innerHTML = elemento;
    return productos;
}

/* Contenedor de los templates */
const productos = document.querySelector(".productos");

/* Conexion con el servidor */
const getConexion = () => fetch('https://andhocatalogo-production.up.railway.app/producto').then((res) => res.json());

getConexion().then((data) => {
    data.forEach(producto => {
        const nuevoProducto = crearProducto(producto.id, producto.nombre, producto.descripcion, producto.link, producto.tipo)
        productos.appendChild(nuevoProducto);
    });
    adminMode();
    nuevoRegistro();
    eliminar();
    editar();
    filtrarZapatos();
    filtrarCarteras();
    filtrarMochila();
    filtrarNeceser();
    noFiltrar();
    buscador();
});



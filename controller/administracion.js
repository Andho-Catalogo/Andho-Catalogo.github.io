import { modificacion } from "./admin-controllers/modificacion.js";
import { nuevoProducto } from "./admin-controllers/nuevoProducto.js";
import { formulario, subirImagen } from "./admin-controllers/subirImagen.js";
import { tipo_producto, descripcion_producto, titulo_producto } from "./admin-controllers/lecturaDomyDB.js";

console.log(tipo_producto.value)

if (window.location.search.includes("logged=true&editar=true&id=")) {
    const titulo = document.querySelector('#titulo_form')
    const boton = document.querySelector('#subir')
    titulo.innerHTML = "Modificar producto"
    boton.innerHTML = "Cambiar"
    modificacion();

}else if (window.location.search.includes("logged=true")) {
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (window.location.search.includes("logged=true")) {
            const resultado = await subirImagen(formulario);
            await nuevoProducto(titulo_producto.value, descripcion_producto.value, resultado, tipo_producto.value);
        }
        window.location.href = './index.html?logged=true'
    });
}





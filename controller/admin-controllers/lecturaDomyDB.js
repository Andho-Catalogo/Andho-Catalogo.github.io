/* Creando el codigo para actualizar */
export const titulo_producto = document.querySelector('#nombre')
export const descripcion_producto = document.querySelector('#descripcion')
export const tipo_producto = document.querySelector('#tipo');

const idUrl = new URLSearchParams(window.location.search)
export const id = idUrl.get('id');

export const datosProducto = (id) => fetch(`https://andhocatalogo-production.up.railway.app/producto/${id}`)
    .then((res) => res.json())


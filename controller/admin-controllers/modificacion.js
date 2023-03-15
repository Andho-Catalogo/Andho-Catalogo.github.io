import { datosProducto, id, tipo_producto, descripcion_producto, titulo_producto } from "../admin-controllers/lecturaDomyDB.js";
import { imagenLink } from "./link-producto.js";

export const modificacion = () =>{
    datosProducto(id).then((data) => {
        titulo_producto.value = data[0].nombre
        descripcion_producto.value = data[0].descripcion
        tipo_producto.value = data[0].tipo
        console.log(tipo_producto)

        formulario.addEventListener('submit', async (e) => {
            e.preventDefault();
            const link = await imagenLink();
            fetch(`https://andhocatalogo-production.up.railway.app/producto/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: titulo_producto.value,
                    descripcion: descripcion_producto.value,
                    link: link,
                    tipo: tipo_producto.value
                })
            }).then((response) => {
                if (response.ok) {
                    window.location.href = './index.html?logged=true'
                }
            })
        });
    })
}


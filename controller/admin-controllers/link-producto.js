import { id, datosProducto } from "../admin-controllers/lecturaDomyDB.js";
import { formulario, subirImagen } from "./subirImagen.js";

export const imagenLink = async () => {
    const imagen = document.querySelector('#imagen')
    let link = ''
    await datosProducto(id).then((data)=>{
        if (imagen.files.length > 0) {
            const resultado = subirImagen(formulario);
            link = resultado
        } else {
            link = data[0].link
        }
    })
    return link;
}
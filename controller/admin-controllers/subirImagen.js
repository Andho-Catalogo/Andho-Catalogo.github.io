/* Subir imaganes a Google Drive y asentar en base de datos*/
export const formulario = document.querySelector('#formulario');

export const subirImagen = async (formulario) => {
    const datosFormulario = new FormData(formulario);
    try {
        const res = await fetch('https://andhocatalogo-production.up.railway.app/subir', {
            method: 'POST',
            body: datosFormulario
        });
        const resultado = await res.json()
        return resultado;
    } catch (error) {
        console.log(error)
    }
};
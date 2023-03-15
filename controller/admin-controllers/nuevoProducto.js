export const nuevoProducto = async (nombre, descripcion, link, tipo) => {
    const res = await fetch('https://andhocatalogo-production.up.railway.app/productos', {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, descripcion, link, tipo })
    })
    const resultado = await res.json()
    return resultado;
};
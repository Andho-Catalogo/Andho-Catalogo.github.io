const on = (element, event, selector, handler) => {
    element.addEventListener(event, (e) => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

export const eliminar = () => {
    on(document, 'click', '#eliminar', (e) => {
        const eliminar = e.target.parentNode.parentNode.parentNode
        const id = eliminar.querySelector('#id').innerHTML
        fetch(`https://andhocatalogo-production.up.railway.app/producto/${id}`, {
            method: "DELETE"
        }).then((response) => {
            if (response.ok) {
                window.location.href = './index.html?logged=true'
            }
        })
    })
}

export const editar = () => {
    on(document, 'click', '#editar', (e) => {
        const editar = e.target.parentNode.parentNode.parentNode
        const id = editar.querySelector('#id').innerHTML
        if (e) {
            window.location.href = `./administracion.html?logged=true&editar=true&id=${id}`
        }
    })
}
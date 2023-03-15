const nuevo = document.querySelector('#nuevo')
export const logeoOk = window.location.search.includes("logged=true");

export const nuevoRegistro = () => {
    nuevo.addEventListener('click', (e) => {
        e.preventDefault();
        if (e && logeoOk) {
            window.location.href = './administracion.html?logged=true'
        }
    })
}
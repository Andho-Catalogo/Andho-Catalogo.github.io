export const filtrar = () => {
    const items = document.querySelector('#items')
    items.addEventListener('click', (e)=>{
        const tipoProducto = document.querySelectorAll('#tipo')
        tipoProducto.forEach(elemento => {
             if(e.target.id !== "todos" && elemento.innerHTML !== e.target.innerHTML.toLowerCase()){
                elemento.parentNode.parentNode.style.display = 'none'
             }else{
                elemento.parentNode.parentNode.style.display = 'block'
             }
        })
    })
}

export const noFiltrar = () => {
    const todos = document.querySelector('#todos')
    todos.addEventListener('click', (e)=>{
        const cards = document.querySelectorAll('.col')
        cards.forEach(elemento =>{
            if(elemento.style.display == 'none'){
                elemento.style.display = 'block'
            }
        })
    })
}
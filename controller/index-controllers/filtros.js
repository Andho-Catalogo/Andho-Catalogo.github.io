export const filtrarZapatos = () => {
    const zapatos = document.querySelector('#zapatos')
    zapatos.addEventListener('click', (e) => {
        const tipoZapato = document.querySelectorAll('#tipo')
        tipoZapato.forEach(elemento => {
            if (elemento.innerHTML !== "zapato") {
                elemento.parentNode.parentNode.style.display = 'none'
            }
            if(elemento.innerHTML == "zapato"){
                elemento.parentNode.parentNode.style.display = 'block'
            }
        })
    })
}

export const filtrarCarteras = () => {
    const carteras = document.querySelector('#carteras')
    carteras.addEventListener('click', (e) => {
        const tipoCartera = document.querySelectorAll('#tipo')
        tipoCartera.forEach(elemento => {
            if (elemento.innerHTML !== "cartera") {
                elemento.parentNode.parentNode.style.display = 'none'
            }
            if(elemento.innerHTML == "cartera"){
                elemento.parentNode.parentNode.style.display = 'block'
            }
        })
    })
}

export const filtrarNeceser = () => {
    const neceser = document.querySelector('#neceser')
    neceser.addEventListener('click', (e) => {
        const tipoNeceser = document.querySelectorAll('#tipo')
        tipoNeceser.forEach(elemento => {
            if (elemento.innerHTML !== "neceser") {
                elemento.parentNode.parentNode.style.display = 'none'
            }
            if(elemento.innerHTML == "neceser"){
                elemento.parentNode.parentNode.style.display = 'block'
            }
        })
    })
}

export const filtrarMochila = () => {
    const mochilas = document.querySelector('#mochila')
    mochilas.addEventListener('click', (e) => {
        const tipoMochia = document.querySelectorAll('#tipo')
        tipoMochia.forEach(elemento => {
            if (elemento.innerHTML !== "mochila") {
                elemento.parentNode.parentNode.style.display = 'none'
            }
            if(elemento.innerHTML == "mochila"){
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
            if(elemento.style.display = 'none'){
                elemento.style.display = 'block'
            }
        })
    })
}
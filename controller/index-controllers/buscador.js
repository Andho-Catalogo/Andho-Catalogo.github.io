export const buscador = () =>{
    const buscar = document.querySelector('#buscar');
    buscar.addEventListener('keyup', (e)=>{
        const palabra = buscar.value.toLowerCase();
        const resultados = document.querySelectorAll('#descripcion')
        resultados.forEach((elemento) => {
            const contenido = elemento.textContent.toLowerCase();
            if(contenido.includes(palabra)){
                (elemento.parentNode.parentNode.parentNode).style.display = 'block'
            }else{
                (elemento.parentNode.parentNode.parentNode).style.display = 'none'
            }
        })
    })
}
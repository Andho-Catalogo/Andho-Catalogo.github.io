import { logeoOk } from "./nuevo-registro.js";

export const adminMode = () => {
    const adicionales = document.querySelectorAll('#adicionales')
    const login = document.querySelector('#login');
    const insta = document.querySelector('#insta');
    if (logeoOk) {
        nuevo.style.display = 'block';
        login.style.display = 'none';
        insta.style.display = 'none';
        adicionales.forEach(elemento => {
            (elemento.parentNode.parentNode).style.height = '450px'
            elemento.style.display = 'block';
        });
    }
}
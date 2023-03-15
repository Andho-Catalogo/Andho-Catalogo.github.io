const formulario = document.querySelector('#login');
const inUsuario = document.querySelector('#usuario');
const inPassword = document.querySelector('#password');

const getConexion = () => fetch('https://andhocatalogo-production.up.railway.app/usuarios').then((res) => res.json());

getConexion().then((data) => {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if ((data[0].nombre) == inUsuario.value && (data[0].contraseña) == inPassword.value) {
            window.location.href = './index.html?logged=true';
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Verifica usuario o contraseña',
            });
        }
    });
});

const formulario = document.querySelector('#login');
const inUsuario = document.querySelector('#usuario');
const inPassword = document.querySelector('#password');

const getConexion = () => fetch('https://andhocatalogo-production.up.railway.app/usuarios', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre: inUsuario.value,
        contrasena: inPassword.value
    })
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    await getConexion()
        .then((response) => {
            if (response.ok) {
                window.location.href = './index.html?logged=true';
            }else{
                Swal.fire({
                    icon: 'error',
                    text: 'Verifica usuario o contraseña',
                });
            }
        });
})

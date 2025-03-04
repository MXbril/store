// Establecer el estado inicial de isOnline en localStorage si no existe
if (localStorage.getItem('isOnline') === null) {
    localStorage.setItem('isOnline', 'false');
}

function renderIcons() {
    const isOnline = localStorage.getItem('isOnline') === 'true';
    const iconoUsuario = document.getElementById('iconoUsuario');
    const iconoCarrito = document.getElementById('iconoCarrito');
    const iconoPerfil = document.getElementById('iconoPerfil');

    if (isOnline) {
        iconoUsuario.classList.add('hidden');
        iconoCarrito.classList.remove('hidden');
        iconoPerfil.classList.remove('hidden');
    } else {
        iconoUsuario.classList.remove('hidden');
        iconoCarrito.classList.add('hidden');
        iconoPerfil.classList.add('hidden');
    }
}

// Asignar eventos a los iconos
document.getElementById('iconoUsuario').addEventListener('click', function() {
    localStorage.setItem('isOnline', 'true');
    renderIcons();
});

document.getElementById('iconoPerfil').addEventListener('click', function() {
    localStorage.setItem('isOnline', 'false');
    renderIcons();
});

// Llamar a renderIcons inicialmente para establecer la vista correcta al cargar
document.addEventListener('DOMContentLoaded', renderIcons);
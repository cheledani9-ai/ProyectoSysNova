//Modal Registro

function abrirModal() {
    document.getElementById("modal").classList.add("activo");
}

function cerrarModal() {
    document.getElementById("modal").classList.remove("activo");
}

window.onclick = function(e) {
    let modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.classList.remove("activo");
    }
}

//Modal Inicio de sesion

function abrirModalLogin() {
    document.getElementById('modalLogin').classList.add ('activo');
}

function cerrarModalLogin() {
    document.getElementById('modalLogin').classList.remove ('activo');
}

window.addEventListener ('click', function(e) {
    const modal = document.getElementById('modalLogin');
    if (e.target === modal) {
        cerrarModalLogin();
    }
});



// Submit inicio de sesion
document.querySelector('#modalLogin form').addEventListener('submit', function(e) {
    e.preventDefault();
    cerrarModalLogin();
    mostrarToast('Inicio de sesión exitoso, ¡bienvenido!');
    this.reset();
});

// Submit registro de empresa
document.querySelector('#modal form').addEventListener('submit', function(e) {
    e.preventDefault();
    cerrarModal();
    mostrarToast('Empresa registrada exitosamente, ¡bienvenido a SysNova!');
    this.reset();
});

// Toast
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #2a2fbb;
        color: white;
        padding: 14px 22px;
        border-radius: 12px;
        font-size: 14px;
        font-family: 'Segoe UI', sans-serif;
        box-shadow: 0 4px 15px rgba(42,47,187,0.3);
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.3s ease;
        width: 90%;
        max-width: 360px;
        text-align: center;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Formulario contacto
document.querySelector('.form1').addEventListener('submit', function(e) {
    e.preventDefault();
    mostrarToast('Mensaje enviado correctamente');
    this.reset();
});


// boton hamburguesa
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('abierto');
    document.querySelector('.registro').classList.toggle('abierto');
}

// carrusel 

    let current = 0;
const track = document.getElementById('track');
const slides = track.querySelectorAll('.carousel-slide');
const total = slides.length;

function goTo(n) {
    current = (n + total) % total;
    track.style.transform = 'translateX(-' + current * 100 + '%)';
}

function mover(dir) { goTo(current + dir); }

setInterval(() => mover(1), 4000);

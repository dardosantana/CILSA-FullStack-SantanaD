/*
// Bootstrap validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Función para cambiar el estilo
function CambioDeEstilo() {
    var body = document.body;
    var card = document.getElementById('tarjeta');
// mantener constrate anterior y no restablecer

    if (body.classList.contains('bg-light')) {
        body.classList.remove('bg-light');
        body.classList.add('bg-dark', 'text-white');
        card.classList.remove('card-light');
        card.classList.add('card-dark');
    } else {
        body.classList.remove('bg-dark', 'text-white');
        body.classList.add('bg-light');
        card.classList.remove('card-dark');
        card.classList.add('card-light');
    }
  
}
*/
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault(); // Evita el envío real del formulario para mostrar el mensaje de éxito
                    form.classList.add('was-validated');
                    document.getElementById('mensajeExito').classList.remove('d-none'); // Muestra el mensaje de éxito
                }
            }, false);
        });

        var contraste = localStorage.getItem('contraste');
        if (contraste === 'oscuro') {
            setDarkMode();
            document.getElementById('switchEstilo').checked = true;
        } else {
            setLightMode();
            document.getElementById('switchEstilo').checked = false;
        }
    }, false);
})();


function CambioDeEstilo() {
    var body = document.body;
    if (body.classList.contains('bg-light')) {
        setDarkMode();
        localStorage.setItem('contraste', 'oscuro');
        document.getElementById('switchEstilo').checked = true;
    } else {
        setLightMode();
        localStorage.setItem('contraste', 'claro');
        document.getElementById('switchEstilo').checked = false;
    }
}

function setDarkMode() {
    var body = document.body;
    var card = document.getElementById('tarjeta');
    body.classList.remove('bg-light');
    body.classList.add('bg-dark', 'text-white');
    card.classList.remove('card-light');
    card.classList.add('card-dark');
}

function setLightMode() {
    var body = document.body;
    var card = document.getElementById('tarjeta');
    body.classList.remove('bg-dark', 'text-white');
    body.classList.add('bg-light');
    card.classList.remove('card-dark');
    card.classList.add('card-light');
}

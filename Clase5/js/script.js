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

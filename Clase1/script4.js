document.getElementById("miFormulario").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("email");

    var email = emailInput.value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValid = true;

    var emailAlert = document.getElementById("emailAlert");
    var emailAlertText=document.getElementById("emailAlertText");
    
    if (!emailRegex.test(email)) {
        emailInput.style.border = "3px solid black";
        emailInput.classList.add("error-placeholder");
        emailInput.value="";
        emailInput.placeholder="esto no es un mail válido";
        isValid = false;
    } else {
        emailInput.style.border = ""; // Restablecer el borde si el correo es válido
        emailInput.classList.remove("error-placeholder");
        emailAlert.style.display = "none";
    }

    if (!isValid) {
        event.preventDefault();
    }
});

document.getElementById("miFormulario").addEventListener("reset", function() {
    var emailInput = document.getElementById("email");    

    emailInput.style.border = ""; // Restablecer el borde al resetear el formulario
    emailInput.classList.remove("error-placeholder");

    var emailAlert = document.getElementById("emailAlert");
    emailAlert.style.display = "none";
});


# Clase5-SANTANA DARDO
# Proyecto: Formulario de Datos Personales

Este proyecto contiene un formulario de registro de datos personales que utiliza Bootstrap para el diseño y la validación, y JavaScript para cambiar entre modos claro y oscuro.

## Archivos y Funcionalidades

### index.html
- **Descripción**: Contiene la estructura del formulario y los enlaces a los archivos CSS y JS necesarios.
  - **Enlace a Bootstrap**: Se incluye para utilizar sus estilos y componentes.
  - **Formulario de Datos Personales**: Contiene campos para nombre, apellido, email, fecha de nacimiento y país de residencia.
  - **Interruptor de Contraste**: Permite cambiar entre modos claro y oscuro.
  - **Enlace a Archivos CSS y JS**: Enlaces a `style.css` y `script.js` para aplicar estilos personalizados y funcionalidad adicional.

### css/style.css
- **Descripción**: Define los estilos personalizados para el formulario, incluyendo los modos claro y oscuro.
  - **Modo Claro y Oscuro**: Clases `.card-light` y `.card-dark` para definir los estilos de la tarjeta en modos claro y oscuro.
  - **Estilos Generales**: Clases `.bg-dark` y `.text-white` para cambiar el fondo y el color del texto en modo oscuro.
  - **Interruptor de Contraste**: Clase `.form-switch` para diseñar el interruptor que cambia entre los modos claro y oscuro.

### js/script.js
- **Descripción**: Contiene los scripts necesarios para la validación del formulario y el cambio de tema.
  - **Función CambioDeEstilo()**: Alterna entre los modos claro y oscuro al cambiar el interruptor de contraste.
  - **Validación de Formulario con Bootstrap**: Script que aplica validación personalizada a los formularios utilizando las clases de Bootstrap.

## Detalles Técnicos
### Validación del Formulario
- **Bootstrap**: Utiliza las clases `needs-validation` y `was-validated` para aplicar estilos de validación personalizados. La validación se realiza al enviar el formulario, previniendo el envío si hay campos no válidos.

### Cambio de Estilo
- **JavaScript**: La función `CambioDeEstilo()` cambia las clases del cuerpo del documento y la tarjeta del formulario para alternar entre los modos claro y oscuro. Esta función se activa al cambiar el estado del interruptor de contraste.

### Estructura del Proyecto
- **HTML**: Estructura básica del formulario con etiquetas de Bootstrap para el diseño y la funcionalidad.
- **CSS**: Estilos personalizados para complementar los estilos de Bootstrap, incluyendo la personalización del interruptor de contraste.
- **JavaScript**: Scripts para manejar la validación del formulario y el cambio de tema.

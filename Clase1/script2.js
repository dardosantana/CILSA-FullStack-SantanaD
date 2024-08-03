function CambioDeEstilo(){
    var currentStyle = document.querySelector('link[rel=stylesheet]');
    if (currentStyle.getAttribute('href')==='estilo2.css'){
        currentStyle.setAttribute('href','estilo1.css');
    }else{
        currentStyle.setAttribute('href','estilo2.css');
    }
}
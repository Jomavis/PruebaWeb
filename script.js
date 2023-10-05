var boton = document.getElementById("cambiar-color");

boton.addEventListener("click", function() {
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
});

function getRandomColor() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

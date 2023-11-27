function cambiarImagen(img) {
    var imgGrande = document.getElementById('imagen-grande');
    imgGrande.src = img.src;
    imgGrande.style.width = "50%";
    imgGrande.style.height = "50%";
}
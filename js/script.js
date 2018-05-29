var cats = document.querySelectorAll(".container-imagem__imagem");
cats.forEach(function(cat) {
    cat.addEventListener("click", function(e) {
        e.target.nextElementSibling.querySelector(".container-imagem__label__contador").textContent = this.textContent++;
    }, false);
}); 
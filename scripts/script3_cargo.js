submitBtn = document.querySelector('.submitBtn2');

function redirect() {setTimeout(() => {
    window.location.href = "veiculos_carga.html";
 }, "10")}

submitBtn.addEventListener("click", redirect);
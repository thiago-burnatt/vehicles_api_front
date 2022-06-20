const anoModelo = document.querySelector('[name = "anoModelo"]');
const anoFabricacao = document.querySelector('[name = "anoFabricacao"]');
const valor = document.querySelector('[name = "valor"]');
const modelo = document.querySelector('[name = "modelo"]');
const consumo = document.querySelector('[name = "consumo"]');
const motor = document.querySelector('[name = "motor"]');
const cargaMax = document.querySelector('[name = "cargaMax"]');
const largura = document.querySelector('[name = "largura"]');
const comprimento = document.querySelector('[name = "comprimento"]');
const altura = document.querySelector('[name = "altura"]');

const btnSubmit = document.querySelector('.submitBtn');

const chaveId = localStorage.getItem('id')
const chaveIdString = JSON.parse(chaveId);
const formAction = document.getElementById('actionForm');
formAction.action = 'http://localhost:8080/cargo/' + chaveIdString;

function redirect() {setTimeout(() => {
    window.location.href = "veiculos_carga.html";
 }, 1)}

fetch('http://localhost:8080/cargo/' + chaveIdString)
    .then(resposta => resposta.json()) // Converte os dados para um objeto
    .then(json => carregaElementosNaPagina(json));


function carregaElementosNaPagina(json) {
    
    anoModelo.value = json.anoModelo;
    anoFabricacao.value = json.anoFabricacao;
    valor.value = json.valor;
    modelo.value = json.modelo;
    consumo.value = json.consumo;
    motor.value = json.motor;
    cargaMax.value = json.cargaMax;
    largura.value = json.largura;
    comprimento.value = json.comprimento;
    altura.value = json.altura;

    btnSubmit.addEventListener('click', redirect);

}
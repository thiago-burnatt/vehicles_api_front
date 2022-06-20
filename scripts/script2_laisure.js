const anoModelo = document.querySelector('[name = "anoModelo"]');
const anoFabricacao = document.querySelector('[name = "anoFabricacao"]');
const valor = document.querySelector('[name = "valor"]');
const modelo = document.querySelector('[name = "modelo"]');
const consumo = document.querySelector('[name = "consumo"]');
const motor = document.querySelector('[name = "motor"]');
const nrPortas = document.querySelector('[name = "nrPortas"]');
const corInterna = document.querySelector('[name = "corInterna"]');
const corExterna = document.querySelector('[name = "corExterna"]');
const btnSubmit = document.querySelector('.submitBtn');

const chaveId = localStorage.getItem('id')
const chaveIdString = JSON.parse(chaveId);
const formAction = document.getElementById('actionForm');
formAction.action = 'http://localhost:8080/laisure/' + chaveIdString;

function redirect() {setTimeout(() => {
    window.location.href = "veiculos_passeio.html";
 }, 1)}

fetch('http://localhost:8080/laisure/' + chaveIdString)
    .then(resposta => resposta.json()) // Converte os dados para um objeto
    .then(json => carregaElementosNaPagina(json));


function carregaElementosNaPagina(json) {
    
    anoModelo.value = json.anoModelo;
    anoFabricacao.value = json.anoFabricacao;
    valor.value = json.valor;
    modelo.value = json.modelo;
    consumo.value = json.consumo;
    motor.value = json.motor;
    nrPortas.value = json.nrPortas;
    corInterna.value = json.corInterna;
    corExterna.value = json.corExterna;

    btnSubmit.addEventListener('click', redirect);

}
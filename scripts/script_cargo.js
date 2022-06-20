

fetch('http://localhost:8080/cargo')
    .then(resposta => resposta.json()) // Converte os dados para um objeto
    .then(json => carregaElementosNaPagina(json));

function salvaId(id) {
    const chaveId = JSON.stringify(id);
    localStorage.setItem('id', chaveId);
    }

function reload() {setTimeout(() => {
       window.location.reload();
    }, 10)}

function carregaElementosNaPagina(json) {
    const table = document.querySelector('.vehicleTable');

    for (let vehicle of json) {

        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = vehicle.anoModelo;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = vehicle.anoFabricacao;
        tr.appendChild(td2);

        let td4 = document.createElement('td');
        td4.innerHTML = vehicle.modelo;
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.innerHTML = vehicle.consumo + " km/l";
        tr.appendChild(td5);

        let td6 = document.createElement('td');
        td6.innerHTML = "R$" + vehicle.valor;
        tr.appendChild(td6);

        let td7 = document.createElement('td');
        td7.innerHTML = vehicle.motor;
        tr.appendChild(td7);

        let td8 = document.createElement('td');
        td8.innerHTML = vehicle.cargaMax + " T";
        tr.appendChild(td8);

        let td9 = document.createElement('td');
        td9.innerHTML = vehicle.largura + " m";
        tr.appendChild(td9);

        let td10 = document.createElement('td');
        td10.innerHTML = vehicle.comprimento + " m";
        tr.appendChild(td10);

        let td11 = document.createElement('td');
        td11.innerHTML = vehicle.altura + " m";
        tr.appendChild(td11);
   
        let btnEdit = document.createElement('button')
        btnEdit.classList.add('btnEdit');
        let linkEdit = document.createElement('a');
        linkEdit.setAttribute('href', 'veiculos_carga_editar.html');
        btnEdit.append(linkEdit);
        linkEdit.innerHTML = 'Editar';
        linkEdit.onclick = function() {salvaId(vehicle.id)};
        tr.appendChild(btnEdit);

        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btnDelete');
        let linkDelete = document.createElement('a');
        linkDelete.setAttribute('href', 'http://localhost:8080/cargo/delete/' + vehicle.id);
        linkDelete.innerHTML = 'Apagar';
        btnDelete.append(linkDelete);
        linkDelete.addEventListener("click", reload);
        tr.appendChild(btnDelete);

        table.appendChild(tr);
    }

};
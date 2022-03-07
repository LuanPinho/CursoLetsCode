let Carros = [];
let Carro = {};
const modelo = document.getElementById('modelo');
const ano = document.getElementById('ano');
const cor = document.getElementById('cor');
const situacao = document.getElementById('situacao');
const lista = document.getElementById("lista");

function adicionar() {
    Carro = {
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value
    }
    Carros.push(Carro);

    lista.innerHTML = Carros.map(function(carro){
        return `<tr>
            <td>${Carro.modelo}</td>
            <td>${Carro.ano}</td>
            <td>${Carro.cor}</td>
            <td>${Carro.situacao}</td>
        </tr>`
    }).join("")
}

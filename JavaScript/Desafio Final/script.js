let item = 1;
let carros = [];

const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const ano = document.getElementById('ano');
const cor = document.getElementById('cor');
const placa = document.getElementById('placa');
const tipo = document.getElementById('tipo');
const valor = document.getElementById('valor');
const lista = document.getElementById("lista");

function carro (item,marca,modelo,ano,cor,placa,tipo,valor) {
    this.item = item;
    this.marca = marca.value;
    this.modelo = modelo.value;
    this.ano = ano.value;
    this.cor = cor.value;
    this.placa = placa.value;
    this.tipo = tipo.value;
    this.valor = valor.value
}

function cadastrar() {
    let carro1 = new carro (item, marca, modelo, ano, cor, placa, tipo, valor);
    
    carros.push(carro1);
    lista.innerHTML = carros.map(function(carro1){
        return `<tr>
            <td>${carro1.item}</td>
            <td>${carro1.marca}</td>
            <td>${carro1.modelo}</td>
            <td>${carro1.ano}</td>
            <td>${carro1.cor}</td>
            <td>${carro1.placa}</td>
            <td>${carro1.tipo}</td>
            <td>${carro1.valor}</td>
        </tr>`
    }).join("");
    console.log(carro1)
    item++;

}

function limpar() {
    marca.value = '';
    modelo.value = '';
    ano.value = '';
    cor.value = '#000000';
    placa.value = '';
    tipo.value = 'zero';
    valor.value = '';
   
    console.log(marca.value)
}
function zeraLista() {
    carros.value = '' 
    lista.innerHTML =  
    `<tr">
        <td colspan="8">lista vazia.</td>
    </tr>`;
};

let item = 1;
let carros = [];

let marca = document.getElementById('marca').value;
let modelo = document.getElementById('modelo').value;
let ano = document.getElementById('ano').value;
let cor = document.getElementById('cor').value;
let placa = document.getElementById('placa').value;
let tipo = document.getElementById('tipo').value;
let valor = document.getElementById('valor').value;
let lista = document.getElementById("lista").value;

function carro(item,marca,modelo,ano,cor,placa,tipo,valor) {
    this.item = item;
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.placa = placa;
    this.tipo = tipo;
    this.valor = valor
}

function cadastrar() {
    let carro1 = new carro (item, marca.value, modelo, ano, cor, placa, tipo, valor);
    
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
    console.log(carros)
    item++;

}

function limpar() {
    marca.innerText = '';
    modelo.innerText = '';
    ano.innerText = '';
    cor.innerText = '';
    placa.innerText = '';
    tipo.innerText = '';
    valor.innerText = '';
   
    console.log(marca.value)
}

let item = 1;
let carros = [];
let valores = [];

const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const ano = document.getElementById('ano');
const cor = document.getElementById('cor');
const placa = document.getElementById('placa');
const tipo = document.getElementById('tipo');
const valor = document.getElementById('valor');
const lista = document.getElementById("lista");
const total = document.getElementById("total");

function carro (item,marca,modelo,ano,cor,placa,tipo,valor) {
    this.item = item;
    this.marca = marca.value;
    this.modelo = modelo.value;
    this.ano = ano.value;
    this.cor = cor.value;
    this.placa = placa.value;
    this.tipo = tipo.value;
    this.valor = (parseFloat(valor.value)).toFixed(2)
}

function cadastrar() {
    let carro1 = new carro (item, marca, modelo, ano, cor, placa, tipo, valor);
    
    

    if (!(parseFloat(carro1.valor) > 0)) {
        carro1.valor = 0.00;
        valores.push(0.00);
    }else{valores.push(parseFloat(carro1.valor))}
    
    carros.push(carro1);
    
    lista.innerHTML = carros.map(function(carro1){
        return `<tr style="text-align:center;">
            <td >${carro1.item}</td>
            <td>${carro1.marca}</td>
            <td>${carro1.modelo}</td>
            <td>${carro1.ano}</td>
            <td>${carro1.cor}</td>
            <td>${carro1.placa}</td>
            <td>${carro1.tipo}</td>
            <td style="text-align:right;">${(carro1.valor).toLocaleString('pt-br', {minimumFractionDigits: 2})}</td>
        </tr>`
    }).join("");

    var tot = valores.reduce((cc,valor) => {
        return cc + valor;
    },0.00);

    total.innerHTML = `${tot.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    console.log(valores)
    console.log(carros)
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
     
    lista.innerHTML =  
    `<tr">
        <td colspan="8">lista vazia.</td>
    </tr>`;
    carros = [];
    valores = [];
    total.innerHTML = ``
    item = 1;
};

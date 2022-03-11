let item = 1;
/*const marca = document.getElementById('marca').value;
const modelo= document.getElementById('modelo').value;
const ano= document.getElementById('ano').value;
const cor= document.getElementById('cor').value;
const placa= document.getElementById('placa').value;
const tipo= document.getElementById('tipo').value;
const valor= document.getElementById('valor').value*/

const carro = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value,
    cor: document.getElementById('cor').value,
    placa: document.getElementById('placa').value,
    tipo: document.getElementById('tipo').value,
    valor: document.getElementById('valor').value
}
function cadastrar() {
    
    console.log(carro);
    item = item++;
}
function limpar() {
    carro.marca = 'asad';
    carro.modelo = '';
    carro.ano = '';
    carro.cor = '';
    carro.placa = '';
    carro.tipo = 'zero';
    carro.valor = '';
    console.log(carro)
}

console.log('===Calculadora===')
function calcular() {
    document.getElementById('result').value = (
        Number(document.getElementById('n1').value.toString().replace(',', '.')) + Number(document.getElementById('n2').value.toString().replace(',', '.'))
        ).toString().replace(',', '.');
}   
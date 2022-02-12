console.log('===Calculadora===')
function calcular() {
    var num1 =document.getElementById('n1').value;
    var num2 =document.getElementById('n2').value;

    var result = parseInt(num1) + parseInt(num2);
    document.getElementById('result').value = result;
} 

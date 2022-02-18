function comparar(){
    let valorComp =window.document.getElementById('comp').value;
    let num1 =  document.getElementById('n1').value;
    let num2 =  document.getElementById('n2').value;
    let comparador = null;

    switch (valorComp) {
        case '0':
            comparador = num1===num2;
        break;
        case '1':
            comparador = num1>num2;
        break;
        case '2':
            comparador = num1<num2;
        break;
        case '3':
            comparador = num1!=num2;
        break;
        case '4':
            comparador = num1<=num2;
        break;
        case '5':
            comparador = num1>=num2;
        break;

        default: comparador = false;
            break;
    }
    
    document.getElementById('resp').value = comparador;
    console.log(valorComp,num1,num2,comparador);
}
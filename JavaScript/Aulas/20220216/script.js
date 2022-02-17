function comparar(){
    let idade =  document.getElementById('idade').value;
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
    
    /*if (valorComp==0) {
        comparador = num1===num2;
    };
    if (valorComp==1) {
        comparador = num1>num2;
    };
    if (valorComp==2) {
        comparador = num1<num2;
    };
    if (valorComp==3) {
        comparador = num1!=num2;
    };
    if (valorComp==4) {
        comparador = num1<=num2;
    };
    if (valorComp==5) {
        comparador = num1>=num2;
    };*/

    document.getElementById('resp').value = comparador;
    console.log(valorComp,num1,num2,comparador);
}

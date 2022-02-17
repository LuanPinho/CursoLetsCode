function verifica(){
    let idade =  document.getElementById('num').value;
    let comparador = '';

    /*switch (valorComp) {
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
    }*/
    
    if (idade <= '12') {
        comparador = 'Você é criança';
    }else if((idade <= '17')){
        comparador = 'Você é adolescente';
    }else if((idade <= '64')){
        comparador = 'Você é adulto';
    }else if((idade >'64')){
        comparador = 'Você é idoso';
    }
    
    /*if (idade >= '18') {
        comparador = 'Você é adulto(a)';
    }
    else{
        comparador = 'Você não é adulto(a)';
    }*/

    document.getElementById('resposta').value = comparador;
    //console.log(valorComp,num1,num2,comparador);
}

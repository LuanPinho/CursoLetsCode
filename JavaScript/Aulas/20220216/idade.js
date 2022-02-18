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
    
    if (Number(idade) <= '0') {
        comparador = 'Você é analfabeto?';
    } else if (Number(idade) <= '12') {
        comparador = 'Você é criança!';
    }else if((Number(idade) <= '17')){
        comparador = 'Você é adolescente!';
    }else if((Number(idade) <= '64')){
        comparador = 'Você é adulto!';
    }else if((Number(idade) <='120')){
        comparador = 'Você é idoso!';
    } else if((Number(idade) >'120')){
        comparador = 'Você é uma múmia?';
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

class cnh{
    constructor(nome,país,idade, categ = ''){
        this._nome = this._capitalize(nome),
        this._pais = país.toUpperCase(),
        this._idade = idade,
        this.categ = categ.toUpperCase()
    }

    _capitalize (string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }

}

let msg = '';
function novacnh(nome,pais,idade,categ ='') {
    var categs = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'];
    
    if (pais.toUpperCase() == 'BR'){
        if (idade < 18){
            msg = 'A idade deve ser maior ou igual a 18 anos.';
        }else{
            if (categ != ''){
                if(!( categs.indexOf(categ.toUpperCase()) >=0 )){
                    msg = `A categoria é ${categ.toUpperCase()} inválida.`;
                }
            }else{
                msg = `No Brasil, a categoria é obrigatótia.`;
            }
        }
    }

    if ((pais.toUpperCase() == 'US') ||  (pais.toUpperCase() == 'CA')){
        if (idade < 16){
            msg = 'A idade deve ser maior ou igual a 16 anos.';
        }
    }

    if ((pais.toUpperCase() == 'RU') ||  (pais.toUpperCase() == 'CH')){
        if (idade < 21){
            msg = 'A idade deve ser maior ou igual a 21 anos.';
        }
    }


    if (msg == ''){
        if (idade < 18){
            msg = 'A idade deve ser maior ou igual a 18 anos.';
        }else{
            return new cnh(nome,pais,idade,categ);
        }
    } else {
        return msg;
    }
}

var cnh2 = novacnh('roberta','CH','18','B') 

console.log(cnh2)


/*Enunciado
Crie uma classe CNH que tenha como propriedades país e idade que, por padrão, deve ser maior ou igual a 18, 16 se for igual a US ou CA e 21 se corresponder a CH ou RU. Se o país for BR deve também ser informada a categoria da carteira (A, B, C, D, E, AB, AC, AD ou AE).*/
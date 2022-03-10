var variavel = {
    valor: 0,
    conversor: '',
    get moeda () {
        return "R$ " + this.valor.toFixed(2).replace('.',',');
    },
    get int () {
        return this.valor;
    },
    set int (i) {
        this.valor = i;
    },
    get conversao () {
        if(this.conversor ==='peso') {
            return 0.046 * this.valor;
        }
    } 
}

variavel.int = 85;
variavel.conversor = 'peso';

console.log(variavel)
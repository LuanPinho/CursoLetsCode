const carro = {
    set cor1 (i) {
        this.cor = i;
    },
    set marca1 (i) {
        this.marca = i;
    },
    
    get carroMenss () {
        return `O carro é da marca ${this.marca} e da cor ${this.cor}.`
    } 
};

carro.marca1 = 'Celta';
carro.cor1 = 'Preto';

console.log(carro.carroMenss)
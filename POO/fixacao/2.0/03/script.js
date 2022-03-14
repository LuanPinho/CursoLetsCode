/*Enunciado
Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume.*/

class tv {
    constructor () {
        this._canal = 100,
        this._volume = 5,
        this._ligada = false
    }
    _sobeCanal(){
        if (this._canal >= 0 && this._canal < 100 ){
            this._canal++;
        }
    }
    _desceCanal(){
        if (this._canal > 0 && this._canal <= 100){
            this._canal--;
        }
    }
    _infCanal(num){
        this._canal = num;
    }
    _ligar(){
        this._ligada = true;
    }
    _desliga(){
        his._ligada = false;
    }
    _aumentaVolume(){
        if(this._volume >= 0 && this._volume < 10){
            this._volume++;
        }
    }
    _diminuiVolume(){
        if(this._volume > 0 && this._volume <= 10){
            this._volume--;
        }
    }
}
let tv1 = new tv()

console.log(tv1)
tv1._ligar()
tv1._aumentaVolume()
tv1._aumentaVolume()
tv1._sobeCanal()
tv1._sobeCanal()
tv1._desceCanal()
console.log(tv1)
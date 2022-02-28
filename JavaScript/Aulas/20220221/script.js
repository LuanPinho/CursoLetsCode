let quant = prompt('informe a quantidade de asteriscos.');
for (i = 1; i <= quant; i++){
    document.write('*');
    if (i%10 == 0) {
        document.write('<br>')
    }
}

for (let l = 1; l < 20; l+=2){
    document.write('&nbsp');
    for (let c = 1;c < 19 ;c++){
        if  ((l == c || c == 19)){
            document.write('*');
        } else if((l - c) > 0 ){
            document.write('&nbsp');
        } else {
            document.write('=');
        }
    }
    document.write('*');
    document.write('<br>');
}
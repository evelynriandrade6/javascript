const tamanho = 10;

let numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
    num = numeros[i];
    if( num % 2 === 0){
        console.log('O número '+num+' é par')
    }
    else {
        console.log('O número '+num+' é Impar')
    }
}

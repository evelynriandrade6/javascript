let numbers = [1,2,3,4,5,6,7,8,9,10,34,21,56,32]
// Estrutura de repetição usando forEach
numbers.forEach((num) => {
   if (num % 2 === 0) {
    console.log('O número '+num+' é par');
   } else {
    console.log('O número '+num+' é Impar');
    }
});

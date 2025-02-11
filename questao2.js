
const number = 7; // valor a ser verificado

function isFibonacci(number) {
    if(!(typeof number === 'number')){
        throw new Error('Valor passado não é um número')
    }
    let a = 0, b = 1;
    
    if (number === 0 || number === 1) return true;
    
    while (b < number) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b === number;
}


if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci.`);
}
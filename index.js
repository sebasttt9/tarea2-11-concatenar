'Use Strict';
function nums(array) {
    for (let i = 0; i < array.length; i++) {
        let numeros = '';
        for (let j = i + 1; j < array.length; j++) {
            let resultado = array[i] + "" + array[j];
            numeros += resultado.padStart (2, '0') + ' ';
        }
        alert(numeros);
    }
}

let array = [0, 2, 4, 8];
nums(array);
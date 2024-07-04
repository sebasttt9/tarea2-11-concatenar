function nums(array) {
    for (let i = 0; i < array.length; i++) {
        let numeros = '';
        for (let j = i + 1; j < array.length; j++) {
            let resultado = array[i] + "" + array[j];
            if (resultado < 10) {
                numeros += '0' + resultado + ' ';
            } else {
                numeros += resultado + ' ';
            }
        }
        alert(numeros);
    }
}

let array = [0, 2, 4, 8];
nums(array);

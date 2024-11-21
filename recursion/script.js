// Рекурсия
'use strict';

function outputReverseNumber(item) {
    let result = 0;

    function formatNumber(item) {
        if (!Number.isInteger(item)) {
            return new Error('Необходимо ввести число');
        }
        if (!(/^[1-9]+$/.test(item))) {
            return new Error('Число не должно содержать 0');
        }

        if (item % 10 !== 0) {
            result = 10 * result + item % 10;
            formatNumber((item - item % 10) / 10);
        }

        return result;
    }

    return formatNumber(item);
}

console.log(outputReverseNumber(9087324));
console.log(outputReverseNumber(987324));
console.log(outputReverseNumber('123123'));

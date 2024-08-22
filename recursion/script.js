'use strict';
// Рекурсия
let result = 0;

function outputReverseNumber(item) {
    if (item % 10 !== 0) {
        result = 10 * result + item % 10;
        outputReverseNumber((item - item % 10) / 10);
    }

    return result;
}

console.log(outputReverseNumber(987654));

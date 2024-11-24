'use strict';

// Написать фунцию, которая будет принимать неограниченное количество строк
// в качестве аргументов, и возвращать сформированное в случайном порядке предложение

function sentenceGenerator(...data) {
    return [].sort.call(data, () => Math.random() - 0.5).join(' ');
}
console.log(sentenceGenerator('число', 'рука', 'я в лодке'));
// =============================================


// Написать функцию, которая будет принимать в качестве аргумента 2 строки
// (серия и номер паспорта) и возвращать строку "Паспорт: ХХХХ ХХХХХХ".

function getPassportData() {
    if (arguments.length !== 2) {
        return new Error('Необходимо ввести два параметра');
    }

    if (![].every.call(arguments, (item)=> typeof item === 'string')) {
        return new Error('Параметры должны быть строкового типа');
    }

    if (['4,6', '6,4'].indexOf([].map.call(arguments, (item) => item.length).toString()) < 0) {
        return new Error('Один из параметров должен содержать 4 символа, второй - 6 символов');
    }

    return `Паспорт: ${[].join.call(
        [].sort.call(arguments, (a,b) => (a.length < b.length) ? -1 :
            ((a.length > b.length) ? 1 : 0)), ' '
    )}`
}
console.log(getPassportData("121122", "2334"));
// =============================================


// Реализовать привязку объекта пользователя к методу, чтобы можно было
// вызвать функцию и получить данные из объекта. Для связки использовать bind
function getFullName() {
    return `${this.name} ${this.lastname}`
}
let User = {
    name: "John",
    lastname: "Doe"
}
const getName = getFullName.bind(User);
console.log(getName());
// =============================================


// Конструктор функции
let mathOperations = ["return a + b + c", "return a * b", "return a - b - c", "return b / c"];
let getResultMathOperatioin = new Function(
    'a', 'b', 'c',
    'return new Function("a", "b", "c", mathOperations[Math.floor(Math.random() * mathOperations.length)])(a,b,c);'
);
console.log(getResultMathOperatioin(1,2,3));
console.log(getResultMathOperatioin(1,2,3));

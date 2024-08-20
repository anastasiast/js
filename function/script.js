'use strict';

// Написать фунцию, которая будет принимать неограниченное количество строк
// в качестве аргументов, и возвращать сформированное в случайном порядке предложение

function sentenceGenerator(...data) {
    return [].sort.call(data, () => {
        return Math.random() - 0.5
    }).join(' ');
}
console.log(sentenceGenerator('число', 'рука', 'я в лодке'));
// =============================================


// Написать функцию, которая будет принимать в качестве аргумента 2 строки
// (серия и номер паспорта) и возвращать строку "Паспорт: ХХХХ ХХХХХХ".

function getPassportData() {
    let result = [].filter.call(arguments, (item) => {
            return typeof item === "string" || item instanceof String
        });

    result.sort((a, b) => {
        return (a.length < b.length) ? -1 :
            ((a.length > b.length) ? 1 : 0)
    });

    let error = result.length != arguments.length ? 'Укажите аргументы строкового типа' :
        (result.length !== 2 ? 'Необходимо ввести два параметра' : false);

    if (!error) {
        error = (result[0].length !== 4 || result[1].length !== 6) ?
            'Введите параметры в следующем виде: ХХХХ ХХХХХХ' : false;
    }

    if (error) {
        alert(error);

        return false;
    }

    alert('Паспорт: ' + result.join(' '));
}
getPassportData("147985", "1334");
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
alert(getName());
// =============================================


// Конструктор функции
let mathOperations = ["return a + b + c", "return a * b", "return a - b - c", "return b / c"];
let randMathOperation = mathOperations[Math.floor(Math.random() * mathOperations.length)];
let getResultMathOperation = new Function('a', 'b', 'c', randMathOperation);
alert(getResultMathOperation(1, 2, 3));

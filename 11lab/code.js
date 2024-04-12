// Функция calculateExpression принимает два аргумента: действительное число 'a' и натуральное число 'n'.
function calculateExpression(a, n) {
    // Инициализация переменной P, которая будет хранить результат вычисления.
    let P = 1;
    // Цикл, который будет выполняться от 0 до n включительно.
    for (let i = 0; i <= n; i++) {
        // На каждой итерации цикла умножаем P на выражение (a - i * n) и присваиваем это значение P.
        P *= (a - i * n);
    }
    // Возвращаем результат вычисления.
    return P;
}

// Запрос пользователю ввести действительное число 'a' с помощью диалогового окна.
let a = parseFloat(prompt("Введите действительное число a:"));
// Запрос пользователю ввести натуральное число 'n' с помощью диалогового окна.
let n = parseInt(prompt("Введите натуральное число n:"));

// Вызов функции calculateExpression с передачей в неё введенных пользователем значений 'a' и 'n', результат сохраняется в переменной 'result'.
let result = calculateExpression(a, n);
// Вывод результата вычисления с помощью диалогового окна.
alert("Результат вычисления: " + result);

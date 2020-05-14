// 1. Создать массив arr1 из 100 элементов и заполнить его числами от 1 до 100 в случайном порядке.
// Каждое число должно встречаться в массиве ровно один раз.
// 2. Создать массив arr2, который формируется из массива arr1 следующим образом:
//     первым элементом нового массива становится последний элемент массива arr1,
//     вторым элементом - предпоследний, и т.д.
// 3. Создать третий  массив arr3, который формируется как разность соответствующих элементов массива arr1 и arr2.
// 4. Для третьего массива посчитать среднее арифметическое значение всех элементов.

let arr1 = Array(100)
    .fill()
    .map(function (a, i) {
        return i + 1;
    })
    .sort(function () {
        return 0.5 - Math.random();
    })

let arr2 = arr1.map(function (a, i) {
    return arr1[100 - i - 1];
})

let arr3 = arr1.map(function (a, i) {
    return arr1[i] - arr2[i];
})

let sum = arr3.reduce(function (a, n) {
    return a + n;
})

let average = function(sum, n){
    return (sum / n) + (sum % n);
};

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(average(sum, 100));
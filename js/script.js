// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr = [1, 2, 3];
arr.reverse();
console.log(arr);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
const arr = ['js', 'css', 'jq'];
alert(arr.shift());

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const arr = ['js', 'css', 'jq'];
alert(arr.pop());

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].
const arr = [1, 2, 3, 4, 5];
let arrNew = arr.splice(0, 3);
console.log(arrNew);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].
const arr = [1, 2, 3, 4, 5];
let arrNew = arr.splice(3, 2);
console.log(arrNew);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].
const arr = [1, 2, 3, 4, 5];
let arrNew = arr.splice(1, 3);
console.log(arrNew);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(-1, 0, 'c'); //можно ли объеденить дублирующиеся методы?
arr.push('e');
console.log(arr);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr = [3, 4, 1, 2, 7];
arr.sort();
console.log(arr);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const arr = [5, 6, 7, 8, 9];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr = [5, 6, 7, 8, 9];
arr.forEach ((item, index) => arr[index] = Math.pow(item, 2));
console.log(arr);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
let arrNew = arr.filter(item => item < 0);
console.log(arrNew);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
let arrNew = arr.filter(item => item % 2 === 0);
console.log(arrNew);

// // 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
let arrNew = arr.filter(item => item.length > 5);
console.log(arrNew);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
const arr = [1, 2, [3, 4], 5, [6, 7]];
let arrNew = arr.filter(item => Array.isArray(item) );
console.log(arrNew);

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.
const arr = [1,-3, 5, 6,-7, 8, 9,-11];
let arrNew = arr.filter(item => item < 0);
let amountNegativeNumber = arrNew.length;
console.log(amountNegativeNumber);
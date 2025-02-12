let a = [ 0, 1, 2, 3, 4 ]
let b = [ '0', '1', '2', '3', '4' ]
let c = [ true, true, false, true, false, true, ]
let d = [ 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 0, '0', true, 8, 5, 3, 13, 1, 108]


console.log(d[0]);
console.log(d[1]);
console.log(d[2]);
console.log(d[5]);
console.log(d[8]);
console.log(d[7]);
console.log('длина массива', d.length, 'индекс последнего элемента', d.length - 1);
console.log(d[d.length - 1]);

// цикл для вывода всех значений
for (let i = 0; i < d.length; i++) {
    console.log('индекс', i, 'элемент массива', d[i]);
}





let list = [];

// функция добавления значения из инпута в массив и див
function add() {
    let addDiv = document.getElementById('ad');
    let input = document.getElementById('aa');
    
    // добавить значение в конец массива list
    list.push(input.value)
    
    console.log('длина массива', list.length);
    console.log(list);
    
    addDiv.innerText = list;
}

// функция добавления значения из инпута в массив и див
function add2() {
    let ol = document.getElementById('tt');
    let input = document.getElementById('aa');
    
    // добавить значение в конец массива list
    list.push(input.value)
    
    console.log('длина массива', list.length);
    console.log(list);
    
    let liElement = document.createElement('li');
    liElement.innerText = input.value;
    ol.append(liElement)
}

function addList() {
    let ol = document.getElementById('tt');
    // цикл для вывода всех значений
    for (let i = 0; i < list.length; i++) {
        let liElement = document.createElement('li');
        liElement.innerText = list[i];
        ol.append(liElement)
    }
}
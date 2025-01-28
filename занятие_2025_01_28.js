let div1 = document.getElementById('a1');
let div2 = document.getElementById('b1');
let div3 = document.getElementById('c1');
let div4 = document.getElementById('asdasd');

div3.innerText = 'inner text';
div3.innerHTML = '<b>inner text</b>'
div3.innerText = div3.innerText + ' 000000234';

let input = document.getElementById('iii');
let input2 = document.getElementById('bbb');

// console.log(input.value);
// input.value = '00000000';
// console.log(input.value);
// input.placeholder = 'asdasd'

// console.log(input.value, input2.value);
// console.log(input.value + input2.value);
// console.log(Number(input.value) + Number(input2.value));
// console.log(+input.value + +input2.value);


function plusNumber() {
    console.log('Сложение чисел');
    console.log(+input.value + +input2.value);
}

function clearNumbers() {
    input.value = '';
    input2.value = '';
}
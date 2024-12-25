let a = 0;
let sp = document.getElementById('total');
let chetnoe = document.getElementById('even');
let three = document.getElementById('three');
let five = document.getElementById('five');
let seven = document.getElementById('seven');

function minus10() {
    a = a - 10;
    // возможен короткий вариант a -= 10;
    sp.innerText = a;
    
    if (a % 2 === 0) {
        chetnoe.innerText = 'Да';
    }
    else {
        chetnoe.innerText = 'Нет';
    }
    
    if (a % 3 === 0) {
        three.innerText = 'Да';
    }
    else {
        three.innerText = 'Нет';
    }
    
    if (a % 5 === 0) {
        five.innerText = 'Да';
    }
    else {
        five.innerText = 'Нет';
    }
    
    if (a % 7 === 0) {
        seven.innerText = 'Да';
    }
    else {
        seven.innerText = 'Нет';
    }
}

function minus1() {
    a = a - 1;
    // возможен короткий вариант a -= 1;
    sp.innerText = a;
    
    if (a % 2 === 0) {
        chetnoe.innerText = 'Да';
    }
    else {
        chetnoe.innerText = 'Нет';
    }
    
    if (a % 3 === 0) {
        three.innerText = 'Да';
    }
    else {
        three.innerText = 'Нет';
    }
    
    if (a % 5 === 0) {
        five.innerText = 'Да';
    }
    else {
        five.innerText = 'Нет';
    }
    
    if (a % 7 === 0) {
        seven.innerText = 'Да';
    }
    else {
        seven.innerText = 'Нет';
    }
}

function plus1() {
    a = a + 1;
    // возможен короткий вариант a += 1;
    sp.innerText = a;
    
    if (a % 2 === 0) {
        chetnoe.innerText = 'Да';
    }
    else {
        chetnoe.innerText = 'Нет';
    }
    
    if (a % 3 === 0) {
        three.innerText = 'Да';
    }
    else {
        three.innerText = 'Нет';
    }
    
    if (a % 5 === 0) {
        five.innerText = 'Да';
    }
    else {
        five.innerText = 'Нет';
    }
    
    if (a % 7 === 0) {
        seven.innerText = 'Да';
    }
    else {
        seven.innerText = 'Нет';
    }
}

function plus10() {
    a = a + 10;
    // возможен короткий вариант a += 10;
    sp.innerText = a;
    
    if (a % 2 === 0) {
        chetnoe.innerText = 'Да';
    }
    else {
        chetnoe.innerText = 'Нет';
    }
    
    if (a % 3 === 0) {
        three.innerText = 'Да';
    }
    else {
        three.innerText = 'Нет';
    }
    
    if (a % 5 === 0) {
        five.innerText = 'Да';
    }
    else {
        five.innerText = 'Нет';
    }
    
    if (a % 7 === 0) {
        seven.innerText = 'Да';
    }
    else {
        seven.innerText = 'Нет';
    }
}
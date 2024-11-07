function clearDiv() {
    console.log('вызываем очистку дива');
    // получаем див для очистки
    let div = document.getElementById('clear');
    // чистим всё то, что внутри
    div.innerText = '';
}

function makeRed() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'red';
}

function makeGreen() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'green';
}

function makeBlue() {
    let body = document.getElementById('sdf');
    body.style.backgroundColor = 'blue';
}

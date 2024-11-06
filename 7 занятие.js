function clearDiv() {
    console.log('вызываем очистку дива');
    // получаем див для очистки
    let div = document.getElementById('clear');
    // чистим всё то, что внутри
    div.innerText = '';
}


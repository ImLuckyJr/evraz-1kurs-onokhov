// Обычное добавление

// let i = 4;
//
// function addLi() {
//     let addElement = document.getElementById('add');
//     let liElement = document.createElement('li');
//     liElement.innerText = i;
//     addElement.append(liElement);
//     i = i + 1;
// }

// function addLi() {
//     let addElement = document.getElementById('add');
//     let input = document.getElementById('name')
//     let liElement = document.createElement('li');
//
//     if (input.value === '') {
//         alert('Добавь значение')
//     }
//     else {
//         liElement.innerText = input.value;
//
//         if (+input.value % 2 === 0) {
//             liElement.classList.add('chet')
//         }
//         else {
//             liElement.classList.add('nechet')
//         }
//
//         addElement.append(liElement);
//
//         input.value = '';
//     }
// }


for (let i = 0; i < 5; i++ ) {
    console.log(i + 1, 'ПРивет мир');
}
let listDOM = document.getElementById('list');
let inputName = document.getElementById('name');
let selectCategory = document.getElementById('category');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');

let categories = {
    'clothes': 'Одежда',
    'shoes': 'Обувь',
    'tools': 'Инструменты',
}

function discount(item) {
    let field = document.getElementById('discountDom')
    
    if (item) {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'flex', 'important')
    }
    else {
        // чтобы перебить ранее написанный стиль с !important
        field.style.setProperty('display', 'none', 'important')
    }
}

function addTovar() {
    let discountChoose = document.querySelector('input[name=discount]:checked');
    
    let cardTovar = document.createElement('div');
    cardTovar.classList.add('tovar');
    let card = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">${ categories[selectCategory.value] }</div>
            <div class="tovar-specials">Особенности: </div>
            <div class="tovar-description">Описание</div>
            <div class="tovar-price-count">
                <!--<div class="tovar-price">Цена: 1000 руб.</div>-->
                <div class="tovar-price">
                    <div>Цена: </div>
                    <div>
                        <div class="tovar-price-old"></div>
                        <div>${ inputPrice.value } руб. (${ discountChoose.value })</div>
                    </div>
                </div>
                <div class="count">Количество: ${ inputCount.value } шт.</div>
            </div>
            <div class="tovar-close">X</div>`
    
    cardTovar.innerHTML = card;
    listDOM.append(cardTovar);
}
let inputDiscountBody = document.getElementById('discountBody');
let inputName = document.getElementById('name');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let selectCategory = document.getElementById('category');
let inputDescription = document.getElementById('description');
let inputDiscount = document.getElementById('discount');
let tovarList = document.getElementById('list')

let categories = {
    'clothes': 'Одежда',
    'tools': 'Инструменты',
    'home': 'Товары для дома',
}

function discountChoose(active) {
    // else: false, 0, '', null, undefined
    // if: [], {}, '1231', true, 1
    if (active) {
        inputDiscountBody.classList.remove('hide')
    }
    else {
        inputDiscountBody.classList.add('hide')
    }
}

function addTovar() {
    let discountElement = document.querySelector('input[name=discountChoose]:checked');
    let specials = document.querySelectorAll('input[name=specials]:checked');
    
    let tovar = document.createElement('div');
    tovar.classList.add('tovar');
    
    let tovarInner = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">Категория: ${ categories[selectCategory.value] }</div>
            <div class="tovar-specials">Особенности: ___, ___</div>
            <div class="tovar-description">${ inputDescription.value }</div>
            <div class="tovar-price-count">
                <div class="tovar-price">Цена: ${ inputPrice.value } руб</div>
                <!--<div class="tovar-price">-->
                <!--    <div class="tovar-price-text">Цена</div>-->
                <!--    <div>-->
                <!--        <div class="tovar-price-old">1000 руб</div>-->
                <!--        <div class="tovar-price-new">800 руб</div>-->
                <!--    </div>-->
                <!--</div>-->
                <div class="tovar-count">Количество: ${ inputCount.value } шт</div>
            </div>
            <div class="tovar-edit">
                <button>Редактировать</button>
            </div>
            <div class="tovar-close">Х</div>`;
    
    tovar.innerHTML = tovarInner;
    tovarList.append(tovar);
}
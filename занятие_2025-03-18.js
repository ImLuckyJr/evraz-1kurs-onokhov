let inputDiscountBody = document.getElementById('discountBody');
let inputName = document.getElementById('name');
let inputPrice = document.getElementById('price');
let inputCount = document.getElementById('count');
let selectCategory = document.getElementById('category');
let inputDescription = document.getElementById('description');
let inputDiscount = document.getElementById('discount');
let tovarList = document.getElementById('list')
let titleAdd = document.getElementById('title-add');
let titleEdit = document.getElementById('title-edit');
let buttonAdd = document.getElementById('button-add');
let buttonEdit = document.getElementById('button-edit');
let form = document.getElementById('form');

let products = []

let categories = {
    'clothes': 'Одежда',
    'tools': 'Инструменты',
    'home': 'Товары для дома',
}

let specialsObj = {
    'bu': 'Б/У',
    'fragile': 'Хрупкое'
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
    let discountElement = document.querySelector('input[name=discountChoose2]:checked');
    let specials = document.querySelectorAll('input[name=specials]:checked');
    
    let tovar = document.createElement('div');
    tovar.classList.add('tovar');
    
    let price = '';
    
    if (discountElement.value == 'true') {
        let priceVal = +inputPrice.value;
        priceVal = priceVal - priceVal * (+inputDiscount.value / 100);
        price = `<div class="tovar-price">
                    <div class="tovar-price-text">Цена</div>
                    <div>
                        <div class="tovar-price-old">${ inputPrice.value } руб</div>
                        <div class="tovar-price-new">${ priceVal } руб</div>
                    </div>
                </div>`
    }
    else {
        price = `<div class="tovar-price">Цена: ${ inputPrice.value } руб</div>`
    }
    
    let specialsValues = []
    let specialsArr = [];
    let specialsText = '';
    
    for (let i = 0; i < specials.length; i++) {
        let spec = specialsObj[specials[i].value];
        specialsArr.push(spec)
        specialsValues.push(specials[i].value)
    }
    
    specialsText = specialsArr.join(', ')
    
    let product = {
        name: inputName.value,
        category: selectCategory.value,
        price: inputPrice.value,
        count: inputCount.value,
        discountChoose: discountElement.value,
        discount: inputDiscount.value,
        specials: specialsValues,
        description: inputDescription.value,
    }
    let productIndex = products.push(product) - 1;
    
    let tovarInner = `<div class="tovar-name">${ inputName.value }</div>
            <div class="tovar-category">Категория: ${ categories[selectCategory.value] }</div>
            <div class="tovar-specials">Особенности: ${ specialsText }</div>
            <div class="tovar-description">${ inputDescription.value }</div>
            <div class="tovar-price-count">
                ${ price }
                <div class="tovar-count">Количество: ${ inputCount.value } шт</div>
            </div>
            <div class="tovar-edit">
                <button onclick="setEdit(${ productIndex })">Редактировать</button>
            </div>
            <div class="tovar-close">Х</div>`;
    
    tovar.innerHTML = tovarInner;
    tovarList.append(tovar);
    
    // очистка формы после добавления
    form.reset();
    inputDiscountBody.classList.add('hide')
}

function setEdit(index) {
    titleAdd.classList.add('hide');
    titleEdit.classList.remove('hide');
    buttonAdd.classList.add('hide');
    buttonEdit.classList.remove('hide');
    
    let product = products[index];
    inputName.value = product.name;
    selectCategory.value = product.category;
    inputPrice.value = product.price;
    inputCount.value = product.count;
    inputDiscount.value = product.discount;
    inputDescription.value = product.description;
    
    let discountChoose = document.querySelector(`input[name=discountChoose2][value=${ product.discountChoose }]`);
    discountChoose.checked = true;
    
    if (product.discountChoose == 'true') {
        inputDiscountBody.classList.remove('hide')
    }
    
    for (let i = 0; i < product.specials.length; i++) {
        let specialValue = product.specials[i]
        let specials = document.querySelector(`input[name=specials][value=${ specialValue }]`);
        specials.checked = true;
    }
}
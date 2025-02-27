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
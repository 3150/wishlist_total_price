const totalPrice = () => {
    let totalPrice = 0;
    const wishBoxElements = document.getElementsByClassName('bcs_boxItems');

    if (wishBoxElements.length === 0) {
        return 0
    }

    for (const item of wishBoxElements) {
        if (item.getElementsByClassName('bcs_itemOverlay is-delete').length === 0) {
            itemPrice = item.getElementsByClassName('bcs_tax bcs_price')[0].innerText.replace(/[^0-9]/g, '');
            totalPrice += Number(itemPrice)
        }
    }
    return totalPrice;
}

window.onload = () => {
    let itemSizeResultElement = document.getElementById('bcs_resultTxt');
    let totalPriceElement = document.createElement('p');
    totalPriceElement.setAttribute('id', 'extension_total_price');
    totalPriceElement.textContent = '合計金額: ' + totalPrice() + '円(税込)';
    itemSizeResultElement.appendChild(totalPriceElement);
}

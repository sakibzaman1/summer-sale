let total = 0;

function handleOnClick(target){
    
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    
    const li = document.createElement('li');
    li.innerText = itemName;

    selectedItemContainer.appendChild(li);

    const priceText = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceText);

    total = total + price;

    document.getElementById('total-price').innerText = total;

}
let total = 0;

// function for closing Modal


// Function For Applying Coupon

function applyOnClick() {

    const couponCode = document.getElementById('coupon-code').innerText;

    const inputCoupon = document.getElementById('input-coupon').value;


    if (couponCode == inputCoupon) {
        const discount = (total * 20) / 100;
        const afterDiscount = total - (total * 20) / 100;
        document.getElementById('discount').innerText = discount.toFixed(2);
        document.getElementById('after-discount').innerText = afterDiscount.toFixed(2);
    }
    else if (inputCoupon.length == 0) {
        alert('Please Enter a Coupon Code')
    }
    else if (couponCode != inputCoupon) {
        alert('Invalid Coupon');
    }

}

// Function For Product Buying


function handleOnClick(target) {

    // Total Price

    const selectedItemContainer = document.getElementById('ordered-items');
    const itemName = target.childNodes[3].childNodes[3].innerText;

    const li = document.createElement('li');
    li.innerText = itemName;

    selectedItemContainer.appendChild(li);

    const priceText = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceText);

    total = total + price;

    document.getElementById('total-price').innerText = total.toFixed(2);
    document.getElementById('after-discount').innerText = total.toFixed(2);

    // button disable enable


    const enableApply = document.getElementById('apply-btn');


    const enablePurchase = document.getElementById('make-purchase-btn');

    const modalActive = document.getElementById('purchase-done');

    // conditions for buttons

    // condition for apply coupon button

    if (total >= 200) {
        enableApply.removeAttribute('disabled');
    }

    // condition for make purchase button

    if (total > 0) {
        enablePurchase.removeAttribute('disabled');

        // Modal Enabled
        modalActive.setAttribute('href', '#my_modal_8')
    }
    else {
        enablePurchase.setAttribute('disabled', 'disabled')
    }

}
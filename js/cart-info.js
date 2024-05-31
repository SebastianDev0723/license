//Contact cart.html
function editContact() {
    document.getElementById('contact-info').style.display = 'none';
    document.getElementById('contact-form').style.display = 'block';

    document.getElementById('name-input').value = document.getElementById('name-display').innerText;
    document.getElementById('email-input').value = document.getElementById('email-display').innerText;
    document.getElementById('phone-input').value = document.getElementById('phone-display').innerText;
}

function saveContact(event) {
    event.preventDefault();

    document.getElementById('name-display').innerText = document.getElementById('name-input').value;
    document.getElementById('email-display').innerText = document.getElementById('email-input').value;
    document.getElementById('phone-display').innerText = document.getElementById('phone-input').value;

    document.getElementById('contact-info').style.display = 'block';
    document.getElementById('contact-form').style.display = 'none';
}

function editOrderType() {
    document.getElementById('order-type-info').style.display = 'none';
    document.getElementById('order-type-form').style.display = 'block';

    const currentType = document.getElementById('order-type-display').innerText;
    if (currentType) {
        document.querySelector(`input[name="order-type"][value="${currentType}"]`).checked = true;
    }
    toggleDeliveryFields();
}

//Tip comandă cart.html
function saveOrderType(event) {
    event.preventDefault();

    const selectedOrderType = document.querySelector('input[name="order-type"]:checked').value;
    document.getElementById('order-type-display').innerText = selectedOrderType;

    if (selectedOrderType === "Livrare") {
        document.getElementById('address-display').innerText = document.getElementById('address-input').value;
        document.getElementById('city-display').innerText = document.getElementById('city-input').value;
        document.getElementById('number-phone-display').innerText = document.getElementById('number-phone-input').value;
    } else {
        document.getElementById('address-display').innerText = '';
        document.getElementById('city-display').innerText = '';
        document.getElementById('number-phone-display').innerText = '';
    }

    document.getElementById('order-type-info').style.display = 'block';
    document.getElementById('order-type-form').style.display = 'none';
}

function toggleDeliveryFields() {
    const deliveryOption = document.querySelector('input[name="order-type"][value="Livrare"]').checked;
    const deliveryFields = document.getElementById('delivery-fields');
    deliveryFields.style.display = deliveryOption ? 'block' : 'none';
}


//


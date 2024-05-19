// Funcție pentru adăugarea unui produs în coș
function addToCart(productName, price) {
    // Verificăm dacă există deja produsul în coș
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productName]) {
        // Dacă produsul există deja, actualizăm cantitatea și prețul
        cart[productName].quantity++;
        cart[productName].totalPrice += price;
    } else {
        // Dacă produsul nu există, îl adăugăm în coș
        cart[productName] = {
            quantity: 1,
            totalPrice: price
        };
    }
    // Actualizăm coșul în local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Afisăm coșul actualizat
    displayCart();
}

// Funcție pentru afișarea coșului de cumpărături
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = ''; // Clear existing cart items
    for (let product in cart) {
        let item = document.createElement('li');
        item.textContent = `${product} x${cart[product].quantity} - ${cart[product].totalPrice} lei`;
        cartElement.appendChild(item);
    }
}

// Apelăm funcția pentru afișarea coșului de cumpărături când se încarcă pagina
displayCart();

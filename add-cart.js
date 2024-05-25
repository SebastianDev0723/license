var productPrices = {
    "1": 25, // Prețul pentru Produsul 1
    "2": 20  // Prețul pentru Produsul 2
};

// Funcție pentru a actualiza prețul produsului și a actualiza afișajul
function updatePrice(productId, newPrice) {
    productPrices[productId] = newPrice;
    document.getElementById("price" + productId).textContent = newPrice;
}

// Exemplu de actualizare a prețului pentru Produsul 1
updatePrice("1", 25); // Setează prețul Produsului 1 la 23
updatePrice("2", 34); // Setează prețul Produsului 2 la 34

// Funcție pentru a adăuga un produs în coș
function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Funcție pentru a afișa produsele din coș
function displayCart() {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsElement = document.getElementById("cartItems");
    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';
        cart.forEach(function(product, index) {
            var div = document.createElement("div");
            div.className = "cart-item";
            div.textContent = product.name + " - " + product.price + " lei";
            var removeButton = document.createElement("button");
            removeButton.className = "remove-btn";
            removeButton.textContent = "Elimină";
            removeButton.addEventListener("click", function() {
                removeFromCart(index);
                displayCart();
            });
            div.appendChild(removeButton);
            cartItemsElement.appendChild(div);
        });
    }
}

// Funcție pentru a șterge un produs din coș
function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Funcție pentru gestionarea evenimentului de golire a coșului
function setupClearCartButton() {
    var clearCartBtn = document.getElementById("clearCartBtn");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function() {
            var confirmClear = confirm("Ești sigur că vrei să golești coșul?");
            if (confirmClear) {
                localStorage.removeItem("cart");
                displayCart();
                alert("Coșul de cumpărături a fost golit!");
            } else {
                alert("Operația de golire a coșului a fost anulată!");
            }
        });
    }
}

// Funcție pentru a inițializa evenimentele în `menu.html`
function setupAddToCartButtons() {
    var addToCartButtons = document.querySelectorAll(".add-btn");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productElement = button.closest('.food-items');
            var productName = productElement.querySelector('.food-name').textContent;
            var productPrice = productElement.querySelector('.price1 span').textContent;
            var product = {
                name: productName,
                price: parseFloat(productPrice)
            };
            addToCart(product);
            alert("Produsul a fost adăugat în coș!");
        });
    });
}

// Așteaptă ca întregul document să fie încărcat
document.addEventListener("DOMContentLoaded", function() {
    // Verifică dacă suntem pe pagina de meniu și configurează butoanele de adăugare
    if (document.querySelectorAll(".add-btn").length > 0) {
        setupAddToCartButtons();
    }
    // Verifică dacă suntem pe pagina de coș și afișează coșul și configurează butonul de golire
    if (document.getElementById("cartItems")) {
        displayCart();
        setupClearCartButton();
    }
});

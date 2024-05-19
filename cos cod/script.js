// Obiect cu prețurile predefinite pentru fiecare produs
var productPrices = {
    "1": 10, // Prețul pentru Produsul 1
    "2": 20  // Prețul pentru Produsul 2
};

// Funcție pentru a actualiza prețul produsului și a actualiza afișajul
function updatePrice(productId, newPrice) {
    productPrices[productId] = newPrice;
    document.getElementById("price" + productId).textContent = newPrice;
}

// Exemplu de actualizare a prețului pentru Produsul 1
updatePrice("1", 22); // Setează prețul Produsului 1 la 15
updatePrice("2", 34); // Setează prețul Produsului 1 la 15


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
    cartItemsElement.innerHTML = '';

    cart.forEach(function(product, index) {
        var li = document.createElement("li");
        li.textContent = product.name + " - $" + product.price;
        var removeButton = document.createElement("button");
        removeButton.textContent = "Elimină";
        removeButton.addEventListener("click", function() {
            removeFromCart(index);
            displayCart();
        });
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
    });
}

// Funcție pentru a șterge un produs din coș
function removeFromCart(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Funcție pentru gestionarea evenimentului de golire a coșului
function setupClearCartButton() {
    // Adaugă eveniment de click pentru butonul "Golește coșul"
    document.getElementById("clearCartBtn").addEventListener("click", function() {
        var confirmClear = confirm("Ești sigur că vrei să golești coșul?");
        if (confirmClear) {
            localStorage.removeItem("cart");
            displayCart();
            alert("Coșul de cumpărături a fost golit!");
        } else {
            // Dacă utilizatorul apasă "Cancel" în caseta de dialog, nu facem nimic
            alert("Operația de golire a coșului a fost anulată!");
        }
    });
}

// Așteaptă ca întregul document să fie încărcat
document.addEventListener("DOMContentLoaded", function() {
    // Apelează funcția pentru gestionarea evenimentului de golire a coșului
    setupClearCartButton();

    // Adaugă eveniment de click pentru butoanele "Adaugă în coș"
    var addToCartButtons = document.querySelectorAll(".addToCartBtn");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productId = button.getAttribute("data-product");
            var productName = document.getElementById("product" + productId).querySelector("h2").textContent;
            var productPrice = productPrices[productId];
            var product = {
                name: productName,
                price: productPrice
            };
            addToCart(product);
            displayCart();
            alert("Produsul a fost adăugat în coș!");
        });
    });

    
});

var productPrices = {
    "1": 25, //DESERT*  LEMON CREME BRULEE
    "2": 7,  // FURSECURI CU CIOCOLATA
    "3": 12, // TIRAMISU
    "4": 15, // CANOLLI

    "5": 22, //APERITIVE* BRUSCHETTA
    "6": 26, //APERITIVE* SALATA DE VINETE
    "7": 30, //APERITIVE* CLĂTITE CROCANTE
    "8": 33, //APERITIVE* CRISPY MOZZARELLA STICKS
    "9": 23.9, //APERITIVE* AVOCADO CU TON ȘI OU
    "10": 28, //APERITIVE* SANDWICH CU PIEPT DE PUI

    "11": 26.9, //CIORBE ȘI SUPE CREMĂ* SUPĂ CREMĂ DE CIUPERCI CU TRUFE
    "12": 18.9, //CIORBĂ DE LEGUME
    "13": 20, //CIORBĂ DE VĂCUȚĂ
    "14": 21, //CIORBĂ DE BURTĂ
    "15": 26.9, //SUPĂ CREMĂ DE BROCCOLI

    "16": 42, //BURGERI* BOCHE'S BURGER
    "17": 33.9, //CRISPY CHICKEN BURGER
    "18": 58.9, //MINIBURGERI MENU
    "19": 39, //CHEESEBURGER
    "20": 38, //ITALIAN BURGER
    "21": 35.9, //AMERICAN BURGER
    "22": 30, //VEGAN BURGER
    "23": 37.9, //BURGER DE PUI CU AVOCADO

    "24": 31, //PIZZA & PASTE* PIZZA PROSCIUTTO CRUDO
    "25": 38, //PIZZA BOCHE'S
    "26": 28, //PIZZA VEGETARIANĂ
    "27": 41.9, //TAGLIATELLE CARBONARA
    "28": 38, //SPAGHETTI BOLOGNESE

    "29": 32.9, //PREPARATE VEGANE* CAPONATA SICILIANA
    "30": 32.9, //BURRITO VEGAN
    "31": 25.9, //IAHNIE DE FASOLE ROȘIE CU LEGUME
    "32": 31, //GUACAMOLE
    "33": 20.9, //HUMUS
    "34": 26.9, //MANCARE DE ARDEI

    "35": 5, //APA & BĂUTURI RACORITOARE* apa plata
    "36": 5, //apa minerala 500ml
    "37": 7.5, //apa minerala 750ml
    "38": 6, //pepsi
    "39": 6, //mirinda
    "40": 6, //7up
    "41": 6, //mountain dew
    "42": 6, //evervess
    "43": 7, //granini
    "44": 7, //prigat

    "45": 15, //smoothie-uri* mere si morcov
    "46": 15, //grapfruit,mar si portocale
    "47": 15, //portocala si mar
    "48": 15, //portocala si morcov
    "49": 12, //CAFEA / CIOCOLATA / FRAPPE* espresso lung
    "50": 12, //espresso
    "51": 13, //espresso decaffe
    "52": 14, //espresso macchiato
    "53": 17, //cappucino decaffe
    "54": 16, //caffe latte 
    "55": 24, //caramel frappe
    "56": 27, //bailey's frappe
    "57": 18, //flavored hot chocolate


};

// Funcție pentru a actualiza prețul produsului și a actualiza afișajul
function updatePrice(productId, newPrice) {
        // Actualizează prețul în obiectul productPrices
        productPrices[productId] = newPrice;

        // Obține elementul după ID
        var priceElement = document.getElementById("price" + productId);

        // Verifică dacă elementul există înainte de a seta textContent-ul
        if (priceElement) {
            priceElement.textContent = newPrice;
        } else {
            console.error("Elementul cu ID-ul 'price" + productId + "' nu a fost găsit.");
        }
    }

// Exemplu de actualizare a prețului pentru Produsul 1
updatePrice("1", 33);
updatePrice("2", 7); 
updatePrice("3", 12);
updatePrice("4", 18);
updatePrice("5", 22);
updatePrice("6", 26);
updatePrice("7", 30);
updatePrice("8", 33);
updatePrice("9", 23.9);
updatePrice("10", 28);
updatePrice("11", 26.9);
updatePrice("12", 18.9);
updatePrice("13", 20);
updatePrice("14", 21);
updatePrice("15", 26.9);
updatePrice("16", 42);
updatePrice("17", 33.9);
updatePrice("18", 58.9);
updatePrice("19", 39);
updatePrice("20", 38);
updatePrice("21", 35.9);
updatePrice("22", 30);
updatePrice("23", 37.9);
updatePrice("24", 33);
updatePrice("25", 38);
updatePrice("26", 28);
updatePrice("27", 41.9);
updatePrice("28", 38);
updatePrice("29", 32.9);
updatePrice("30", 32.9);
updatePrice("31", 25.9);
updatePrice("32", 31);
updatePrice("33", 20.9);
updatePrice("34", 26.9);
updatePrice("35", 5);
updatePrice("36", 5);
updatePrice("37", 7.5);
updatePrice("38", 6);
updatePrice("39", 6);
updatePrice("40", 6);
updatePrice("41", 6);
updatePrice("42", 6);
updatePrice("43", 7);
updatePrice("44", 7);
updatePrice("45", 15);
updatePrice("46", 15);
updatePrice("47", 15);
updatePrice("48", 15);
updatePrice("49", 12);
updatePrice("50", 12);
updatePrice("51", 13);
updatePrice("52", 14);
updatePrice("53", 17);
updatePrice("54", 16);
updatePrice("55", 24);
updatePrice("56", 27);
updatePrice("57", 18);


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

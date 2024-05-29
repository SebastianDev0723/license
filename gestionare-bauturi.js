const drinkItems = [
    {
        id: '35',
        name: 'Apa plata 500ml',
    },
    {
        id: '36',
        name: 'Apa minerala 500ml',
    },
    {
        id: '37',
        name: 'Apa minerala 750ml',
    },
    {
        id: '38',
        name: 'Pepsi 330ml',
    },
    {
        id: '38',
        name: 'Mirinda 330ml',
    },
    {
        id: '39',
        name: '7 Up 330ml',
    },
    {
        id: '40',
        name: 'mountain dew 330ml',
    },
    {
        id: '41',
        name: 'Evervess 330ml',
    },
    {
        id: '42',
        name: 'Granini nectar 330ml',
    },
    {
        id: '43',
        name: 'Prigat nectar 330ml',
    },
    {
        id: '44',
        name: 'Smoothie mere si morcov 300ml',
    },
    {
        id: '45',
        name: 'Smoothie grapefruit, portocale si mar 300ml',
    },
    {
        id: '46',
        name: 'Smoothie portocala si mar 300ml',
    },
    {
        id: '47',
        name: 'Smoothie portocala si morcov 300ml',
    },
    {
        id: '48',
        name: 'Espresso Lung',
    },
    {
        id: '49',
        name: 'Espresso',
    },
    {
        id: '50',
        name: 'Espresso Decaffe 90ml',
    },
    {
        id: '51',
        name: 'Espresso Macchiato 40ml',
    },
    {
        id: '52',
        name: 'Cappucino Decaffe 200ml',
    },
    {
        id: '53',
        name: 'Caffe Latte 200ml',
    },
    {
        id: '54',
        name: 'Caramel Frappe 250ml',
    },
    {
        id: '55',
        name: 'Caramel Frappe 250ml',
    },
    {
        id: '56',
        name: 'Caramel Frappe 350ml',
    },
    {
        id: '57',
        name: 'Flavored Hot Chocolate 200ml',
    },
];

// Function to set the content of drink HTML elements
function setDrinkContent(product) {
    const titleElement = document.getElementById(`drink-title${product.id}`);
    const priceElement = document.getElementById(`price${product.id}`);

    if (titleElement && priceElement) {
        titleElement.textContent = product.name;
        priceElement.textContent = product.price;
    }
}

// Iterate over the array and set the content for each drink item
drinkItems.forEach(product => {
    setDrinkContent(product);
});
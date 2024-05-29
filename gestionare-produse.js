const foodItems = [
    {
        id: '1',
        name: 'Lemon Creme Brulee',
        description: 'Lemon flavoured creme brulee with stawberries and blueberries',
        imageUrl: 'https://www.fbgcdn.com/pictures/3df2d38b-84b7-4b35-8a0d-f6e42b271adf_d2.jpg'
    },
    {
        id: '2',
        name: 'Fursecuri cu ciocolata',
        description: 'Delicious chocolate cookies, crispy on the outside and chewy on the inside, packed with generous chunks of dark chocolate. Perfect for a sweet break or a treat with a glass of milk',
        imageUrl: 'https://www.fbgcdn.com/pictures/841354e9-e401-4980-aa35-a14940ec5d06_d3.jpg'
    }
    ,
    {
        id: '3',
        name: 'Tiramisu',
        description: 'A delicious coffee-flavored Italian dessert. Ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar & Mascarpone cheese, flavored with cocoa',
        imageUrl: 'https://www.fbgcdn.com/pictures/9e35f4a8-0dd1-4c27-a398-2f0cb96e3711_d2.jpg'
    },
    {
        id: '4',
        name: 'Cannoli',
        description: 'Scrumptious tube of fried dough, filled with a sweet and creamy ricotta filling',
        imageUrl: 'https://i0.wp.com/memoriediangelina.com/wp-content/uploads/2023/01/Cannoli-2.jpg?fit=800%2C534&ssl=1'
    },
    {
        id: '5',
        name: 'Bruschete cu roșii și busuioc',
        description: 'Toast, tomatoes, basil, garlic, olives and olive oil',
        imageUrl: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/kamis_ro/recipes/800/bruschete_cu_rosii_si_busuioc_800.jpg?rev=72751bc7d8aa4d93a5f1f315d5e57944&vd=20200705T223115Z&extension=webp&hash=AE33CC9EE9D402054F465DD19678711'
    },
    {
        id: '6',
        name: 'Salata de vinete',
        description: 'Grilled with tomatoes, onions, salt and homemade flatbreads',
        imageUrl: 'https://zesty.ro/wp-content/uploads/2020/07/salata-de-vinete-1.jpg'
    },
    {
        id: '7',
        name: 'CLĂTITE CROCANTE',
        description: 'egg, chicken breast, champignon mushrooms, Gran Cucina, white onion, breadcrumbs, pressed ham, gorgonzola cheese, oil',
        imageUrl: 'https://assets-global.website-files.com/613725362608bc5cb2cbc325/61488e863cfdf6807dac81bc_clatite%20crocante.webp'
    },
    {
        id: '8',
        name: 'CRISPY MOZZARELLA STICKS',
        description: 'white flour, fried potatoes, sweet tomato sauce, salt, oil, egg, mozzarella, corn flakes',
        imageUrl: 'https://assets-global.website-files.com/613725362608bc5cb2cbc325/624edaba6990830a3bf194a6_mozzarella%20sticks2.webp'
    },
    {
        id: '9',
        name: 'AVOCADO CU TON ȘI OU',
        description: 'avocado, egg, tuna, arugula, red onion, mayonnaise',
        imageUrl: 'https://www.retetefine.ro/wp-content/uploads/2016/03/9-3.jpg'
    },
    {
        id: '10',
        name: 'SANDWICH CU PIEPT DE PUI',
        description: 'hearth cake, tomatoes, lettuce, cheddar cheese, mayonnaise, grilled chicken breast',
        imageUrl: 'https://somethingaboutsandwiches.com/wp-content/uploads/2022/04/ham-sandwich-300x300.jpg'
    },
    {
        id: '11',
        name: 'SUPĂ CREMĂ DE CIUPERCI CU TRUFE',
        description: 'croutons, truffle sauce, champignon mushrooms, white onion, vegetable soup',
        imageUrl: 'https://www.maggi.ro/sites/default/files/styles/home_stage_944_531/public/srh_recipes/7b2205f7043cc78461fc81d507062473.jpg?h=c6980913&itok=V2z2ajHn'
    },
    {
        id: '12',
        name: 'CIORBĂ DE LEGUME',
        description: 'potatoes, white onion, root vegetables, tomato paste, sour borscht, bell pepper, green licorice, green parsley',
        imageUrl: 'https://www.gustos.ro/uploads/modules/news/0/2014/2/26/50196/dscn0327.jpg'
    },
    {
        id: '13',
        name: 'CIORBĂ DE VĂCUȚĂ',
        description: 'beef, potatoes, white onion, red bell pepper, root vegetables and fresh bran borscht, green scallion, green parsley',
        imageUrl: 'https://chefnicolaietomescu.ro/wp-content/uploads/2020/01/A51EDD1A-D9C3-4D86-A632-C607983518D6.jpeg'
    },
    {
        id: '14',
        name: 'CIORBĂ DE BURTĂ',
        description: 'beef belly, heavy cream, , root vegetables, beef bone soup',
        imageUrl: 'https://platou.vilatusa.ro/wp-content/uploads/2021/12/ciorba-1.jpg'
    },
    {
        id: '15',
        name: 'SUPĂ CREMĂ DE BROCCOLI',
        description: 'broccoli, vegetable soup, white onion, croutons',
        imageUrl: 'https://www.amintiridinbucatarie.ro/wp-content/uploads/2020/07/IMG_4268-scaled-e1595331745976.jpg'
    },
    {
        id: '16',
        name: 'Boches burger',
        description: 'burger bun, pork rib, beef burger, gouda cheese, cheddar cheese, fries, caramelized red onion, pickled cucumber, burger sauce, lettuce',
        imageUrl: 'https://www.gardengourmet.ch/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg'
    },
    {
        id: '17',
        name: 'CRISPY CHICKEN BURGER',
        description: 'burger bun, crumbed chicken schnitzel, cheddar cheese, fries, pickled cucumbers, burger sauce, lettuce',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuviNMw51QTEEfgiXFKM_EYePSEF9cL-laaz18Lxn-g&s'
    },
    {
        id: '18',
        name: 'MINIBURGERI MENU',
        description: '5 miniburgers, fries and sauce',
        imageUrl: 'https://costesti.pizzaayo.ro/314-large_default/meniu-mini-burgeri.jpg'
    },
    {
        id: '19',
        name: 'CHEESEBURGER',
        description: 'burger bun, beef burger, parmesan, cheddar cheese, cream cheese, fries, caramelized red onion, lettuce, pickled cucumber, tomato, burger sauce, lettuce, fried egg',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzzwU8Wye41w_jejFvphRic4unqh44uK1wf9bL1tZhQ&s'
    },
    {
        id: '20',
        name: 'ITALIAN  BURGER',
        description: 'burger bun, beef burger, mozzarella, rocket, parmesan, fries, tomato, burger sauce',
        imageUrl: 'https://pizzagiuseppe.ro/wp-content/uploads/2020/03/burger-Italian-scaled.jpg'
    },
    {
        id: '21',
        name: 'American BURGER',
        description: 'burger bun, beef patty, cheddar cheese, lettuce, tomato, pickles, onion, bacon, ketchup, mustard și mayonnaise',
        imageUrl: 'https://www.unileverfoodsolutions.us/dam/global-ufs/mcos/NAM/calcmenu/recipes/US-recipes/sandwiches/all-american-burger/main-header.jpg'
    },
    {
        id: '22',
        name: 'Vegan BURGER',
        description: 'burger bun, plant-based patty, vegan cheese, lettuce, tomato, pickles, onion, avocado, vegan mayo și mustard',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WKLgD9NTOObmGrHLXLqe00P2X62cN4P6Pyky2LlKsA&s'
    },
    {
        id: '23',
        name: 'BURGER de pui cu avocado',
        description: 'burger bun, grilled chicken patty, lettuce, tomato, avocado slices, red onion, mayo și a touch of lime juic',
        imageUrl: 'https://gymbeam.cz/blog/wp-content/uploads/2022/05/burger-do-clanku.png'
    },
    {
        id: '24',
        name: 'PIZZA PROSCIUTTO CRUDO',
        description: 'tomato sauce, mozzarella, prosciutto crudo, parmesan, rocket, cherry tomatoes',
        imageUrl: 'https://sarabistro.ro/wp-content/uploads/2020/01/SaraBistro-livrare-mancare-SAR_0140.jpg'
    },
    {
        id: '25',
        name: 'Pizza Boches',
        description: 'tomato sauce, mozzarella, pressed ham, salami, champignon mushrooms, red bell pepper, sweet corn, black olives',
        imageUrl: 'https://thenewsman.ro/wp-content/uploads/2024/02/pizza.jpg'
    },
    {
        id: '26',
        name: 'PIZZA VEGETARIANĂ',
        description: 'tomato sauce, mozzarella, bell pepper, champignon mushrooms, black olives, rocket, zucchini, red onion',
        imageUrl: 'https://blog.dominos-pizza.ro/wp-content/uploads/2017/12/2-vegetariana-cu-fundal-940x564.png'
    },
    {
        id: '27',
        name: 'TAGLIATELLE CARBONARA',
        description: 'tagliatelle pasta, bacon, parmesan cheese, cooking cream, egg yolk',
        imageUrl: 'https://www.therealmealdeal.com/wp-content/uploads/2022/04/Tagliatelle-Carbonara-no-cream-2.jpg'
    },
    {
        id: '28',
        name: 'spaghetti bolognese',
        description: 'spaghetti, bolognese sauce (prepared from minced beef or a mixture of beef and pork), tomato sauce, parmesan, red wine',
        imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-bolognese-1130fa2.jpg?quality=90&resize=440,400'
    },
    {
        id: '29',
        name: 'APONATA SICILIANA',
        description: 'zucchini, white onion, eggplant, red bell pepper, champignon mushrooms, tomatoes, garlic, oil, green parsley, sesame, toast',
        imageUrl: 'https://blog.giallozafferano.it/maniamore/wp-content/uploads/2020/08/CAPONATA-092830-2.jpg'
    },
    {
        id: '30',
        name: 'BURRITO VEGAN',
        description: 'tortilla, red onion, red beans, eggplant, zucchini, garlic, champignon mushrooms, arugula',
        imageUrl: 'https://gourmandelle.com/wp-content/uploads/2018/09/vegan-burritos-recipe-burrito-vegetarian.jpg'
    },
    {
        id: '31',
        name: 'IAHNIE DE FASOLE ROȘIE CU LEGUME',
        description: 'red shallot, red onion, red bell pepper, garlic, polenta',
        imageUrl: 'https://retetefeldefel.ro/wp-content/uploads/2023/11/portie-de-mancare-de-fasole-boabe-cu-legume-caramelizate.jpg'
    },
    {
        id: '32',
        name: 'GUACAMOLEE',
        description: 'avocado, cherry tomatoes, red onion, green parsley, lemon juice, toasted bread',
        imageUrl: 'https://www.ambitiouskitchen.com/wp-content/uploads/2017/03/Best-Guacamole-Youll-Ever-Eat-4sq.jpg'
    },
    {
        id: '33',
        name: 'HUMUS',
        description: 'chickpeas, baked sesame, garlic, lemon juice',
        imageUrl: 'https://d1e3z2jco40k3v.cloudfront.net/-/media/kamis_ro/recipes/800/humus_rapid_800.jpg?rev=cb11841ca28e43c9b3084c36c4f83a23&vd=20200705T223213Z&hash=11640447C4E1A02E0ACC141D54BE1767'
    },
    {
        id: '34',
        name: 'Mancare de ardei copti',
        description: 'baked peppers, white onion, garlic, green parsley, polenta',
        imageUrl: 'https://savoriurbane.com/wp-content/uploads/2019/08/cum-se-face-reteta-de-mancare-de-ardei-copti.jpg'
    },
   

];

// Function to set the content of HTML elements using the object
function setProductContent(product) {
    const titleElement = document.getElementById(`title${product.id}`);
    const descriptionElement = document.getElementById(`description${product.id}`);
    const imgElement = document.querySelector(`#product${product.id} .food-img-all`);

    if (titleElement && descriptionElement && imgElement) {
        titleElement.textContent = product.name;
        descriptionElement.textContent = product.description;
        imgElement.style.backgroundImage = `url(${product.imageUrl})`;
    }
}

// Iterate over the array and set the content for each product
foodItems.forEach(product => {
    setProductContent(product);
});
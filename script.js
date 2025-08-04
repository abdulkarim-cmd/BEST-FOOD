document.addEventListener('DOMContentLoaded', function() {
    const dishes = [
        {
            name: "Kebab",
            origin: "syrian",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Grilled minced meat with spices cooked over charcoal",
            ingredients: ["Ground lamb", "Onion", "Garlic", "Mixed spices", "Salt", "Black pepper"],
            preparation: "Mix meat with onion, garlic and spices, knead well, shape onto skewers and grill over charcoal"
        },
        {
            name: "Biryani",
            origin: "indian",
            image: "https://images.unsplash.com/photo-1630918237419-c5f1baa5f0ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Fragrant rice with spices and pieces of meat or chicken",
            ingredients: ["Basmati rice", "Meat or chicken", "Onion", "Garlic", "Ginger", "Biryani spices", "Saffron"],
            preparation: "Soak rice then cook with meat or chicken and spices over low heat until done"
        },
        {
            name: "Mahshi",
            origin: "syrian",
            image: "https://images.unsplash.com/photo-1604977048611-4a9b6d5f0c1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Vegetables stuffed with spiced rice and meat",
            ingredients: ["Zucchini", "Eggplant", "Grape leaves", "Rice", "Ground meat", "Spices", "Olive oil"],
            preparation: "Stuff vegetables with rice-meat-spice mixture then cook in a pot with water and oil"
        },
        {
            name: "Tandoori",
            origin: "indian",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Chicken marinated in yogurt and spices cooked in clay oven",
            ingredients: ["Chicken", "Yogurt", "Garlic", "Ginger", "Tandoori spices", "Chili pepper", "Lemon"],
            preparation: "Marinate chicken in yogurt-spice mixture then cook in special tandoor oven or regular oven"
        },
        {
            name: "Fattoush",
            origin: "syrian",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Vegetable salad with crispy bread and lemon dressing",
            ingredients: ["Lettuce", "Cucumber", "Tomato", "Parsley", "Mint", "Fried bread", "Lemon", "Olive oil"],
            preparation: "Chop vegetables and mix with dressing, add crispy bread right before serving"
        },
        {
            name: "Samosa",
            origin: "indian",
            image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            description: "Triangular pastries stuffed with vegetables or meat and deep fried",
            ingredients: ["Dough", "Potatoes", "Peas", "Spices", "Coriander", "Oil for frying"],
            preparation: "Fill dough with stuffing mixture then deep fry until golden and crispy"
        }
    ];

    const dishesContainer = document.getElementById('dishesContainer');
    const showAllBtn = document.getElementById('showAll');
    const showSyrianBtn = document.getElementById('showSyrian');
    const showIndianBtn = document.getElementById('showIndian');

    function renderDishes(filter = 'all') {
        dishesContainer.innerHTML = '';
        
        const filteredDishes = filter === 'all' 
            ? dishes 
            : dishes.filter(dish => dish.origin === filter);
        
        filteredDishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'dish-card';
            
            dishCard.innerHTML = `
                <div class="dish-image">
                    <img src="${dish.image}" alt="${dish.name}">
                </div>
                <div class="dish-info">
                    <span class="origin ${dish.origin}">
                        ${dish.origin === 'syrian' ? 'Syrian' : 'Indian'}
                    </span>
                    <h2>${dish.name}</h2>
                    <p>${dish.description}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${dish.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                    <h3>Preparation:</h3>
                    <p>${dish.preparation}</p>
                </div>
            `;
            
            dishesContainer.appendChild(dishCard);
        });
    }

    showAllBtn.addEventListener('click', () => renderDishes('all'));
    showSyrianBtn.addEventListener('click', () => renderDishes('syrian'));
    showIndianBtn.addEventListener('click', () => renderDishes('indian'));

    // Render all dishes initially
    renderDishes();
});
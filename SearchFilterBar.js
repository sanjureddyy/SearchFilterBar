const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapes", "Honeydew", "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato", "Ugli fruit", "Vanilla", "Watermelon", "Xigua", "Yellow Passion Fruit", "Zucchini"];

const searchBar = document.getElementById('searchBar');
const fruitList = document.getElementById('fruitList');

// Function to display the list of fruits
function displayFruits(filteredFruits) {
    fruitList.innerHTML = '';
    filteredFruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        fruitList.appendChild(li);
    });
}

// Display all fruits initially
displayFruits(fruits);

// Event listener for the search bar
searchBar.addEventListener('input', function() {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchQuery));
    displayFruits(filteredFruits);
});

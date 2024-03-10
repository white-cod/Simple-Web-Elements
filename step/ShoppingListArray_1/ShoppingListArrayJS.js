let shoppingList = [];

function displayList() {
    const listContainer = document.getElementById("shopping-list");
    listContainer.innerHTML = "";
    shoppingList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - Кількість: ${item.quantity} - Куплено: ${item.purchased ? 'Так' : 'Ні'}`;
        if (item.purchased) {
            listItem.classList.add("purchased");
        }
        listContainer.appendChild(listItem);
    });
}

function addPurchase() {
    const productName = document.getElementById("productName").value.trim();
    const quantity = parseInt(document.getElementById("quantity").value.trim());
    if (productName && quantity > 0) {
        let existingItem = shoppingList.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            shoppingList.push({ name: productName, quantity: quantity, purchased: false });
        }
        displayList();
    } else {
        alert("Введіть правильну назву та кількість товару.");
    }
}

function buyProduct() {
    const productName = document.getElementById("productName").value.trim();
    if (productName) {
        let item = shoppingList.find(item => item.name === productName);
        if (item) {
            item.purchased = true;
        } else {
            alert("Товар не знайдено у списку.");
        }
        displayList();
    } else {
        alert("Введіть правильну назву продукту.");
    }
}

displayList();
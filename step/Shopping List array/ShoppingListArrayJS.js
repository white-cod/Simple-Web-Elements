let shoppingList = [
    { name: "Яблука", quantity: 2, purchased: false },
    { name: "Банани", quantity: 3, purchased: true },
    { name: "Молоко", quantity: 1, purchased: false },
];

function displayList() {
    const shoppingListElement = document.getElementById("shopping-list");
    shoppingListElement.innerHTML = "";

    shoppingList
        .filter((item) => !item.purchased)
        .forEach((item) => {
            const listItem = createListItem(item);
            shoppingListElement.appendChild(listItem);
        });

    shoppingList
        .filter((item) => item.purchased)
        .forEach((item) => {
            const listItem = createListItem(item);
            listItem.classList.add("purchased");
            shoppingListElement.appendChild(listItem);
        });
}

function createListItem(item) {
    const listItem = document.createElement("li");

    const itemName = document.createElement("span");
    itemName.textContent = item.name;

    const itemQuantity = document.createElement("span");
    itemQuantity.textContent = ` Кількість: ${item.quantity}`;

    listItem.appendChild(itemName);
    listItem.appendChild(itemQuantity);

    return listItem;
}

function addPurchase(name, quantity) {
    const existingItem = shoppingList.find((item) => item.name === name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const newItem = { name, quantity, purchased: false };
        shoppingList.push(newItem);
    }

    displayList();
}

function purchaseProduct(name) {
    const item = shoppingList.find((item) => item.name === name);

    if (item) {
        item.purchased = true;
        displayList();
    }
}

displayList();
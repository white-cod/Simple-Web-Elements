const receipt = [
    { name: "Яблука", quantity: 1, pricePerUnit: 10 },
    { name: "Картопля", quantity: 2, pricePerUnit: 15 },
    { name: "Морква", quantity: 3, pricePerUnit: 8 }
];

function displayReceipt(receipt) {
    const receiptDiv = document.getElementById('receipt');
    receiptDiv.innerHTML = "<h2>Чек:</h2>";
    receipt.forEach(item => {
        const itemTotal = item.quantity * item.pricePerUnit;
        receiptDiv.innerHTML += `<p>${item.quantity} ${item.name}: $${itemTotal}</p>`;
    });
}

function calculateTotal(receipt) {
    let total = 0;
    receipt.forEach(item => {
        total += item.quantity * item.pricePerUnit;
    });
    return total;
}

function findMostExpensive(receipt) {
    let mostExpensive = null;
    receipt.forEach(item => {
        if (!mostExpensive || item.quantity * item.pricePerUnit > mostExpensive.quantity * mostExpensive.pricePerUnit) {
            mostExpensive = item;
        }
    });
    return mostExpensive;
}

function calculateAverageCost(receipt) {
    let totalCost = 0;
    let totalQuantity = 0;
    receipt.forEach(item => {
        totalCost += item.quantity * item.pricePerUnit;
        totalQuantity += item.quantity;
    });
    return totalCost / totalQuantity;
}

document.addEventListener("DOMContentLoaded", function() {
    displayReceipt(receipt);
    const totalDiv = document.getElementById('total');
    totalDiv.textContent = `Загальна сума: $${calculateTotal(receipt)}`;

    const mostExpensiveDiv = document.getElementById('mostExpensive');
    const mostExpensiveItem = findMostExpensive(receipt);
    mostExpensiveDiv.textContent = `Найдорожча покупка: ${mostExpensiveItem.quantity} ${mostExpensiveItem.name}`;

    const averageCostDiv = document.getElementById('averageCost');
    averageCostDiv.textContent = `Середні витрати на одиницю товару: $${calculateAverageCost(receipt).toFixed(2)}`;
});

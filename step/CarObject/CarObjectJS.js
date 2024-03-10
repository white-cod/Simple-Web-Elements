const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 100
};

function displayCarInfo() {
    const carInfoElement = document.getElementById("carInfo");
    carInfoElement.innerHTML = `
      <h2>Інформація про машину</h2>
      <p>Виробник: ${car.manufacturer}</p>
      <p>Модель: ${car.model}</p>
      <p>Рік: ${car.year}</p>
      <p>Середня швидкість: ${car.averageSpeed} км/г</p>
      <p>Загальний час у дорозі для ${distance} км: ${travelTime.toFixed(2)} годин</p>
    `;
}

function calculateTravelTime(distance) {
    const drivingTime = distance / car.averageSpeed;
    const breaks = Math.floor(drivingTime / 4);
    const totalTime = drivingTime + breaks;
    return totalTime;
}

const distance = 200;
const travelTime = calculateTravelTime(distance);
displayCarInfo(distance, travelTime);
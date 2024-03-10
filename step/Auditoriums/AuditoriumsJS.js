class Auditorium {
    constructor(name, seats, faculty) {
        this.name = name;
        this.seats = seats;
        this.faculty = faculty;
    }
}

let auditoriums = [];

function addAuditorium(name, seats, faculty) {
    auditoriums.push(new Auditorium(name, seats, faculty));
}

addAuditorium("Аудиторія A", 15, "Інженерія");
addAuditorium("Аудиторія B", 12, "Наука");
addAuditorium("Аудиторія C", 20, "Програмування");
addAuditorium("Аудиторія D", 18, "Інженерія");

function displayAllAuditoriums() {
    let tableBody = document.getElementById("auditoriumsTable");
    tableBody.innerHTML = "";
    auditoriums.forEach(auditorium => {
        let row = `<tr><td>${auditorium.name}</td><td>${auditorium.seats}</td><td>${auditorium.faculty}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function displayAuditoriumsForFaculty() {
    let facultyName = document.getElementById("facultyInput").value;
    if (!facultyName) {
        alert("Введіть назву факультету.");
        return;
    }

    let filteredAuditoriums = auditoriums.filter(auditorium => auditorium.faculty === facultyName);
    if (filteredAuditoriums.length === 0) {
        alert("Не знайдено аудиторій для вказаного факультету.");
        return;
    }

    let tableBody = document.getElementById("auditoriumsTable");
    tableBody.innerHTML = "";
    filteredAuditoriums.forEach(auditorium => {
        let row = `<tr><td>${auditorium.name}</td><td>${auditorium.seats}</td><td>${auditorium.faculty}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function displayAuditoriumsForGroup() {
    let groupName = document.getElementById("groupNameInput").value;
    let groupSize = parseInt(document.getElementById("groupSizeInput").value);
    let groupFaculty = document.getElementById("groupFacultyInput").value;

    if (!groupName || isNaN(groupSize) || groupSize <= 0 || !groupFaculty) {
        alert("Введіть дійсну інформацію про групу.");
        return;
    }

    let filteredAuditoriums = auditoriums.filter(auditorium => {
        return auditorium.seats >= groupSize && auditorium.faculty === groupFaculty;
    });

    if (filteredAuditoriums.length === 0) {
        alert("Для групи не знайдено підходящих аудиторій.");
        return;
    }

    let tableBody = document.getElementById("auditoriumsTable");
    tableBody.innerHTML = "";
    filteredAuditoriums.forEach(auditorium => {
        let row = `<tr><td>${auditorium.name}</td><td>${auditorium.seats}</td><td>${auditorium.faculty}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function sortTable(columnIndex) {
    auditoriums.sort((a, b) => {
        let valueA = a[Object.keys(a)[columnIndex]];
        let valueB = b[Object.keys(b)[columnIndex]];
        if (typeof valueA === 'string') {
            return valueA.localeCompare(valueB);
        } else {
            return valueA - valueB;
        }
    });
    displayAllAuditoriums();
}

displayAllAuditoriums();
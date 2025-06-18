// ===== Model =====
class Travel {
    constructor(destination, startDate, endDate, budget) {
        this.destination = destination;
        this.startDate = startDate;
        this.endDate = endDate;
        this.budget = budget;
    }
}

class TravelNotebook {
    #travels = [];

    addTravel(travel) {
        this.#travels.push(travel);
    }

    getAllTravels() {
        return [...this.#travels];
    }

    getTravelByDestination(destination) {
        return this.#travels.filter(t => t.destination === destination);
    }

    removeTravel(index) {
        this.#travels.splice(index, 1);
    }

    updateTravel(index, updatedTravel) {
        this.#travels[index] = updatedTravel;
    }
}

const notebook = new TravelNotebook();

// ===== View & Controller =====
const addBtn = document.getElementById("addTravelBtn");
const form = document.getElementById("travelForm");
const board = document.getElementById("board");

const destinationInput = document.getElementById("destination");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const budgetInput = document.getElementById("budget");

addBtn.addEventListener("click", () => {
    form.classList.toggle("hidden");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const travel = new Travel(
        destinationInput.value,
        startDateInput.value,
        endDateInput.value,
        budgetInput.value
    );

    notebook.addTravel(travel);
    renderTravels();
    form.reset();
    form.classList.add("hidden");
});

function renderTravels() {
    board.innerHTML = "";
    notebook.getAllTravels().forEach((t, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <strong>To:</strong> ${t.destination}<br>
      <strong>From:</strong> ${t.startDate}<br>
      <strong>To:</strong> ${t.endDate}<br>
      <strong>Budget:</strong> $${t.budget}
    `;

        card.ondblclick = () => {
            notebook.removeTravel(index);
            renderTravels();
        };

        board.appendChild(card);
    });
}

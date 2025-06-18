const cards = new TravelCard()

const startPlan = document.getElementById('startPlan')
const form = document.getElementById('form')
const plan = document.getElementById('contPlan')

const whereTo = document.getElementById('to')
const startDate = document.getElementById('startDate')
const finishDate = document.getElementById('finishDate')
const budget = document.getElementById('budget')

startPlan.addEventListener('click', () => {
    form.classList.toggle('hidden')
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const travel = new Travel(
        whereTo.value,
        startDate.value,
        finishDate.value,
        budget.value,)

    cards.addTravel(travel)
    renderTravels()
    form.reset()
    form.classList.add('hidden')
})

function renderTravels() {
    plan.innerHTML = ""
    cards.getAllTravels().forEach((t, index) => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        To: ${t.to}<br>
        Start: ${t.startDate}<br>
        Finish: ${t.finishDate}<br>
        Budget: ${t.budget}`

        card.ondblclick = () => {
            cards.removeTravel(index)
            renderTravels()
        }

        plan.appendChild(card);
    })
}
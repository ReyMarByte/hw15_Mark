class TravelCard {
    #travels;
    constructor(travels) {
        if (travels)
            this.#travels = [...travels];
        this.#travels = [];
    }

    addTravel(travel) {
        this.#travels.push(travel);
    }

    getAllTravels() {
        return [...this.#travels];
    }

    getTravelByDestination(to) {
        return this.#travels.filter(travel => travel.destination === to);
    }

    removeTravel(index) {
        this.#travels.splice(index, 1);
    }

    updateTravel(index, updatedTravel) {
        this.#travels[index] = updatedTravel;
    }

}
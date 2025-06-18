class Travel {
    #to;
    #startDate;
    #finishDate;
    #budget;
    constructor(to, startDate, finishDate, budget) {
        this.#to = to;
        this.#startDate = startDate;
        this.#finishDate = finishDate;
        this.#budget = budget;
    }

    get to() {
        return this.#to;
    }

    set to(to) {
        this.#to = to;
    }

    get startDate() {
        return this.#startDate;
    }

    set startDate(startDate) {
        this.#startDate = startDate;
    }

    get finishDate() {
        return this.#finishDate;
    }

    set finishDate(finishDate) {
        this.#finishDate = finishDate;
    }

    get budget() {
        return this.#budget;
    }

    set budget(budget) {
        this.#budget = budget;
    }

}
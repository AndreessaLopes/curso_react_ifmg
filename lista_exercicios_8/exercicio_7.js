class Temperatura {
    #celsius

    constructor(celsius){
        this.#celsius = celsius;
    }

    get fahrenheit(){
        return ((this.#celsius * 9/5) + 32);
    }
}
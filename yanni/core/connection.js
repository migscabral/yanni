class Connection {

    constructor(neuronFrom, weight, neuronTo) {
        this.neuronFrom = neuronFrom;
        if(weight === null) {
            //random weight
            this.weight = new Weight();
        }
        else {
            this.weight = weight;
        }
        this.neuronTo = neuronTo;
    }

    getInput() {
        return this.neuronFrom.getOutput();
    }

    getOutput() {
        return this.neuronFrom.getOutput();
    }

    getWeightedOutput() {
        return this.neruonFrom.getOutput() * this.weight;
    }

}

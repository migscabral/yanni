class InputFunctionWeightedSum extends InputFunction {
    constructor() {
        super();
    }

    compute(inputConnections) {
        weightedSum = 0;

        if(this.inputConnections !== undefined && !(this.inputConnections) && this.inputConnections === Array) {
            for(var inputConnection in inputConnections) {
                weightedSum += inputConnection.getWeightedOutput();
            }
        }

        return weightedSum;
    }
}

class ActivationFunctionLinear extends ActivationFunction {
    constructor(slope) {
        if(slope == 0) {
            slope = 1
        }

        this.slope = slope;

        super();
    }

    compute(netInput) {
        return netInput * this.slope;
    }
}

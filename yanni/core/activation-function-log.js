class ActivationFunctionLog extends ActivationFunction {
    constructor() {
        super();
    }

    compute(netInput) {
        return Math.log(netInput);
    }
}

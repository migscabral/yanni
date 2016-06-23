class ActivationFunctionSin extends ActivationFunction {
    constructor() {
        super();
    }

    compute(netInput) {
        return Math.sin(netInput);
    }
}

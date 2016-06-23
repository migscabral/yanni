class ActivationFunctionSigmoid extends ActivationFunction {
    constructor(sigma) {
        if(sigma == 0) {
            sigma = 1.0
        }

        this.sigma = sigma;

        super();
    }

    compute(netInput) {
        if (netInput > 100) {
            return 1.0;
        }else if (netInput < -100) {
            return 0.0;
        }

        den = 1.0 + Math.exp(-this.slope * netInput);
        return (1.0 / den);
    }
}

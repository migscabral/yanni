class ActivationFunctionGaussian extends ActivationFunction {
    constructor(sigma) {
        if(sigma == 0) {
            sigma = 1
        }

        this.sigma = sigma;

        super();
    }

    compute(netInput) {
        return Math.exp(-Math.pow(netInput, 2) / (2 * Math.pow(sigma, 2)));;
    }
}

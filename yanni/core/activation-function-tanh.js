class ActivationFunctionTanh extends ActivationFunction {
    constructor(slope) {
        if(slope == 0) {
            slope = 2.0
        }

        this.slope = slope;

        super();
    }

    compute(netInput) {
        if (netInput > 100) {
            return 1.0;
        }else if (netInput < -100) {
            return -1.0;
        }

        E_x = Math.exp(this.slope * netInput);

        return (E_x - 1.0) / (E_x + 1.0);
    }
}

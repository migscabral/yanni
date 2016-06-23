class ActivationFunctionTrapezoid extends ActivationFunction {
    constructor( leftLow, leftHigh, rightLow, rightHigh) {
        this.leftLow = leftLow;
		this.leftHigh = leftHigh;
		this.rightLow = rightLow;
		this.rightHigh = rightHigh;

        super();
    }

    compute(netInput) {
        if ((netInput >= leftHigh) && (netInput <= rightHigh)) {
			return 1.0;
		} else if ((netInput > leftLow) && (netInput < leftHigh)) {
			return (netInput - leftLow) / (leftHigh - leftLow);
		} else if ((netInput > rightHigh) && (netInput < rightLow)) {
			return (rightLow - netInput) / (rightLow - rightHigh);
		}

		return 0.0;
    }
}

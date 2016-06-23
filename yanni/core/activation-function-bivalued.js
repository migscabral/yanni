/*
*   For bivalued functions (Signed (1,-1), Binary (0, 1), Step (hi, lo))
*/
class ActivationFunctionBivalued extends ActivationFunction {
    constructor(threshold, hi, lo) {
        if(hi <= lo) {
            throw new Error("Value of hi cannot be <= to lo");
        }

        this.threshold = threshold;
        this.hi = hi;
        this.lo = lo;

        super();
    }

    compute(netInput) {
        if(netInput > this.threshold) {
            return this.hi;
        }

        return this.lo;
    }
}

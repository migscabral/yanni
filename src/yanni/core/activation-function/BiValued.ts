import {ActivationFunction} from "./ActivationFunction";

/*
*   For bi-valued functions (Signed (1,-1), Binary (0, 1), Step (hi, lo))
*/
export class BiValued implements ActivationFunction {

    private _threshold: number;
    private _hi: number;
    private _lo: number;

    constructor(threshold, hi, lo) {
        if(hi <= lo) {
            throw new Error("Value of hi cannot be <= to lo");
        }

        this._threshold = threshold;
        this._hi = hi;
        this._lo = lo;
    }

    public compute(netInput) {
        if(netInput > this._threshold) {
            return this._hi;
        }
        return this._lo;
    }
}

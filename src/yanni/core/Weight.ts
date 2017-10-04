/**
* Weight - represents the weight of a connection
*
**/

export class Weight {

    private _value: number;
    private _previousValue: number;
    private _nextValue: number;

    /**
    * Default constructor.
    * @param {number} value - The value to be assigned to the weight.
    *
    **/
    public constructor(value?: number) {
        this._value = value;
        this._previousValue = null;
        this._nextValue = null;
    }

    /**
    * Increments or decrements the current weight value given a signed input. Save current value as previous value.
    * @param {number} value - The value to be added or subtracted from the current weight value.
    *
    **/
    public adjust(value: number) {
        this._nextValue = this._value + value;
    }

    /**
    * Replaces the current weight value with the given input. Save current value as previous value.
    * @param {number} value - The value to replace the current weight value.
    *
    **/
    set value(value) {
        this._nextValue = value;
    }

    /**
    * Returns the current weight value.
    * @return {number} - The current weight value.
    *
    **/
    get value() : number {
        return this._value;
    }

    /**
     * Returns previous weight value.
     * @return {number} - The previous weight value
     * 
     */
    get previousValue() : number {
        return this._previousValue;
    }

    /**
     * Returns next weight value.
     * @return {number} - The next weight value
     * 
     */
    get nextValue() : number {
        return this._nextValue;
    }

    /**
    * Set a random weight.
    * 
    **/
    public randomize() {
        this._nextValue = Math.random(); //TODO: should initialize this to a random value
    }

    /**
    * Resets the weight to its original state. Set weight to given value or set a random weight if value is null. Set previous value to null.
    *
    **/
    public reset(value?: number) {
        this._previousValue = null;
        this._value = null;
        if(value == null) {
            this._nextValue = Math.random();
        }
        else {
            this._nextValue = value;
        }
    }

    /**
     * Applies weight value changes. Sets previous value to value, value to next value, and next value to null.
     * 
     */
    public update() {
        this._previousValue = this._value;
        this._value = this._nextValue;
        this._nextValue = null;
    }
}

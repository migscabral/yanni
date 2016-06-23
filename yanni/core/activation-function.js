class ActivationFunction {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.compute === undefined) {
            // or maybe test typeof this.method === "function"
            throw new TypeError("Must override compute()");
        }
    }
}

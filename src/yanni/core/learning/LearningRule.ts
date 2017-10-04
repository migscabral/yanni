export class LearningRule {
    constructor() {
        if (new.target === Abstract) {
            throw new TypeError("Cannot construct Abstract instances directly");
        }
        if (this.learn === undefined) {
            // or maybe test typeof this.method === "function"
            throw new TypeError("Must override compute()");
        }
    }

}

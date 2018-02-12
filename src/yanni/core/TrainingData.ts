export class TrainingData {
    private _expectedOutputs: Array<number>;
    private _inputs: Array<number>;

    public TrainingData(inputs, expectedOutputs) {
        this._inputs = inputs;
        this._expectedOutputs = expectedOutputs;
    }

    get inputs(): Array<number> {
        return this._inputs;
    }

    get expectedOutputs(): Array<number> {
        return this._inputs;
    }
}
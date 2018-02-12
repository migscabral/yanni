class Supervised extends LearningRule {
    
    private _learningRate: number;
    private _currentIteration: number;
    private _maxIterations: number;
    private _iterationsLimited: boolean;
    private _stop: boolean;

    public Supervised() {
        this._learningRate = 0.1;
        this._currentIteration = 0;
        this._maxIterations = Number.MAX_SAFE_INTEGER;
        this._iterationsLimited = false;
        this._stop = false;
    }

    setLearningRate(learningRate) {
        this._learningRate = learningRate;
    }

    setMaxIterations(maxIterations) {
        if (maxIterations > 0.0) {
            this._maxIterations = maxIterations;
            this._iterationsLimited = true;
        }
    }

    learn(trainingSet) {
        while(!stop) {
                        
        }
    }
}

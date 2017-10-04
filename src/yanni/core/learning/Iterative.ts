class Iterative extends LearningRule {
    constructor() {
        super();
        
        this.learningRate = 0.1;
        this.currentIteration = 0;
        this.maxIterations = Number.MAX_SAFE_INTEGER;
        this.iterationsLimited = false;
        this.pausedLearning = false;
    }

    setLearningRate(learningRate) {
        this.learningRate = learningRate;
    }

    setMaxIterations(maxIterations) {
        if (maxIterations > 0.0) {
            this.maxIterations = maxIterations;
            this.iterationsLimited = true;
        }
    }

    learn() {
        return null; //no-op
    }
}

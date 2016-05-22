class Neuron {
  constructor(inputConnections, outputConnections, inputFunction, activationFunction) {
    this.inputConnections = inputConnections;
    this.outputConnections = outputConnections;
    this.inputFunction = inputFunction;
    this.activationFunction = activationFunction;
    this.netInput = null;
    this.output = null;
  }

  activate() {
    if(typeof this.inputFunction != 'undefined'  && this.inputFunction != null &&
        typeof this.inputConnections != 'undefined' && Array.isArray(this.inputConnections) &&
        this.inputConnections.length > 0) {
      this.netInput = this.inputFunction.getOutput(this.inputConnections);

      this.output = this.activationFunction.getOutput(this.netInput);

      return this.output;
    }

    return null;
  }

}

class Connection {
  constructor(fromNeuron, toNeuron, weight) {
    this.fromNeuron = fromNeuron;
    this.toNeuron = toNeuron;
    this.weight = weight;
  }

  getOutput() {
    return this.fromNeuron.getOutput();
  }

  getWeightedOutput() {
    return this.fromNeuron.getOutput() * weight;
  }
}

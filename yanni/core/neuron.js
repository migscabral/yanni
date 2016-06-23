/**
* Neuron - individual neurons in the network
*
**/

class Neuron {
    constructor(inputConnections, outputConnections, inputFunction, activationFunction) {
        this.inputConnections = inputConnections;
        this.outputConnections = outputConnections;
        this.netInput = null;
        this.output = null;
        this.error = null;
        this.inputFunction = inputFunction;
        this.activationFunction = activationFunction;
        this.stepActivate = true;
    }

    activate() {
        if(this.inputConnections !== undefined && !(this.inputConnections) && this.inputConnections === Array) {
            if(this.inputFunction !== undefined && this.inputFunction === InputFunction) {
                this.netInput = this.inputFunction.compute(inputConnections);
            }
            else {
                //TODO: throw exception for unset inputFunction
            }
        }
        else {
            //TODO: throw exception for unset inputConnections
        }

        return this.output = this.activationFunction.compute(this.netInput);
    }

    addInputConnection() {
        //TODO: write code for adding input connections


    }

    addOutputConnection() {
        //TODO: write code for adding input connections
    }
}

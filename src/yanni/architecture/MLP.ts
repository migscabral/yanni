
import {Network} from '../core/Network';
import {TrainingData} from '../core/TrainingData';

class MLP extends Network {

    public learn(trainingSet: Array<TrainingData>) {
        //activate
        for(let trainingItem of trainingSet) {
            for(let i in this._inputNeurons) {
                this._inputNeurons[i].activate();
            }

            //learn
            for(let i in this._outputNeurons) {
                //compute error of output neuron
                this._outputNeurons[i].error = (trainingItem.expectedOutputs[i] - this._outputNeurons[i].output) * this._outputNeurons[i].output * (1 - this._outputNeurons[i].output);
            }

            let lastLayer = this._layers.length - 1;
            let iter = lastLayer;

            while(iter != 0) {
                
                for(let neuron of this._layers[iter]) {

                    //get summation of weight from current to neuron to the k+1 neuron
                    let sumNeighborError = 0;
                    for(let connection of neuron.outputConnections) {
                        sumNeighborError += connection.weight.value * connection.neuronTo.error;
                    }

                    //compute error for the neuron based on error of neighbors
                    neuron.error = neuron.output * (1 - neuron.output) * sumNeighborError;   

                    //adjust weight
                    for(let connection of neuron.outputConnections) {
                        connection.weight.adjust(this._learningRate * connection.weight.previousValue + this._momentum * neuron.error * connection.neuronTo.output);
                    }
                }

                iter--;
            }

            for(let connection of this._connections) {
                //update all weights
                connection.weight.update();
            }
        }        
    }
}
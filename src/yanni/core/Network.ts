import {Neuron} from './Neuron';
import {Connection} from './Connection';
import {TrainingData} from './TrainingData';

export abstract class Network {

    protected _innerNeurons: Array<Neuron>;
    protected _connections: Array<Connection>;
    protected _inputNeurons: Array<Neuron>;
    protected _outputNeurons: Array<Neuron>;
    protected _layers: Array<Array<Neuron>>;
    // protected _learningRule: LearningRule;
    protected _learningRate: number;
    protected _momentum: number;

    public Network() {
    }

    public learn(trainingSet: Array<TrainingData>) {
    }
}
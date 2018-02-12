/**
 * Connection - represents the synapse between neurons
 * 
 */

import {Weight} from './Weight';
import {Neuron} from './Neuron';

export class Connection {

    private _neuronFrom: Neuron;
    private _weight: Weight;
    private _neuronTo: Neuron; 

    /**
     * Default constructor
     * @param {Neuron} neuronFrom - Input neuron
     * @param {Neuron} neuronTo - Output neuron
     * @param {Weight} weight - Connection weight between the input neuron and output neuron
     */
    public constructor(neuronFrom: Neuron, neuronTo: Neuron, weight?: Weight) {
        this._neuronFrom = neuronFrom;

        if(weight == null) {
            this._weight = new Weight();
        }
        else {
            this._weight = weight;
        }

        this._neuronTo = neuronTo;
    }

    /**
     * Returns value from input neuron
     * @return {number} - value from input neuron
     * 
     */
    public input(): number {
        return this._neuronFrom.output;
    }

    /**
     * Returns value from input neuron
     * @return {number} - value from input neuron
     * 
     */
    public output(): number {
        return this._neuronFrom.output;
    }

    /**
     * Returns weighted value from input neuron
     * @return {number} - weighted value
     * 
     */
    public weightedOutput(): number{
        return this._neuronFrom.output * this._weight.value;
    }
    
    /**
     * Getter for weight
     * @return {Weight}
     * 
     */
    get weight(): Weight {
        return this._weight;
    }

    /**
     * Setter for weight
     * @param {Weight} weight
     * 
     */
    set weight(weight: Weight) {
        if(weight == null) {
            this._weight = new Weight();
        }
        else {
            this._weight = weight;
        }
    }

    /**
     * Getter for neuronFrom
     * @return {Neuron}
     * 
     */
    get neuronFrom(): Neuron {
        return this._neuronFrom;
    }

    /**
     * Setter for neuronFrom
     * @param {Neuron} neuron
     * 
     */
    set neuronFrom(neuron) {
        this._neuronFrom = neuron;
    }

    /**
     * Getter for neuronTo
     * @return {Weight}
     * 
     */
    get neuronTo(): Neuron {
        return this._neuronTo;
    }

    /**
     * Setter for neuronFrom
     * @param {Neuron} neuron
     * 
     */
    set neuronTo(neuron) {
        this._neuronTo = neuron;
    }
}

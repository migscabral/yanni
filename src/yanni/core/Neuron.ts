/**
* Neuron - individual neurons in the network
*
**/

import {Connection} from './Connection';
import {InputFunction} from './input-function/InputFunction';
import {ActivationFunction} from './activation-function/ActivationFunction';

class Neuron {

    private _inputConnections: Array<Connection>;
    private _outputConnections: Array<Connection>;
    private _netInput: number;
    private _output: number;
    private _error: number;
    private _inputFunction: InputFunction;
    private _activationFunction: ActivationFunction;
    private _stepActivate: boolean;
    private _hasActivated: boolean;

    public constructor(inputConnections: Array<Connection>, outputConnections: Array<Connection>, inputFunction: InputFunction, activationFunction: ActivationFunction) {
        this._inputConnections = inputConnections;
        this._outputConnections = outputConnections;
        this._netInput = null;
        this._output = null;
        this._error = null;
        this._inputFunction = inputFunction;
        this._activationFunction = activationFunction;
        this._stepActivate = true;
        this._hasActivated = true;
    }

    public activate() {
        if(this.stepActivate) {
            if(this.inputConnections !== undefined && !(this.inputConnections) && Array.isArray(this.inputConnections)) {
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
        }
        else {
            return null; //No op
        }

        return this.output = this.activationFunction.compute(this.netInput);
    }

    public addInputConnection() {
        //TODO: write code for adding input connections

    }

    public addOutputConnection() {
        //TODO: write code for adding input connections

    }

    public resetStep(stepActivate : boolean = true) {
        this.stepActivate = stepActivate;
        this.hasActivated = false;
    }

    public getOutput(): number {
        return this.output;
    }

    public learn() {
        
    }
}

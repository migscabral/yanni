/**
* Neuron - individual neurons in the network
*
**/

import {Connection} from './Connection';
import {InputFunction} from './input-function/InputFunction';
import {ActivationFunction} from './activation-function/ActivationFunction';

export class Neuron {

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
        this._hasActivated = false;
    }

    public activate() : number {
        // if(this._stepActivate) {
        //     if(this._inputConnections !== undefined && !(this._inputConnections) && Array.isArray(this._inputConnections)) {
        //         if(this._inputFunction !== undefined && this._inputFunction instanceof InputFunction) {
        //             this._netInput = this._inputFunction.compute(this._inputConnections);
        //             this._output = this._activationFunction.compute(this._netInput);
        //             this._hasActivated = true;
        //         }
        //         else {
        //             //TODO: throw exception for unset inputFunction
        //         }
        //     }
        //     else {
        //         //TODO: throw exception for unset inputConnections
        //     }
        // }
        // else {
        //     return null; //No op
        // }

        return this._output;
    }

    public addInputConnection() {
        //TODO: write code for adding input connections

    }

    public addOutputConnection() {
        //TODO: write code for adding input connections

    }

    public resetStep(stepActivate : boolean = true) {
        this._stepActivate = stepActivate;
        this._hasActivated = false;
    }

    get output(): number {
        return this._output;
    }

    get inputConnections(): Array<Connection> {
        return this._inputConnections;
    }

    get outputConnections(): Array<Connection> {
        return this._outputConnections;
    }

    set error(err: number) {
        this._error = err;
    }

    get error(): number {
        return this._error;
    }

}

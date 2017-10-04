

namespace InputFunction {

    import {Connection} from '../Connection';

    export interface InputFunction {
        compute(inputConnections: Array<Connection>): number;
    }
}
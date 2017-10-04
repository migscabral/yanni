namespace InputFunction {

    export class WeightedSum implements InputFunction {

        public compute(inputConnections: Array<Connection>) : number {
            
            let weightedSum = 0.0;

            if(inputConnections !== undefined && !(inputConnections) && Array.isArray(inputConnections)) {
                for(let i in inputConnections) {
                    weightedSum += inputConnections[i].weightedOutput();
                }
            }

            return weightedSum;
        }
    }
}
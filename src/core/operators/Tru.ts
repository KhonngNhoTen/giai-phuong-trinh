import Expression from "../Expression";
import Operator, { OperatorResult } from "./Operator";

export class Tru extends Operator {
    constructor() {
        super();
        this.symbol = '-';
        this.priority = 0;
        this.isMultipleOperator = true;

    }

    calculate(exp: Expression): OperatorResult {
        throw new Error("Method not implemented.");
    }
    
}
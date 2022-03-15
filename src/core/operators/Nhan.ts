import Expression from "../Expression";
import Operator, { OperatorResult } from "./Operator";

export class Nhan extends Operator {
    constructor() {
        super();
        this.priority = 1;
        this.symbol = '*';
        this.isMultipleOperator = true;

    }
    calculate(exp: Expression): OperatorResult {
        throw new Error("Method not implemented.");
    }

}
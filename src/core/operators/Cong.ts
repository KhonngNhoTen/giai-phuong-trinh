import Expression from "../Expression";
import Operator, { OperatorResult } from "./Operator";

export default class Cong extends Operator {
    constructor() { 
        super();
        this.priority = 0;
        this.symbol = '+';
    }

    public calculate(exp: Expression): OperatorResult {
        if (exp.Childs.length <= 1) throw new Error('Expression invalid');
        
        const value = exp.Childs[0].getValue() + exp.Childs[1].getValue();
        return new OperatorResult(value,2);
    }
}
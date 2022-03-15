import { isConstant, isVariable } from "../../util/CheckTypeOfExpression";
import { CREATE_CONTANT, CREATE_VARIABLE } from "../../util/ExpressionCreator";
import { getCoefficient, getVariable } from "../../util/Util";
import Expression from "../Expression";
import Operator, { OperatorResult } from "./Operator";

export default class Cong extends Operator {
    constructor() { 
        super();
        this.priority = 0;
        this.symbol = '+';
        this.isMultipleOperator = true;

    }

    public calculate(exp: Expression): OperatorResult {
        if (exp.Childs.length <= 1) throw new Error('Expression invalid');
        if(isConstant(exp.Childs[0]) && isConstant(exp.Childs[1])) {
            const num1 = parseFloat(exp.Childs[0].Str);
            const num2 = parseFloat(exp.Childs[1].Str);
            const result = num1+num2;
            return new OperatorResult(
                CREATE_CONTANT(result),
                2
            );
        }
        else if(isVariable(exp.Childs[0]) && isVariable(exp.Childs[1])) {
            const coefficient_1 = parseFloat(getCoefficient(exp.Childs[0]));
            const coefficient_2 = parseFloat(getCoefficient(exp.Childs[1]));
            const result = coefficient_1+coefficient_2;
            return new OperatorResult(
                CREATE_VARIABLE(result+getVariable(exp.Childs[0])),
                2
            );
        }

        throw new Error("sub-expressions isn't calculate");
    }
}
import Expression from "../Expression";

export default abstract class Operator {
    protected priority: number = 0;
    protected symbol: string ='';
    protected isMultipleOperator: boolean = false;
    constructor() {

    }

    abstract calculate (exp: Expression):OperatorResult ;
    public getPriority ():number {
        return this.priority;
    }
    
    public getSymbol ():string {
        return this.symbol;
    }

    get IsMultipleOperator():boolean {
        return this.isMultipleOperator;
    }
}

class OperatorResult {
    public result : Expression = new Expression();
    public countSubExpression: number = 0;
    constructor (result: Expression, countSubExpression:number) {
        this.result = result;
        this.countSubExpression = countSubExpression;
    }
}

export { OperatorResult };
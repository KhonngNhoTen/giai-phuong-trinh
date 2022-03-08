import Expression from "../Expression";

export default abstract class Operator {
    protected priority: number = 0;
    protected symbol: string ='';

    constructor() {
    }

    abstract calculate (exp: Expression):OperatorResult ;
    public getPriority ():number {
        return this.priority;
    }
    
    public getSymbol ():string {
        return this.symbol;
    }
}

class OperatorResult {
    public result : number = 0;
    public countSubExpression: number = 0;
    constructor (result: number, countSubExpression:number) {
        this.result = result;
        this.countSubExpression = countSubExpression;
    }
}

export { OperatorResult };
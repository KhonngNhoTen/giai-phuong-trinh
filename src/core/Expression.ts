import Operator, { OperatorResult } from "./operators/Operator";

export default class Expression {
    private childs: Expression[] = [];
    private operators : Operator[] = [];
    private str: string = '';
    
    // Default constant
    constructor (str: string) {
        this.str = str;
    }

    public addChild (child: Expression) {
        this.childs.push(child);   
    }
    public addOperator (operator: Operator) {
        this.operators.push(operator);   
    }
    public getValue():Expression {
        //#region  if expression is constant
        if(this.Childs.length === 0 ){
            try{
                const value: number = parseFloat(this.str);
                return value;
            }catch(e){
                throw new Error ('NOT CONSTANT');
            } 
        } 
        //#endregion
        
        for (let i = 0; i<this.operators.length ;i++) {
            const result:OperatorResult = this.operators[i].calculate(this);
            this.Childs = [ new Expression (result.result + ''),...this.Childs.slice(result.countSubExpression)];  
        }
        
    }

    //#region  setter and getter
    get Childs():Expression[]  {
        return this.childs;
    }
    set Childs(childs) {
        this.childs = childs;
    }

    get Operators():Operator[]  {
        return this.operators;
    }
    set Operators(operators: Operator[]) {
        this.operators = operators;
    }
    //#endregion 
}
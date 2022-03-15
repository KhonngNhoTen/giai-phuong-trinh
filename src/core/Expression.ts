import Operator, { OperatorResult } from "./operators/Operator";
import { CREATE_CONTANT, CREATE_VARIABLE } from '../util/ExpressionCreator';
export default class Expression {
    private childs: Expression[] = [];
    private operators : Operator[] = [];
    private str: string = '';
    private parent:Expression|null = null;
    // Default constant
    constructor () {
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
                return this;
            }catch(e){
                throw new Error ('NOT CONSTANT');
            } 
        } 
        //#endregion
        
        // for (let i = 0; i<this.operators.length ;i++) {
        //     const result:OperatorResult = this.operators[i].calculate(this);
        //     this.Childs = [ new Expression (result.result + ''),...this.Childs.slice(result.countSubExpression)];  
        // }
        return this;
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

    get Str():string {
        return this.str;
    }
    set Str(str:string){
        this.str = str;
    }
    get Parent():Expression|null {
        return this.parent;
    }
    set Parent(parent:Expression|null){
        this.parent = parent;
    }
    //#endregion 
}
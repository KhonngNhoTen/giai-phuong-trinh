import Expression from "../core/Expression";
import factory from "../core/operators/FactoryOperator";
import Operator from "../core/operators/Operator";
import { isVariable } from "./CheckTypeOfExpression";
import { CREATE_CONTANT, CREATE_VARIABLE } from "./ExpressionCreator";
import { isFloat, isNumberCharacter } from "./Util";



// const covert = (str: string) => {
//     let number_: string = '';
//     let operatorStack: string[] = [];
//     let expressionStack: Expression[] = [];
//     let root: Expression = new Expression();
//     let currentExp: Expression = root;

//     const createNewExpression = (operator: Operator) => {
//         const exp: Expression = new Expression();
//         exp.Operators.push(operator);
//         exp.Parent = currentExp;
//         currentExp.Childs.push(exp);
//         currentExp = exp;

//         expressionStack.push(currentExp);
//     }

//     const createOperator = (op: string) => {
//         if (operatorStack.length === 0) {
//             operatorStack.push(op);
//             return;
//         }
//         const strPreOperator: string | undefined = operatorStack[operatorStack.length - 1];
//         if (op === '(') {
//             operatorStack.push(op);
//         }
//         else if (op === ')') {
//             const exp:Expression|undefined = traverseBackwardsOperators();
//             if(exp !== undefined) expressionStack.push(exp);
//             return;
//         }
//         const preOperator: Operator = factory(strPreOperator);
//         const operator: Operator = factory(op);
//         if (preOperator.getPriority() > operator.getPriority()) {
//             operatorStack.pop();
//             createNewExpression(operator);
//         }
//         else if (preOperator.getPriority() === operator.getPriority()) {
//             if (!operator.IsMultipleOperator) {
//                 operatorStack.pop();
//                 createNewExpression(operator);
//             }
//             else
//                 currentExp.Operators.push(operator);
//         }
//         operatorStack.push(op);
//     }

//     const checkType = (stri: string) => {
//         if (isNumberCharacter(stri)) return 0;
//         if (/[a-zA-Z]/.test(stri)) return 1;
//         return 2;
//     }

//     const traverseBackwardsOperators = ():Expression|undefined => {
//         if (operatorStack.length <= 0 || operatorStack[operatorStack.length - 1] === '(') return;

//         let exp: Expression = new Expression();
//         let op: string | undefined = operatorStack.pop();
//         if (op === undefined) return;

//         exp.Operators.push(factory(op));
//         // them toan hang


//         // duyet nguoc lai mang
//         while (true) {
//             op = operatorStack.pop();
//             if (op === undefined) break;

//             const currentOperator = factory(op);
//             const expOperatorPriority = exp.Operators[0].getPriority();
//             const currentOperatorPriority = currentOperator.getPriority();

//             if (expOperatorPriority > currentOperatorPriority) {
//                 let expParent = new Expression();
//                 expParent.Operators.push(currentOperator);
//                 expParent.Childs.push(exp);
//                 exp.Parent = expParent;
//                 exp = expParent;
//             } else if (expOperatorPriority === currentOperatorPriority) {
//                 if (currentOperator.IsMultipleOperator) {
//                     exp.Operators.push(currentOperator);
//                 } else {
//                     let expParent = new Expression();
//                     expParent.Operators.push(currentOperator);
//                     expParent.Childs.push(exp);
//                     exp.Parent = expParent;
//                     exp = expParent;
//                 }
//             }

//             if (operatorStack[operatorStack.length - 1] === '(') {
//                 operatorStack.pop();
//                 break;
//             }
//             if (operatorStack.length <= 0) break
//         }
//         return exp;
//     }

//     for (let i = 0; i < str.length; i++) {
//         const type = checkType(str[i]);
//         if (type <= 1) number_ += str;
//         else {
//             const exp: Expression = type === 0
//                 ? CREATE_CONTANT(parseFloat(number_))
//                 : CREATE_VARIABLE(number_);
//             number_ = '';    
//             expressionStack.push(exp);
//             createOperator(str[i]);
//         }

//     }

//     if(number_ !== '') {
//         const exp: Expression = isFloat(number_)
//                 ? CREATE_CONTANT(parseFloat(number_))
//                 : CREATE_VARIABLE(number_);
//         expressionStack.push(exp);
//     }

//     while(operatorStack.length > 0) {
//         let currentOperator = operatorStack.pop();
//         if(currentOperator === undefined) break;
//     }
// }
const convert = (str: string) => {
    let number = '';
    let output: string[] = [];
    let operatorStack: string[] = [];
    const checkType = (stri: string) => {
        if (isNumberCharacter(stri)) return 0;
        if (/[a-zA-Z]/.test(stri)) return 1;
        return 2;
    }
    const pushOperator = (stri: string) => {
        const prevOperator = operatorStack[operatorStack.length - 1];
        if (stri === ')') {
            output.push(')');
            while (true) {
                if (operatorStack.length === 0) break;
                const operator = operatorStack[operatorStack.length - 1];
                if (operator === '(') {
                    output.push('(');
                }
                else output.push(operator);
                operatorStack.pop();
            }
            return;
        }
        if (operatorStack.length > 0 && prevOperator !== '(' && stri !== '(') {
            const preOperatorPriority = factory(prevOperator).getPriority();
            const currentOperatorPriority = factory(stri).getPriority();
            if (preOperatorPriority >= currentOperatorPriority) {
                output.push(prevOperator);
                operatorStack.pop();
            }
        }
        operatorStack.push(stri);
    }
    for (let i = 0; i < str.length; i++) {
        const type = checkType(str[i]);
        if (type <= 1) number += str[i];
        else {
            if (number !== '') output.push(number);
            number = '';
            pushOperator(str[i]);
        }
    }
    if(number !== '') output.push(number);

    while (operatorStack.length > 0) {
        output.push(operatorStack[operatorStack.length - 1]);
        operatorStack.pop();
    }
    return output;
}
export default convert;
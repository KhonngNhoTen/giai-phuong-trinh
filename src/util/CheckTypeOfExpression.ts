import Expression from "../core/Expression";

export enum TypeOfExpression {
    CONSTANT,
    VARIABLE,
    COMPLEX_EXPRESSION
}

const checkTypeOfExpression = (exp: Expression): TypeOfExpression => {
    if(exp.Childs.length === 0) {
       if(/\w/.test(exp.Str)) return TypeOfExpression.VARIABLE;
       return TypeOfExpression.CONSTANT;
    }
    return TypeOfExpression.COMPLEX_EXPRESSION;
}

export const isConstant = (exp: Expression) => {
    return checkTypeOfExpression(exp) === TypeOfExpression.CONSTANT;
}

export const isVariable = (exp :Expression) => {
    return checkTypeOfExpression(exp) === TypeOfExpression.VARIABLE;
}

export default checkTypeOfExpression;

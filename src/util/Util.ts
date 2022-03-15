import Expression from "../core/Expression";
import { isVariable } from "./CheckTypeOfExpression";

const getCoefficient = (exp: Expression): string => {
    if (!isVariable(exp)) throw new Error("Expression isni't variable");
    return exp.Str.slice(0, exp.Childs[0].Str.length - 1);
}

const getVariable = (exp: Expression): string => {
    if (!isVariable(exp)) throw new Error("Expression isni't variable");
    return exp.Str.slice(exp.Childs[0].Str.length - 1, exp.Childs[0].Str.length);
}

const isNumberCharacter = (str: string) => {
    const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    return numArr.includes(str);
}

const isFloat = (str:string) => {
    return /^[+-]?\d+(\.\d+)?$/.test(str);
}

const isRoot = (exp: Expression) => {
   return exp.Parent === null;
}

export {
    getCoefficient,
    getVariable,
    isRoot,
    isNumberCharacter,
    isFloat
};
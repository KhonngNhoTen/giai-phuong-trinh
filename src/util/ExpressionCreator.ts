import Expression from "../core/Expression"

const CREATE_CONTANT = (value: number) => {
    let expression = new Expression ();
    expression.Str = value+'';
    return expression;
}
const CREATE_VARIABLE= (variable: string) => {
    let expression = new Expression ();
    expression.Str = variable;
    return expression;
}

export { 
    CREATE_CONTANT,
    CREATE_VARIABLE
}
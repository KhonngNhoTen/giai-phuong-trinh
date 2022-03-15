import { Chia } from "./Chia";
import Cong from "./Cong";
import { Nhan } from "./Nhan";
import Operator from "./Operator";
import { Tru } from "./Tru";

const factory = (operator:string): Operator => {
   switch(operator) {
      case '+' : return new Cong();
      case '-' : return new Tru();
      case '*' : return new Nhan();
      case '/' : return new Chia();
      default : throw new Error (`${operator} is not operator`); 
   }
}

export default factory;
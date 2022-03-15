import { useEffect } from 'react';
import './App.css';
import convert from './util/CovertStringToExpression'; 
function App() {
  useEffect(() => {
    console.log('2*3+(4*5+3)-2');
    console.log(convert('2*3+(4*5+3)-2'));
  },[])
  return (
    <div className='backgroud'>
      <div className='group-control'>
         <input type="text" className='expression-input' />
         <div className='button-group'>
           <button>Submit</button>
           <button>Clear</button>
          </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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

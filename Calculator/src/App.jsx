import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  function agregarNumero(num) {
    setDisplay(display + num);
  }

  return (
    <>
      {/* Main frame for calculator */}
      <div className='calculator-frame'>
        <input className='output' type="text" value={display} readOnly />

        <div className='keypad'>
          <div className='keyHead'>
            <button id="btn-mrc" onClick={() => agregarNumero('MRC')}>MRC</button>
            <button id="btn-m-" onClick={() => agregarNumero('M-')}>M-</button>
            <button id="btn-m+" onClick={() => agregarNumero('M+')}>M+</button>
            <button id="btn-sqrt" onClick={() => agregarNumero('√')}>√</button>
            <button id="btn-off" onClick={() => agregarNumero('OFF')}>OFF</button>           
          </div>

          <div className="keyCenter">
            <button id="btn-ac" onClick={() => agregarNumero('AC')}>AC</button>
            <button id="btn-c" onClick={() => agregarNumero('C')}>C</button>
            <button id="btn-square" onClick={() => agregarNumero('X²')}>X²</button>
            <button id="btn-percent" onClick={() => agregarNumero('%')}>%</button>
            <button id="btn-on" onClick={() => agregarNumero('ON')}>ON</button>
          </div>

          <div className='keyMain'>
            
            <button id="btn-7" onClick={() => agregarNumero('7')}>7</button>
            <button id="btn-8" onClick={() => agregarNumero('8')}>8</button>
            <button id="btn-9" onClick={() => agregarNumero('9')}>9</button>
            <button id="btn-div" onClick={() => agregarNumero('/')}>/</button>

            <button id="btn-4" onClick={() => agregarNumero('4')}>4</button>
            <button id="btn-5" onClick={() => agregarNumero('5')}>5</button>
            <button id="btn-6" onClick={() => agregarNumero('6')}>6</button>
            <button id="btn-mul" onClick={() => agregarNumero('X')}>X</button>

            <button id="btn-1" onClick={() => agregarNumero('1')}>1</button>
            <button id="btn-2" onClick={() => agregarNumero('2')}>2</button>
            <button id="btn-3" onClick={() => agregarNumero('3')}>3</button>

            <button id="btn-0" onClick={() => agregarNumero('-')}>-</button>
            <button id="btn-0" onClick={() => agregarNumero('0')}>0</button>
            <button id="btn-dot" onClick={() => agregarNumero('.')}>.</button>
            <button id="btn-eq" onClick={() => agregarNumero('=')}>=</button>
            <button id="btn-plus" onClick={() => agregarNumero('+')}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

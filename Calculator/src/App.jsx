import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');//Initial value is an empty String

  function addCaracter(num) 
  {
    setDisplay(display + num);
  }


  function separateString()
  {
    const parts = display.split(/([+\-\/X])/);

    let number1 = Number(parts[0]);
    let operator = parts[1];
    let number2 = Number(parts[2]);
    performOperation(number1, number2, operator);
    
  }

  function performOperation(number1, number2, operator)
  {
    let result;
    switch(operator)
    {
      case "+":
        result = number1 + number2;
      break;

      case "-":
        result = number1 - number2;
      break;

      case "X":
        result = number1 * number2;
      break;

      case "/":
        result = number1 / number2;
      break;
    }

    setDisplay(result);
  }

  const clearScreen = () =>
  {
    setDisplay("0");
  }

  return (
    <>
      {/* Main frame for calculator */}
      <div className='calculator-frame'>
        <input className='output' type="text" value={display} readOnly />

        <div className='keypad'>
          <div className='keyHead'>
            <button id="btn-mrc" onClick={() => addCaracter('MRC')}>MRC</button>
            <button id="btn-m-" onClick={() => addCaracter('M-')}>M-</button>
            <button id="btn-m+" onClick={() => addCaracter('M+')}>M+</button>
            <button id="btn-sqrt" onClick={() => addCaracter('√')}>√</button>
            <button id="btn-off" onClick={() => addCaracter('OFF')}>OFF</button>           
          </div>

          <div className="keyCenter">
            <button id="btn-ac" onClick={() => clearScreen()}>AC</button>
            <button id="btn-c" onClick={() => addCaracter('C')}>C</button>
            <button id="btn-square" onClick={() => addCaracter('X²')}>X²</button>
            <button id="btn-percent" onClick={() => addCaracter('%')}>%</button>
            <button id="btn-on" onClick={() => addCaracter('ON')}>ON</button>
          </div>

          <div className='keyMain'>
            
            <button id="btn-7" onClick={() => addCaracter('7')}>7</button>
            <button id="btn-8" onClick={() => addCaracter('8')}>8</button>
            <button id="btn-9" onClick={() => addCaracter('9')}>9</button>
            <button id="btn-div" onClick={() => addCaracter('/')}>/</button>

            <button id="btn-4" onClick={() => addCaracter('4')}>4</button>
            <button id="btn-5" onClick={() => addCaracter('5')}>5</button>
            <button id="btn-6" onClick={() => addCaracter('6')}>6</button>
            <button id="btn-mul" onClick={() => addCaracter('X')}>X</button>

            <button id="btn-1" onClick={() => addCaracter('1')}>1</button>
            <button id="btn-2" onClick={() => addCaracter('2')}>2</button>
            <button id="btn-3" onClick={() => addCaracter('3')}>3</button>

            <button id="btn-0" onClick={() => addCaracter('-')}>-</button>
            <button id="btn-0" onClick={() => addCaracter('0')}>0</button>
            <button id="btn-dot" onClick={() => addCaracter('.')}>.</button>
            <button id="btn-eq" onClick={() => separateString()}>=</button>
            <button id="btn-plus" onClick={() => addCaracter('+')}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

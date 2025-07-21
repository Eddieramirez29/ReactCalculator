import { useRef, useState } from 'react';
import './App.css';

function App()
{
  const [display, setDisplay] = useState('');
  const turnOn = useRef(false);
  const memory = useRef(0); // memoria de la calculadora
  const mrcPressed = useRef(false); // para doble clic en MRC

  function turnOnCalculator()
  {
    turnOn.current = true;
    setDisplay("0");
  }

  function turnOffCalculator()
  {
    turnOn.current = false;
    setDisplay("");
    memory.current = 0;
  }

  function addCaracter(num) 
  {
    if(turnOn.current === false)
    {
      return;
    }
    else
    {
      if (display === '0') 
      {
        setDisplay(num);
      }
      else 
      {
        setDisplay(display + num);
      }
    }
  }

  function getReadyExpression(str)
  {
    return str
      .replace(/X²/g, '**2')         
      .replace(/X/g, '*')            
      .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
      .replace(/(\d+(\.\d+)?)%/g, '($1/100)');
  }

  const clearScreen = () =>
  {
    setDisplay("0");
  }

  const deleteCharacter = () =>
  {
    setDisplay(display.slice(0, -1));
  }

  const showResult = () =>
  {
    try 
    {
      const expression = getReadyExpression(display);
      const result = eval(expression);
      setDisplay(String(result));
    } 
    catch 
    {
      setDisplay('Error');
    }
  }

  const handleMPlus = () =>
  {
    try
    {
      const expression = getReadyExpression(display);
      const value = eval(expression);
      memory.current += value;
    }
    catch {}
  }

  const handleMMinus = () =>
  {
    try
    {
      const expression = getReadyExpression(display);
      const value = eval(expression);
      memory.current -= value;
    }
    catch {}
  }

  const handleMRC = () =>
  {
    if (mrcPressed.current)
    {
      memory.current = 0;
      mrcPressed.current = false;
    }
    else
    {
      setDisplay(String(memory.current));
      mrcPressed.current = true;
      setTimeout(() => mrcPressed.current = false, 1000); // si no se presiona rápido, se reinicia
    }
  }

  return (
    <>
      {/* Main frame for calculator */}
      <div className='calculator-frame'>
        <input className='output' type="text" value={display} readOnly />

        <div className='keypad'>
          <div className='keyHead'>
            <button id="btn-mrc" onClick={handleMRC}>MRC</button>
            <button id="btn-m-" onClick={handleMMinus}>M-</button>
            <button id="btn-m+" onClick={handleMPlus}>M+</button>
            <button id="btn-sqrt" onClick={() => addCaracter('√')}>√</button>
            <button id="btn-off" onClick={() => turnOffCalculator()}>OFF</button>           
          </div>

          <div className="keyCenter">
            <button id="btn-ac" onClick={clearScreen}>AC</button>
            <button id="btn-c" onClick={() => deleteCharacter()}>C</button>
            <button id="btn-square" onClick={() => addCaracter('X²')}>X²</button>
            <button id="btn-percent" onClick={() => addCaracter('%')}>%</button>
            <button id="btn-on" onClick={() => turnOnCalculator()}>ON</button>
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

            <button id="btn-sub" onClick={() => addCaracter('-')}>-</button>
            <button id="btn-0" onClick={() => addCaracter('0')}>0</button>
            <button id="btn-dot" onClick={() => addCaracter('.')}>.</button>
            <button id="btn-eq" onClick={showResult}>=</button>
            <button id="btn-plus" onClick={() => addCaracter('+')}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

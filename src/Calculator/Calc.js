import React, { useState, useEffect, useRef } from 'react'
import "./Calc.css";

function Calc() {
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    useEffect(() => inputRef.current.focus());

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }
    function clear() {
        setResult("");
    }
    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Invalid");
        }
    }

    return (
        <div className="calc-app">
            <form>
                <input type='text' value={result} ref={inputRef} className="bg-white text-secondary" />
            </form>
            <div className="keypad">

                <button id="clear" onClick={clear}>C</button>
                <button id="backspace" onClick={backspace}>bksp</button>
                <button id="op" name="+" onClick={handleClick}>+</button>
                <button name="7" id="num" onClick={handleClick}>7</button>
                <button name="8" id="num" onClick={handleClick}>8</button>
                <button name="9" id="num" onClick={handleClick}>9</button>
                <button id="op" name="-" onClick={handleClick}>-</button>
                <button name="4" id="num" onClick={handleClick}>4</button>
                <button name="5" id="num" onClick={handleClick}>5</button>
                <button name="6" id="num" onClick={handleClick}>6</button>
                <button id="op" name="*" onClick={handleClick}>*</button>
                <button name="1" id="num" onClick={handleClick}>1</button>
                <button name="2" id="num" onClick={handleClick}>2</button>
                <button name="3" id="num" onClick={handleClick}>3</button>
                <button id="op" name="/" onClick={handleClick}>/</button>
                <button name='0' id='num' onClick={handleClick}>0</button>
                <button name='.' id='num' onClick={handleClick}>.</button>
                <button id='result' onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calc;
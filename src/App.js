// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // This state will store the current input in the calculator
  const [input, setInput] = useState("");

  // This function updates the input when a button is pressed
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // This function clears the input (resets the calculator)
  const handleClear = () => {
    setInput("");
  };

  // This function evaluates the input when the "=" button is pressed
  const handleEqual = () => {
    try {
      setInput(eval(input).toString()); // eval evaluates the string expression
    } catch (error) {
      setInput("Error"); // In case of invalid expression
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>

      <div className="buttons">
        {/* Buttons for numbers and operators */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleEqual()}>=</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
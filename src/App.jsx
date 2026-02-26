import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "+":
        setResult(n1 + n2);
        break;
      case "-":
        setResult(n1 - n2);
        break;
      case "*":
        setResult(n1 * n2);
        break;
      case "/":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        break;
    }
  };

  const clearFields = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
      </div>

      <button className="clear-btn" onClick={clearFields}>
        Clear
      </button>

      <h3>Result: {result}</h3>
    </div>
  );
}

export default Calculator;
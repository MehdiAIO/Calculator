import React, { useRef, useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [op, setOp] = useState("");
  const a = useRef(null);
  const b = useRef(null);

  const handleOperation = (eo) => {
    const selectedOp = eo.target.value;
    setOp(selectedOp);

    const aValue = Number(a.current.value);
    const bValue = Number(b.current.value);

    switch (selectedOp) {
      case "+":
        setResult(aValue + bValue);
        break;
      case "-":
        setResult(aValue - bValue);
        break;
      case "/":
        setResult(aValue / bValue);
        break;
      case "x":
        setResult(aValue * bValue);
        break;
      default:
        setResult(0);
    }
  };

  return (
    <div className="container-fluid mx-auto w-50 mt-5 border rounded p-5">
      <h2>Calculator</h2>
      <div className="mb-3 form-group">
        <label htmlFor="a" className="form-label">
          A :
        </label>
        <input
          ref={a}
          type="text"
          id="a"
          name=""
          className="form-control"
          placeholder="Enter the first value"
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="b" className="form-label">
          B :
        </label>
        <input
          ref={b}
          type="text"
          id="b"
          name=""
          className="form-control"
          placeholder="Enter the second value"
        />
      </div>
      <div className="d-flex justify-content-between">
        <input
          type="button"
          value="+"
          className="btn btn-primary mx-2 w-25"
          onClick={handleOperation}
        />
        <input
          type="button"
          value="-"
          className="btn btn-danger mx-2 w-25"
          onClick={handleOperation}
        />
        <input
          type="button"
          value="/"
          className="btn btn-warning mx-2 w-25"
          onClick={handleOperation}
        />
        <input
          type="button"
          value="x"
          className="btn btn-info mx-2 w-25"
          onClick={handleOperation}
        />
      </div>
      <h3 className="text-center mt-3">Result : {result}</h3>
    </div>
  );
};

export default Calculator;

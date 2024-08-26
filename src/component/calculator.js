import React, { useState } from "react";

const Calculator = () => {
  const [state, setState] = useState("");

  const handleClick = (e) => {
    setState(state.concat(e.target.name));
  };
  const clearClick = () => {
    setState("");
  };
  const backspace = () => {
    setState(state.slice(0, -1));
  };
  const equal = () => {
    try {
      setState(eval(state));
    } catch (error) {
      setState("error");
    }
  };

  return (
    <div>
      <form>
        <input value={state} />
      </form>
      <button name="clear" onClick={clearClick}>
        clear
      </button>
      <button name="back" onClick={backspace}>
        backspace
      </button>
      <button name="/" onClick={handleClick}>
        &divide;
      </button>
      <button name="*" onClick={handleClick}>
        &times;
      </button>
      <button name="-" onClick={handleClick}>
        &minus;
      </button>
      <button name="+" onClick={handleClick}>
        &#43;
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="=" onClick={equal}>
        =
      </button>
    </div>
  );
};

export default Calculator;

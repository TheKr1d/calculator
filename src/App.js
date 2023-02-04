import "./App.css";
import { useState } from "react";
import cn from "classnames";


const App = () => {
  const [postponed, setPostponed] = useState('');
  const [expression, setExpression] = useState('0');
  const [activeOperator, setActiveOperator] = useState('');
  const [darkTheme, setDarkTheme] = useState(true);


  const addNumber = (value) => expression[0] === '0' ? setExpression(value) : setExpression(`${expression}${value}`);
  const backspace = () => setExpression(expression.slice(0, expression.length - 1));
  const clear = () => {
    setPostponed('');
    setExpression('0');
    setActiveOperator('');
  }
  const operator = (str) => {
    setPostponed(expression);
    setExpression('');
    setActiveOperator(str);
  };
  const equal = () => {
    const router = {
      divide: () => (Number(postponed) / Number(expression)),
      times: () => (Number(postponed) * Number(expression)),
      subtraction: () => (Number(postponed) - Number(expression)),
      addition: () => (Number(postponed) + Number(expression)),
    }
    if (activeOperator === '') {
      return;
    } else {
      const result = router[activeOperator]();
      setPostponed('');
      setExpression(String(result));
      setActiveOperator('');
    }
  }

  return (
    <div className="container">
      <div className={cn('calculator', darkTheme ? 'dark' : '')}>
        <div className={cn('theme-toggler', darkTheme ? 'active' : '')} onClick={() => setDarkTheme(!darkTheme)}>
          <div className="toggler-icon"></div>
        </div>
        <div className="display-screen">
          <div id="display-postponed">{postponed}</div>
          <div id="display-expression">{expression}</div>
        </div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="btn-operator" onClick={() => clear()} id="clear">
                    C
                  </button>
                </td>
                <td>
                  <button className={cn('btn-operator', activeOperator === 'divide' ? 'active' : null)} onClick={() => operator('divide')} id="divide">
                    &divide;
                  </button>
                </td>
                <td>
                  <button className={cn('btn-operator', activeOperator === 'times' ? 'active' : null)} onClick={() => operator('times')} id="times">
                    &times;
                  </button>
                </td>
                <td>
                  <button className="btn-operator active" onClick={() => backspace()} id="backspace">
                    {"<"}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" onClick={() => addNumber('7')} id="7">
                    7
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('8')} id="8">
                    8
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('9')} id="9">
                    9
                  </button>
                </td>
                <td>
                  <button className={cn('btn-operator', activeOperator === 'subtraction' ? 'active' : null)} onClick={() => operator('subtraction')} id="subtraction">
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" onClick={() => addNumber('4')} id="4">
                    4
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('5')} id="5">
                    5
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('6')} id="6">
                    6
                  </button>
                </td>
                <td>
                  <button className={cn('btn-operator', activeOperator === 'addition' ? 'active' : null)} onClick={() => operator('addition')} id="addition">
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" onClick={() => addNumber('1')} id="1">
                    1
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('2')} id="2">
                    2
                  </button>
                </td>
                <td>
                  <button className="btn-number" onClick={() => addNumber('3')} id="3">
                    3
                  </button>
                </td>
                <td rowSpan="2">
                  <button className="btn-equal" onClick={() => equal()} id="equal">
                    =
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="btn-number" onClick={() => addNumber('0')} id="zero">
                    0
                  </button>
                </td>
                <td>
                  <button className="btn-operator" onClick={() => addNumber('.')} id="comma">
                    .
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

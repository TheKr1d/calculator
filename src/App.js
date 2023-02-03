import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="calculator dark">
        <div className="theme-toggler active">
          <i className="toggler-icon"></i>
        </div>
        <div className="display-screen">
          <div id="display"></div>
        </div>
        <div className="buttons">
          <table>
            <tbody>
              <tr>
                <td>
                  <button className="btn-operator" id="clear">
                    C
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="divide">
                    &divide;
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="times">
                    &times;
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="backspace">
                    {"<"}
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" id="7">
                    7
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="8">
                    8
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="9">
                    9
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="subtraction">
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" id="4">
                    4
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="5">
                    5
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="6">
                    6
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="addition">
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-number" id="1">
                    1
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="2">
                    2
                  </button>
                </td>
                <td>
                  <button className="btn-number" id="3">
                    3
                  </button>
                </td>
                <td rowSpan="2">
                  <button className="btn-equal" id="equal">
                    =
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="btn-number" id="zero">
                    0
                  </button>
                </td>
                <td>
                  <button className="btn-operator" id="comma">
                    ,
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

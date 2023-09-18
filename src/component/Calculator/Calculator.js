import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";
import GradientButton from "../GradiantButton/GradientButton";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      prevValue: null,
      operator: null,
      waitingForOperand: false,
    };
  }

  handleDigitClick = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState((prevState) => ({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      }));
    }
  };

  handleDecimalClick = () => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: "0.",
        waitingForOperand: false,
      });
    } else if (displayValue.indexOf(".") === -1) {
      this.setState({
        displayValue: displayValue + ".",
      });
    }
  };

  handleOperatorClick = (operator) => {
    const { displayValue, prevValue, operator: prevOperator } = this.state;

    if (prevValue === null) {
      this.setState({
        prevValue: displayValue,
        waitingForOperand: true,
        operator,
      });
    } else if (!prevOperator) {
      this.setState({
        operator,
        waitingForOperand: true,
      });
    } else {
      this.calculateResult();
      this.setState({
        operator,
        waitingForOperand: true,
      });
    }
  };

  calculateResult = () => {
    const { displayValue, prevValue, operator } = this.state;
    const currentValue = parseFloat(displayValue);
    const prev = parseFloat(prevValue);

    let result = 0;
    switch (operator) {
      case "+":
        result = prev + currentValue;
        break;
      case "-":
        result = prev - currentValue;
        break;
      case "×":
        result = prev * currentValue;
        break;
      case "÷":
        if (currentValue !== 0) {
          result = prev / currentValue;
        } else {
          // Handle division by zero
          result = "Error";
        }
        break;
      default:
        result = currentValue;
    }

    this.setState({
      displayValue: String(result),
      prevValue: null,
      operator: null,
      waitingForOperand: true,
    });
  };

  handleClearClick = () => {
    this.setState({
      displayValue: "0",
      prevValue: null,
      operator: null,
      waitingForOperand: false,
    });
  };

  handlePlusMinusClick = () => {
    this.setState((prevState) => ({
      displayValue: String(-parseFloat(prevState.displayValue)),
    }));
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div>
        <div className="calculator">
          <div className="display">{displayValue}</div>
          <div className="buttons">
            <div className="row">
              <button onClick={() => this.handleClearClick()}>AC</button>
              <button onClick={() => this.handlePlusMinusClick()}>+/-</button>
              <button onClick={() => this.handleOperatorClick("%")}>%</button>
              <button
                className="orange"
                onClick={() => this.handleOperatorClick("÷")}
              >
                ÷
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(7)}>7</button>
              <button onClick={() => this.handleDigitClick(8)}>8</button>
              <button onClick={() => this.handleDigitClick(9)}>9</button>
              <button
                className="orange"
                onClick={() => this.handleOperatorClick("×")}
              >
                ×
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(4)}>4</button>
              <button onClick={() => this.handleDigitClick(5)}>5</button>
              <button onClick={() => this.handleDigitClick(6)}>6</button>
              <button
                className="orange"
                onClick={() => this.handleOperatorClick("-")}
              >
                -
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(1)}>1</button>
              <button onClick={() => this.handleDigitClick(2)}>2</button>
              <button onClick={() => this.handleDigitClick(3)}>3</button>
              <button
                className="orange"
                onClick={() => this.handleOperatorClick("+")}
              >
                +
              </button>
            </div>
            <div className="row">
              <button onClick={() => this.handleDigitClick(0)}>0</button>
              <button onClick={() => this.handleDecimalClick()}>.</button>
              <button className="orange" onClick={() => this.calculateResult()}>
                =
              </button>
            </div>
          </div>
        </div>
        <div className="back">
          <Link to={"/"}>
            <GradientButton name={"<-"} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Calculator;

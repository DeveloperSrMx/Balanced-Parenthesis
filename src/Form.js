import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: "",
      result: "",
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const exp = e.target.value;
    this.setState({
      [name]: exp,
      result: this.isBalancedParenthesis(exp)
    });
  };

  // ********************************** HERE is the SOLUTION ***************************************

  isBalancedParenthesis = (exp) => {
    if (exp) {
      let stack = [];
      let matchingMap = {
        "{": "}",
        "[": "]",
        "(": ")",
      };

      for (let i = 0; i < exp.length; i++) {
        // Opening parenthesis: push to a stack
        if (exp[i] === "{" || exp[i] === "[" || exp[i] === "(") {
          stack.push(exp[i]);
        }
        // Closing parethesis: pop from the stack
        else {
          let last = stack.pop();

          // Validate popped element ( or [ or { against matchingMap, if they are different returns false
          if (exp[i] !== matchingMap[last]) {
            return 'NOT BALANCED';
          }
        }
      }
      // If the stack is not empty then it returns false
      if (stack.length !== 0) {
        return 'NOT BALANCED';
      }

      return 'BALANCED';
    }else{
      return '';
    }
  };

  // ******************************************* END ***********************************************

  render() {
    return (
      <form className="demoForm">
        <h2>Balanced Parenthesis</h2>
        <div className="form-group">
          <label htmlFor="exp">Write your parethesis expresion:</label>
          <input
            type="text"
            required
            className="form-control"
            name="exp"
            placeholder="parenthesis expresion"
            value={this.state.exp}
            onChange={this.handleUserInput}
          />
          <label htmlFor="result">Result:</label>
          <input
            type="text"
            disabled
            className="form-control"
            name="result"
            value={this.state.result}
          />
        </div>
      </form>
    );
  }
}

export default Form;
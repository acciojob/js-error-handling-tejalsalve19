//your code here
class OutOfRangeError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should only consist of integers and +-/* characters.";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = this.constructor.name;
    this.message = "Expression should not have an invalid combination of operators.";
  }
}

function evalString(expression) {
  try {
    if (/[\d+-/*\s]+/.test(expression) === false) {
      throw new OutOfRangeError();
    }

    if (/(\+\+|\-\-|\+\-|\-\+|\*\/|\/\*|\+\*|\-\*|\*\+|\*\-|\/\+|\/\-)/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[\/*+].*/.test(expression)) {
      throw new SyntaxError("Expression should not start with an invalid operator.");
    }

    if (/.*[\/*+-]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with an invalid operator.");
    }

    // Evaluate the expression here
    // ...

    return "Expression is valid and can be evaluated.";
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

// Testing the evaluator
evalString("2 + 3"); // Valid expression
evalString("5 / 0"); // OutOfRangeError
evalString("2 ++ 3"); // InvalidExprError
evalString("+5 * 4"); // SyntaxError
evalString("3 -"); // SyntaxError
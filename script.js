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
    if (expression.match(/[^\d\s+\-*/]/)) {
      throw new OutOfRangeError();
    }

    if (expression.match(/\+\+|\-\-|\+\-|\-\+|\*\/|\/\*/)) {
      throw new InvalidExprError();
    }

    if (expression.match(/^\s*[\/*+]/)) {
      throw new SyntaxError('Expression should not start with an invalid operator');
    }

    if (expression.match(/[\/*+\-]\s*$/)) {
      throw new SyntaxError('Expression should not end with an invalid operator');
    }

    // Evaluate the expression here and return the result
    // ...

    return 'Valid expression';
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// Testing the evalString function
try {
  evalString('1 + 2 - 3 * 4');
  evalString('1 + + 2');
  evalString('1 / 0');
} catch (error) {
  console.log(`Caught error: ${error.message}`);
}

// // Testing the evaluator
// evalString("2 + 3"); // Valid expression
// evalString("5 / 0"); // OutOfRangeError
// evalString("2 ++ 3"); // InvalidExprError
// evalString("+5 * 4"); // SyntaxError
// evalString("3 -"); // SyntaxError
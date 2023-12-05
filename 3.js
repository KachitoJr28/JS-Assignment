function sum(x) {
    if (arguments.length === 2) {
      return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
      return function(y) {
        return x + y;
      };
    }
  }
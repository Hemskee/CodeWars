var stringToNumber = function(str){
    return Number(str);
  }
  //Convert a String to a Number!

  function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}//Basic Mathematical Operations

function opposite(number) {
    return(-number);
  }
  //Opposite number

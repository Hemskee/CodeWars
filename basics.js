//1. Convert a String to a Number!
var stringToNumber = function(str){
    return Number(str);
  }
  
//2. Basic Mathematical Operations
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
}

//3. Opposite number
function opposite(number) {
    return(-number);
  }
  
//4. Complementary DNA
  function dnaStrand(dna){
    const x = { 
              'A': 'T',
              'T' : 'A',
              'G' : 'C',
              'C' : 'G'
              }
    return dna.replace(/A|T|G|C/g, function(matched) {
      return x[matched];
  });
  } 

//5. DNA to RNA Conversion
  function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }
  
//6. Odd or Even?
  function oddOrEven(array) {
    return (((array.reduce(function(a, b){
     return a + b;
     }, 0)) % 2 === 0)||array == 0) ? 'even' : 'odd';
 }

//7. Reversed Strings
 function solution(str){
    return str.split('').reverse().join('').toString();
  }

//8. Even or Odd
  function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
  }

//9. Number of People in the Bus
  var number = function(busStops){
    let x = 0;
    let y = 0;
    for(let i = 0; i < busStops.length; i++)
      {
        x += busStops[i][0];
        y += busStops[i][1];
      }
    return x - y;
  }

//10. Build Tower
  function towerBuilder(nFloors) {
    let s, st, tow =[];
    for (let i = 0; i < nFloors; i++){
      i == nFloors-1 ? tow.push("*".repeat((2 * i) + 1)) : tow.push(" ".repeat(nFloors-i-1)+"*".repeat((2 * i) + 1)+" ".repeat(nFloors-i-1));
    }
    return tow;
  }
//Array.diff
  function arrayDiff(a, b) {
    return a.filter(x => b.indexOf(x) === -1);
   }
/*function array_diff(a, b) {
return a.filter(e => !b.includes(e));
}*/

//Build a pile of Cubes
function findNb(m) {
  let x = 0;
  let y = 1;
   while (x <= m){
     x += Math.pow(y, 3);
     if (x==m){
       return y;
       break;
     } 
    y++;
   }
  return -1;
}

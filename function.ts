function echo(message: string): void {
    console.log(message.toUpperCase());
}
function plus(a: number, b: number): number {
    return a + b;
}

function iterateArray(arr: any[]): void {
    function recursiveHelper(index: number): void {
      if (index < arr.length) {
        console.log(arr[index]);
        recursiveHelper(index + 1);
      }
    }
    recursiveHelper(0);
  }
  
  // Example usage
  const array = [1, 2, 3, 4, 5];
  // iterateArray(array);
  


let add1: (a: number, b: number) => number =
  function (x: number, y: number) {
      return x + y;
};
console.log(add1(10, 5));
    
let add2 = function (x: string, y: string): number {
  return x.concat(y).length;
};

// optional parameter
function multiply(a: number, b: number, c?: number): number {

  if (typeof c !== 'undefined') {
      return a * b * c;
  }
  return a * b;
}

// default parameter
function substract(a:number = 10, b: number = 20):number {
  return a + b
}

function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}
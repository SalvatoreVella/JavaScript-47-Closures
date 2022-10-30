function multiplyByTwo(value) {
  let number = 2;
  let inner = () => {
    number *= value;
    return number;
  }
  return inner;
}

console.log(multiplyByTwo(4)());
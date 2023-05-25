let math = {
  cbrt(value) {
     return parseFloat(value**(1/3))*1.000000000000001;
  },
  sqrt(value) {
    return value**(1/2);
  },
  floor(value) {
    return value-value%10;
  },
  ceil(value) {
    return value+value%10;
  }
}

let res = math.cbrt(125)
console.log(res);
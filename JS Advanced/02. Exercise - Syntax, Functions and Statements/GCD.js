function solve(num1, num2) {
  let index = 2;
  let isFlag = true;
  while (isFlag)
    if (num1 % index == 0 && num2 % index == 0) {
      console.log(index);
      isFlag = false;
    } else {
      index++;
    }
}

solve(15, 5);

function lastK(n, k) {
  let result = [1];

  for (let i = 0; i < n - 1; i++) {
      let lastK = result.slice(-k);

      let sum = 0;
      for(let elements of lastK){
          sum += elements;
      }

      result.push(sum);
  }

  console.log(result.join(` `));
}

lastK(6, 3);

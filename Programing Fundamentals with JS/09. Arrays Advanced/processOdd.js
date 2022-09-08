function processOdd(arr){
    let oddNums = arr.filter((x, i) => i % 2 == 1);
    let doubled = oddNums.map((x, i) => x * 2)
    console.log(doubled.reverse().join(` `));
}

processOdd([3, 0, 10, 4, 7, 3]);
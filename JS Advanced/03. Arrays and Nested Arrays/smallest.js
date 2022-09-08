function solve(arr){
    let sorted = arr.sort((a, b) => a - b);
    let result = [];
    result.push(sorted.shift());
    result.push(sorted.shift());
    console.log(result.join(` `));
}

solve([30, 15, 50, 5]);
function solve(arr){
    let sorted = arr.sort((a, b) => a - b);
    let biggerHalf = Math.floor(sorted.length / 2);
    let result = sorted.splice(biggerHalf);
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]);
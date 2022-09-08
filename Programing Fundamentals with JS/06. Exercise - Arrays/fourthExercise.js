function solve(arr, num){
    let digit = 0;
    for(let i = 1; i <= num; i++){
        digit = arr.shift();
        arr.push(digit)
    }
    console.log(arr.join(` `));
}
solve([51, 47, 32, 61, 21], 2);
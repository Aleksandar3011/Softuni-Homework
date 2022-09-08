function solve(arr){
    let biggest = [];
    for(let el of arr){
        biggest.push(Math.max(...el));
    }
    let sorted = biggest.sort((a, b) => a - b);
    console.log(sorted.pop());
}

solve([[20, 50, 10],
    [8, 33, 145]]);
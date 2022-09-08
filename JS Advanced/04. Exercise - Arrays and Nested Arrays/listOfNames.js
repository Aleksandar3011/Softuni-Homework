function solve(arr){
    let sorted = arr.sort((a, b) => a.localeCompare(b));
    let num = 1;
    for(let el of sorted){
        console.log(`${num}.${el}`);
        num++;
    }
}

solve(["John", "Bob", "Christina", "Ema"]);
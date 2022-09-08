function solve(arr){
    let result = [];
    for(let el of arr){
        if(Math.max(...result) <= el){
            result.push(el);
        }
    }
    return result;

}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
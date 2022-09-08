function solve(arr, inc){
    let result = [];
    // result.push(arr[0]);
    for(let i = 0; i < arr.length; i+=inc){
        result.push(arr[i]);
        
    }
    return result;
}

solve(['1', 
'2',
'3', 
'4', 
'5'], 
6);
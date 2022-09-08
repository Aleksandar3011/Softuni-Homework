function solve(arr, n){
    for(let i = 0; i < n; i++){
        let rotationNum = arr.pop();
        arr.unshift(rotationNum);
    }
    console.log(arr.join(` `));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);
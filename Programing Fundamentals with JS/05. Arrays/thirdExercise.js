function solve(num, arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i <= num - 1){
            newArr.push(arr[i])
        }
    }
    newArr = newArr.reverse()
    console.log(newArr.join(` `));
}
solve(3, [10, 20, 30, 40, 50]);
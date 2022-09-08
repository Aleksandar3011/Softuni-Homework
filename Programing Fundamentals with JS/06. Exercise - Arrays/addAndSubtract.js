function solve(arr){
    let newArr = [];
    let originalArr = 0;
    let modifiedArr = 0;
    for(let i = 0; i < arr.length; i++){
        originalArr += arr[i];
        if(arr[i] % 2 == 0){
            arr[i] += i;
        }else{
            arr[i] -= i;
        }
        modifiedArr += arr[i];
        newArr.push(arr[i]);
    }
    console.log(newArr);
    console.log(originalArr);
    console.log(modifiedArr);
}
solve([5, 15, 23, 56, 35]);
console.log(`--------------`);
solve([-5, 11, 3, 0, 2]);

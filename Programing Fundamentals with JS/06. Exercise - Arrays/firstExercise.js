function solve(arr){
    let newArr = [];
    let originalSum = 0;
    let newSum = 0;
    for(let i = 0; i < arr.length; i++){
        originalSum += arr[i];
        if(arr[i] % 2 == 0){
            newArr.push(arr[i] + i);
            newSum += arr[i] + i;
        }else{
            newArr.push(arr[i] - i)
            newSum += arr[i] - i;
        }
    }
    console.log(newArr);
    console.log(originalSum);
    console.log(newSum);
}
solve([5, 15, 23, 56, 35]);
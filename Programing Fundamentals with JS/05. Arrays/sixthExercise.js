function solve(arr){
    let evenNum = 0;
    let oddNum = 0;

    for(let num of arr){
        if(num % 2 == 0){
            evenNum += num;
        }else{
            oddNum += num;
        }
    }
    console.log(evenNum - oddNum);
}
solve([1,2,3,4,5,6]);
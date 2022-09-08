function solve(arr){
    let totalSum = 0;

    for(let num of arr){
        num = Number(num)
        if(num % 2 == 0){
            totalSum += num;
        }
    }
    console.log(totalSum);
}
solve(['1','2','3','4','5','6']);
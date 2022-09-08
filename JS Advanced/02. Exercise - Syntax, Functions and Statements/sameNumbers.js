function solve(nums){
    nums = String(nums);
    let isFlag = true;
    let firstEl = nums[0];
    let sum = Number(firstEl);
    for(let i = 1; i < nums.length; i++){
        sum += Number(nums[i]);
        if(firstEl != nums[i]){
            isFlag = false;
        }
    }
    if(isFlag){
        console.log(`true`);
    }else{
        console.log(`false`);
    }
    console.log(sum);
}

solve(1234);
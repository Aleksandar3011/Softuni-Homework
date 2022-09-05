function printAndSum(startNum, endNum) {
    let sum = 0;
    let res = "";
    for (let i = startNum; i <= endNum; i++){
        sum+=i
        res += i + " "
    }
    console.log(res);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
function solve(input){
    let sumOfAllEl = 0;
    for(let num of input){
        sumOfAllEl += num;
    }
    console.log(sumOfAllEl);
    
    let sumOfReverse = 0;
    let arrOfSumRev = [];
    for(let num of input){
        arrOfSumRev.push(1/num);
    }
    for(num of arrOfSumRev){
        sumOfReverse+= num;
    }
    console.log(sumOfReverse);

    let result = ``;
    for(let el of input){
        result+= el;
    }
    console.log(result);
}

solve([1, 2, 3]);
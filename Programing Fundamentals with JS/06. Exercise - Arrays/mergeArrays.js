function mergeArr(firstArr, secondArr){
    let digitsOfFirst = 0;
    let digitsOfSecond = 0;
    let next = 0;
    let newArr = [];
    for(let i of firstArr){
        digitsOfFirst = i;
        for(let j = next; j < secondArr.length; j++){
            digitsOfSecond = secondArr[j];
            if(next % 2 == 0){
                newArr.push(Number(digitsOfFirst) + Number(digitsOfSecond));
            }else{
                newArr.push(digitsOfFirst + digitsOfSecond);
            }
            next++;
            break;
        }
         
         
    }
    
    console.log(newArr.join(` - `));
    
}
mergeArr(
['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
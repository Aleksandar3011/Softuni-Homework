function equalArr(firstArr, secondArr){
    let sum = 0;
    
    for(let i = 0; i < firstArr.length; i++){
        sum += Number(firstArr[i])
        if(firstArr[i] != secondArr[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
        console.log(`Arrays are identical. Sum: ${sum}`);
    
}
equalArr(['10','20','30'], ['10','20','30']);
console.log(`--------`);
equalArr(['1'], ['10']);
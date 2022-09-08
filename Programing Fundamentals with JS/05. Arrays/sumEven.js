function sumEven(arr){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        let arrAsNumber = 0;
        arrAsNumber = Number(arr[i]);
        if(arrAsNumber % 2 == 0){
            res += arrAsNumber;
        }
    }
    console.log(res);
    
    
}
sumEven(['1','2','3','4','5','6']);
sumEven(['3','5','7','9']);
sumEven(['2','4','6','8','10']);

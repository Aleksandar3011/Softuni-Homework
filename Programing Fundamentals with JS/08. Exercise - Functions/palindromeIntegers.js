function palindomeIntegers(arr){
    for(let i = 0; i < arr.length; i++){
        let numInArr = arr[i].toString()
        
        if(numInArr[0] == numInArr[numInArr.length - 1]){
            console.log(`true`);
        }else{
            console.log(`false`);
        }
    }
}

palindomeIntegers([32,2,232,1010]);

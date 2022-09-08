function amazingNumbers(num){

    let numAsString = String(num);
    let sum = 0;
    for(let i = 0; i < numAsString; i++){
        sum += Number(numAsString[i])
    }
    let sumAsString = String(sum);
    let type = ``;
    for(let i = 0; i < sumAsString; i++){
        if(sumAsString[i] == `9`){
            type = `True`
            console.log(`${num} Amazing? ${type}`);
        }
    }
    if(type != `True`){
        type = `False`
        console.log(`${num} Amazing? ${type}`);
    }

}

amazingNumbers(1233);
amazingNumbers(999);

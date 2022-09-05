function pyramideOfNum(n){
    let res = ``;

    for(let i = 1; i <=n; i++){
        res = 0
        for(let j = 1; j <= i; j++){
            res += j;
            console.log(res);
        }
    }


}

pyramideOfNum(7)
function negativePositive(arr){
    // arr.sort((a,b) => a - b);
    // console.log(arr);

    let res = [];
    for(let elements of arr){
        elements = Number(elements)
        if(elements < 0){
            res.unshift(elements)
        }else{
            res.push(elements)
        }
    }
    console.log(res.join(`\n`));
}

negativePositive(['7', '-2', '8', '9']);
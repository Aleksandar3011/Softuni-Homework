function repeatString(string, repeat){
    let res = ``;

    for(let i = 0; i < repeat; i++){
        res = string + res;
    }
    return res;

}


console.log(repeatString("abc", 3));
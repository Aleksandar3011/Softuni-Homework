function replaceRepChars(input){
    let result = ``;

    for(let i = 0; i < input.length; i++){
        let currChar = input[i + 1];
        if(input[i] != currChar){
            result += input[i];
        }
    }
    console.log(result);
}

replaceRepChars('qqqwerqwecccwd');
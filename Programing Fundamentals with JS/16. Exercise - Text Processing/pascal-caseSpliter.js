function caseSpliter(input){
    input = input.split(``);
    let result = [];
    let currWord = ``;
    for(let currChar of input){
        if(currChar == currChar.toUpperCase()){
            result.push(currWord);
            currWord = ``;
            currWord += currChar;
        }else if(currChar == currChar.toLowerCase()){
            currWord += currChar
        }
    }
    result.push(currWord);
    result = result.join(`, `).substring(2);
    console.log(result);
}

caseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');
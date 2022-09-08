function solve(word, text){
    text = text.split(` `);
    for(let currWord of text){
        currWord = currWord.toLowerCase();
        if(currWord == word){
            console.log(currWord);
            return;
        }
    }
    console.log(`${word} not found!`);
}

solve('javascript',
'JavaScript is the best programming language');
console.log(`---`);
solve('python',
'JavaScript is the best programming language')
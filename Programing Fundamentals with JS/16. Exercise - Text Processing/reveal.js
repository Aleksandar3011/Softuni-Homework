function reveal(word, text){

    let censoredWord = ``;
    let words = word.split(`, `);
    text = text.split(` `);

    for(let currWord of words){
        for(let char of currWord){
            censoredWord += `*`;
        }
        
        for(let token of text){
            if(token == censoredWord){
                let indexOfToken = text.indexOf(token)
                text[indexOfToken] = currWord
                censoredWord = ``;
            }
        }
    }
    
    console.log(text.join(` `));
}

reveal('great',
'softuni is ***** place for learning new programming languages');
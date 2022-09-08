function solve(text, word){
    text = text.split(` `);
    // let count = 0;
    // for(let currWord of text){
    //     if(currWord == word){
    //         count++
    //     }
    // }

    let count = text.filter(x => x == word)
    console.log(count.length);
}

solve('This is a word and it also is a sentence',
'is');
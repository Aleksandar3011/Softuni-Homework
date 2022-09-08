function censored(text, censoredWord){

    // while (text.includes(censoredWord)) {
    //     text = text.replace(censoredWord, `*`.repeat(censoredWord.length));
    // }
    // console.log(text);

    let tokens = text.split(censoredWord);
    console.log(tokens.join(`*`.repeat(censoredWord.length)));
}

censored('A small sentence with some small words', 'small');
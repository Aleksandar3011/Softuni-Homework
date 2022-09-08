function solve(input){
    let words = input.split(` `);
    
    let result = {};

    for(let word of words){
        word = word.toLowerCase();
        let count = 0;
        for(let currWord of words){
            currWord = currWord.toLowerCase();
            if(word == currWord){
                count++;
            }
        }
        if(count % 2 == 1){
            result[word] = word;
        }
    }
    let oneLine = ``;
    for(let key in result){
        oneLine += `${key} `;
    }
    console.log(oneLine);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
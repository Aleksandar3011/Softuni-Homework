function oddOccurrences(input){
    let words = input.split(` `);
    let result = {};

    for(let word of words){
        word = word.toLocaleLowerCase();
        
        if(result.hasOwnProperty(word)){
            result[word]++;
        }else{
            result[word] = 1;
        }
    }

    let finalWords = [];

    for(let currCount of Object.entries(result)){
        if(currCount[1] % 2 == 1){
            finalWords.push(currCount[0]);
        }
    }

    console.log(finalWords.join(` `));
    
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
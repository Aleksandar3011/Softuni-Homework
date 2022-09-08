function solve(input){
    let result = {};

    let words = input.shift().split(` `);
    
    for(let word of words){
        result[word] = 0;

        for(let currWord of input){
            if(word == currWord){
                result[word] += 1;
            }
        }
        
    }

    let sorted = Object.entries(result);
    sorted = sorted.sort((a, b) => b[1] - a[1])

    for(let [word, count] of sorted){
        console.log(`${word} - ${count}`);
    }
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
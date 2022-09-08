function wordTracker(input){
    
    let words = input.shift().split(` `);
    let result = {};
    

    for(let word of words){
        result[word] = 0;
    }

    for(let currWord of input){
        if(result.hasOwnProperty(currWord)){
            result[currWord]++;
        }
    }
    
    let sorted = Object.entries(result)
    sorted = sorted.sort((a, b) => b[1] - a[1]);

    for(let [word, num] of sorted){
        console.log(`${word} - ${num}`);
    }
}

wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );
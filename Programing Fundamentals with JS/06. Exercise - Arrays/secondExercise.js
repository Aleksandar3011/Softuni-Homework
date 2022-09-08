function solve(firstArr, secondArr){
    for(let digitsOfFirst of firstArr){
        
        for(let digitsOfSecond of secondArr){
            if(digitsOfFirst === digitsOfSecond){
                console.log(digitsOfFirst);
            }
        }
    }
}
solve(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
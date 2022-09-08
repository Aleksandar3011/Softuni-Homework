function commonElements(firstArr, secondArr){
    for(let wordOfFirst of firstArr){
        for(let wordOfSec of secondArr)
        if(wordOfFirst === wordOfSec){
            console.log(wordOfFirst);
        }
    }
}
commonElements(
['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
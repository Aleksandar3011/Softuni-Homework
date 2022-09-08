function cutAndReverse(input){
    let result = [];
    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length / 2);
    
    let wordsOfFirstHalf = ``;
    for(let i = firstHalf.length - 1; i >= 0; i--){
        wordsOfFirstHalf += firstHalf[i];
    }

    let wordsOfSecondHalf = ``;
    for(let i = secondHalf.length - 1; i >= 0; i--){
        wordsOfSecondHalf += secondHalf[i];
    }
    console.log(wordsOfFirstHalf);
    console.log(wordsOfSecondHalf);

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
function solve(input){

    let firstNum = Number(input[0]);
    let secondNUm = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;

    for(let i = firstNum; i <= secondNUm; i++){
        for(let j = firstNum; j <= secondNUm; j++){
            combinations++
            if(i + j === magicNum){
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                return;
             }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNum}`);
}
solve(["88",
"888",
"1000"])


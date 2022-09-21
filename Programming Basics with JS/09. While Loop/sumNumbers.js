function sumNumbers(input) {
    let index = 0;
    let motherNum = Number(input[index]);
    index++;
    
    let sum = 0;

    while(sum < motherNum){
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);
    
    
}

sumNumbers(["100",
"10",
"20",
"30",
"40"])

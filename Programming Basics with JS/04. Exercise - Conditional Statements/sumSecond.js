function sumSecond(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let totalTimeInSec = a + b + c;
    let timeInMin = Math.floor (totalTimeInSec / 60);
    let timeInSec = totalTimeInSec % 60;

    if(timeInSec < 10){
        console.log(`${timeInMin}:0${timeInSec}`);

    }else{
        console.log(`${timeInMin}:${timeInSec}`);
    }

}

sumSecond(["35",
"45",
"44"]);

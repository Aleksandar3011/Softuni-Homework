function swimingWorldRecord(input) {
    let recordSec = Number(input[0]);
    let meters = Number(input[1]);
    let timeSec = Number(input[2]);

    let swiming = meters * timeSec;
    let bonusTime = Math.floor(meters / 15) * 12.5;
    let totalTime = swiming + bonusTime;

    if (totalTime >= recordSec) {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`);
    }else if (totalTime <= recordSec){
        console.log (`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
}

swimingWorldRecord(["55555.67",
"3017",
"5.03"])







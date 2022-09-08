function lunchBreak(input) {

    let serial = input[0];
    let episode = Number(input[1]);
    let brek = Number(input[2]);

    let lunch = brek / 8;
    let rest = brek / 4;
    let time = brek - (lunch + rest);

    if(time >= episode){
        time = time - episode
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(time)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(episode - time)} more minutes.`);
    }


}

lunchBreak(["Teen Wolf",
"48",
"60"])

function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]);
    let volumeTank = length * width * heigth;
    let volumeInLitters = volumeTank * 0.001;
    let totalLitters = volumeInLitters - (volumeInLitters * (percent / 100));

        console.log(totalLitters);

}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);
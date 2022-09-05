function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1])
    let paintThiner = Number(input[2]) * 5.00;
    let hours = Number(input[3]);
    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.1)) * 14.50;
    let sumForSupplies = nylonPrice + paintPrice + paintThiner + 0.40;
    let workerPrice = ((sumForSupplies * 30) / 100) * hours;
    let totalSum = sumForSupplies + workerPrice;
    
        console.log(totalSum);
}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
);